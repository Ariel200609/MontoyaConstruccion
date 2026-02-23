export default function Especialidades() {
  const servicios = [
    { num: "01", titulo: "Casas desde Cero", desc: "Gestión integral de la obra, desde los cimientos hasta los detalles finales de terminación." },
    { num: "02", titulo: "Remodelaciones", desc: "Renovación de espacios interiores y exteriores, adaptando estructuras existentes a nuevas necesidades." },
    { num: "03", titulo: "Albañilería General", desc: "Trabajos de mampostería, revoques, contrapisos, techos y soluciones estructurales de alta calidad." }
  ];

  return (
    <section className="px-8 md:px-16 lg:px-24 py-24 bg-[#E8E8E3] text-stone-900 border-t border-stone-300">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Título de la sección */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <h2 className="text-3xl font-medium tracking-tight mb-6">
            Nuestras <br/>
            <span className="font-serif italic text-stone-500">Especialidades</span>
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed font-light max-w-xs">
            Abordamos cada proyecto con la misma dedicación, sin importar la escala. Trabajo autónomo, responsable y con terminaciones impecables.
          </p>
        </div>

        {/* Lista de servicios */}
        <div className="lg:col-span-8 flex flex-col">
          {servicios.map((item, index) => (
            <div 
              key={index} 
              className="group border-b border-stone-300 py-8 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 cursor-pointer hover:border-orange-600 transition-colors duration-500"
            >
              <span className="text-sm font-bold tracking-[0.2em] text-stone-400 group-hover:text-orange-600 transition-colors">
                {item.num}
              </span>
              <div className="flex-1">
                <h3 className="text-2xl md:text-4xl font-medium tracking-tighter mb-4 group-hover:text-orange-600 transition-colors">
                  {item.titulo}
                </h3>
                <p className="text-stone-500 font-light text-sm max-w-lg group-hover:text-stone-700 transition-colors">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}