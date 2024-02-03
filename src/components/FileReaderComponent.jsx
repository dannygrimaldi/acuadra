import React, { useState } from 'react';

const FileReaderComponent = () => {
  const [fileContents, setFileContents] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      const readers = Array.from(files).map((file) => {
        const reader = new FileReader();
        return new Promise((resolve) => {
          reader.onload = (e) => {
            const content = e.target.result;
            resolve(content);
          };
          reader.readAsText(file);
        });
      });

      Promise.all(readers).then((contents) => {
        setFileContents(contents);
      });
    }
  };

  return (
    <div>
      {/* Input para cargar múltiples archivos */}
      <input type="file" onChange={handleFileChange} multiple />

      {/* Mostrar el contenido de los archivos */}
      <div>
        <h3>Contenido de los Archivos:</h3>
        <ul>
          {fileContents.map((content, index) => (
            <li key={index}>
              <strong>Archivo {index + 1}:</strong>
              <pre>{content}</pre>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FileReaderComponent;
