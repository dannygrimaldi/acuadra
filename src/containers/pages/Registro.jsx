import Header from '../../components/header';
import Footer from '../../components/footer';
import Register from '../../components/Register';

function Autenticacion(){
    return(
        <div>
            <Header />
            {/* Contenido principal de tu página de inicio */}
            <main>
           <Register />
            </main>
            <Footer />
        </div>
    );
}
export default Autenticacion;