import Header from '../../components/header';
import Footer from '../../components/footer';
//import FileReaderComponent from '../../components/FileReaderComponent';
import PdfTextExtractor from '../../components/PdfTextExtractor'

function Avisos(){
    return(
        <div>
            <Header />
            {/* Contenido principal de tu página de inicio */}
            <main>
            < PdfTextExtractor/>
 </main>
            <Footer />
        </div>
    );
}
export default Avisos;