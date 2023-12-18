import Header from '../../components/header';
import Footer from '../../components/footer';
import Formtdd from '../../components/Formtdd';
import Layout from '../../hocs/layouts/Layout';



function SetdataTdd(){
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <Layout>
                <main className="flex-grow">
                   
                        {/* Contenido principal de tu página de inicio */}
                        <Formtdd/>
                </main>
            </Layout>
            <Footer />
        </div>
    );
}
export default SetdataTdd;