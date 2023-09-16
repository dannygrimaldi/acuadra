import Header from '../../components/header';
import Footer from '../../components/footer';

function Home(){
    return (
        <div className='min-h-screen flex flex-col'>
            <Header />
            {/* Contenido principal de tu página de inicio */}
            <main className="flex-grow relative">
                {/* <div className="bg-gradient-to-tr from-red-500 to-pink-500 blur opacity-1 absolute inset-0"></div> */}
                <div className="relative max-w-7xl mx-auto z-10">
                    Hola


                    gol
                </div>
            </main>
            <Footer className='mt-auto'/>
        </div>
    );
}

export default Home;
