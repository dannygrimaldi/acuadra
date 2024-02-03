import Header from '../../components/header';
import Footer from '../../components/footer';
import Login from '../../components/Login';

function Autenticacion(){
    return(
        <div>
            <Header />
            {/* Contenido principal de tu página de inicio */}
            <main>
           <Login />
            </main>
            <Footer />
        </div>
    );
}
export default Autenticacion;