import Navbar from './Navbar';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-end pb-16 md:pb-24 bg-stone-900 overflow-hidden text-white">
      
      {/* Fondo animado */}
      <div 
        className="absolute inset-0 bg-cover bg-center scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      </div>

      <Navbar />

      {/* Contenido principal */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 w-full flex flex-col items-start opacity-0 animate-slide-in">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-orange-500"></div>
          <p className="text-xs uppercase tracking-[0.3em] text-stone-300">Albañilería & Arquitectura</p>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-medium tracking-tighter leading-[0.9] mb-8">
          Construimos <br />
          tu <span className="font-serif italic font-light text-stone-300">realidad.</span>
        </h1>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between w-full max-w-5xl gap-8 border-t border-white/20 pt-8 mt-4">
          <p className="max-w-md text-stone-300 text-sm md:text-base leading-relaxed font-light">
            Especialistas en casas desde cero y remodelaciones. Atención milimétrica en cada detalle de la obra, garantizando solidez y diseño excepcional.
          </p>
          <button className="text-xs tracking-[0.2em] uppercase font-semibold hover:text-orange-400 transition-all flex items-center gap-3 group">
            Explorar Obras <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}