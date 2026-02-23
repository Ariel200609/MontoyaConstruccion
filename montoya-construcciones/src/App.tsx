import './index.css';
import Hero from './components/Hero';
import Obras from './components/Obras';
import Navbar from './components/Navbar';
import Especialidades from './components/Especialidades';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <main className="font-sans selection:bg-stone-900 selection:text-[#F5F5F0]">
      <Navbar />
      <Hero />
      <Obras />
      <Especialidades />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

export default App;