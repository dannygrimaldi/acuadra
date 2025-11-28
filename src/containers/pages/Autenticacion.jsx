import Header from '../../components/header';
import Footer from '../../components/footer';
import Login from '../../components/login';


function Autenticacion(){
    return(
        <div className="flex flex-col min-h-screen">            
        <Header />
            {/* Contenido principal de tu página de inicio */}
            <main ClassName="flex-grow overflow-auto dark">
           <Login />
            </main>
            <Footer />
        </div>
    );
}
export default Autenticacion;