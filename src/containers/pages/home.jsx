import Header from '../../components/header';
import Footer from '../../components/footer';
import Layout from '../../hocs/layouts/Layout';
import '../../styles/index.css';
import Chat from '../../components/Chat';
function Home() {
    return (
        <div className="">
            <Header />
            <Layout>
                <main className="dark">
                    <div className="relative max-w-7xl mx-auto z-10">
                        {/* Contenido principal de tu página de inicio */}
                        <Chat />
                    </div>
                </main>
            </Layout>
            <Footer />
        </div>
    );
}

export default Home;
