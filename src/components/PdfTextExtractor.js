import React, { useRef, useState } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';
import 'pdfjs-dist/build/pdf.worker.min';

const PdfTextExtractor = () => {
  const fileInputRef = useRef(null);
  const [textContents, setTextContents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = async () => {
    try {
      setLoading(true);
      setError(null);

      // Configurar la ubicación del worker antes de cargar el archivo PDF
      GlobalWorkerOptions.workerSrc = require.resolve('pdfjs-dist/build/pdf.worker');

      const fileInput = fileInputRef.current;
      const files = fileInput.files;

      if (files.length === 0) {
        return;
      }

      const textContentPromises = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const reader = new FileReader();

        textContentPromises.push(
          new Promise((resolve, reject) => {
            reader.onload = async () => {
              try {
                const arrayBuffer = reader.result;
                const pdfData = new Uint8Array(arrayBuffer);

                const pdf = await getDocument(pdfData).promise;

                const pagePromises = [];
                for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                  const page = await pdf.getPage(pageNum);
                  const textContent = await page.getTextContent();
                  pagePromises.push(textContent);
                }

                Promise.all(pagePromises)
                  .then((pageTextContents) => {
                    resolve(pageTextContents);
                  })
                  .catch((error) => {
                    reject(error);
                  });
              } catch (error) {
                reject(error);
              }
            };

            reader.readAsArrayBuffer(file);
          })
        );
      }

      Promise.all(textContentPromises)
        .then((allTextContents) => {
          // Almacena el contenido de texto en el estado
          setTextContents(allTextContents.flat());
        })
        .catch((error) => {
          console.error('Error al extraer contenido de texto de las páginas:', error);
          setError(`Error al extraer contenido de texto de las páginas: ${error.message || error}`);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error('Error al cargar el archivo PDF:', error);
      setError(`Error al cargar el archivo PDF: ${error.message || error}`);
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} ref={fileInputRef} multiple />

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Mostrar el contenido de texto extraído */}
      {textContents.length > 0 && (
        <div>
          <h3>Contenido de Texto Extraído:</h3>
          {textContents.map((textContent, index) => (
            <div key={index}>
              <strong>Página {index + 1}:</strong>
              <p>{textContent.items.map((item) => item.str).join(' ')}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PdfTextExtractor;
