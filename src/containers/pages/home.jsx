import Header from '../../components/header';
import Footer from '../../components/footer';
import Layout from '../../hocs/layouts/Layout';
import Formtdd from '../../components/Formtdd';
import BuscarAclaraciones from '../../components/Buscar';

import '../../styles/index.css';

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Layout>
                <main className="flex-grow overflow-auto dark">
                    {/* Contenedor principal: Fila, ajuste de línea (flex-wrap), centrado. */}
                    <div className="
                        flex 
                        flex-row 
                        flex-wrap 
                        justify-center 
                        items-start 
                        gap-4 
                        px-4 
                        w-full 
                        max-w-[1400px] 
                        mx-auto"
                    >
                        
                        {/* Buscar Aclaraciones */}
                        {/* 🔑 CLAVE: basis-full (ocupa 100% de la base en móvil) | sm:flex-1 (Horizontal flexible a partir de 640px) */}
                        <div className="basis-full sm:flex-1 sm:max-w-[600px]">
                            <BuscarAclaraciones />
                        </div>

                        {/* Formulario TDD */}
                        <div className="basis-full sm:flex-1 sm:max-w-[600px]">
                            <Formtdd />
                        </div>
                    </div>
                </main>
            </Layout>
            <Footer />
        </div>
    );
}

export default Home;