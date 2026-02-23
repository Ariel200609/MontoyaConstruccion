const obrasData = [
  {
    id: 1,
    titulo: "Casa Unifamiliar desde Cero",
    ubicacion: "Laguna Alsina",
    imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    estiloGrid: "md:col-span-7",
    estiloAspecto: "aspect-[4/5]",
    margenExtra: ""
  },
  {
    id: 2,
    titulo: "Remodelación de Interiores",
    ubicacion: "Zona Residencial",
    imagen: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    estiloGrid: "md:col-span-5",
    estiloAspecto: "aspect-square",
    margenExtra: "md:mt-32" 
  },
  {
    id: 3,
    titulo: "Ampliación y Fachada Moderna",
    ubicacion: "Centro",
    imagen: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    estiloGrid: "md:col-span-12",
    estiloAspecto: "aspect-[21/9]",
    margenExtra: "mt-12 md:mt-24"
  }
];

export default function Obras() {
  return (
    <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32 w-full max-w-[1400px] mx-auto bg-[#F5F5F0]">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-4 text-stone-900">
            Obras <span className="font-serif italic text-stone-400">Seleccionadas</span>
          </h2>
          <p className="text-stone-500 font-light max-w-sm">
            Un recorrido visual por nuestros proyectos más recientes. Calidad constructiva que se ve y se siente.
          </p>
        </div>
        <p className="text-xs uppercase tracking-[0.3em] font-bold text-stone-400">
          [ 2024 — 2026 ]
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        {obrasData.map((obra) => (
          <div key={obra.id} className={`group cursor-pointer ${obra.estiloGrid} ${obra.margenExtra}`}>
            <div className={`w-full overflow-hidden bg-stone-200 mb-6 ${obra.estiloAspecto}`}>
              <img 
                src={obra.imagen} 
                alt={obra.titulo}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
              />
            </div>
            <div className="flex justify-between items-start border-t border-stone-300 pt-4 text-stone-900">
              <h3 className="text-lg font-medium tracking-tight group-hover:text-orange-600 transition-colors">
                {obra.titulo}
              </h3>
              <span className="text-xs uppercase tracking-[0.2em] text-stone-500 text-right ml-4">
                {obra.ubicacion}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}