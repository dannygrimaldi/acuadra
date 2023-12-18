import Header from '../../components/header';
import Footer from '../../components/footer';

function Home(){
    return(
        <div>
            <Header />
            {/* Contenido principal de tu página de inicio */}
            <main class="display-flex" className="flex-grow">
            <div className="container mx-auto p-4">
          <p>Contenido principal de tu página</p>
        </div>
            </main>
            <Footer />
        </div>
    );
}
export default Home;
