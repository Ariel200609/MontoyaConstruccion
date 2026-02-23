export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white px-8 md:px-16 lg:px-24 py-24 w-full">
      <div className="max-w-[1400px] mx-auto flex flex-col">
        
        {/* Call to Action Gigante */}
        <h2 className="text-5xl md:text-8xl lg:text-[9rem] font-medium tracking-tighter leading-[0.9] mb-16 hover:text-orange-500 transition-colors duration-500 cursor-pointer">
          Hablemos de <br />
          tu <span className="font-serif italic font-light text-stone-400">proyecto.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/20 pt-12">
          {/* Ubicación */}
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-4">Ubicación</span>
            <p className="font-light text-stone-300">
              Laguna Alsina <br />
              Buenos Aires, Argentina
            </p>
          </div>

          {/* Contacto */}
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-4">Contacto Directo</span>
            <a href="tel:+549XXXXXXXXX" className="font-light text-stone-300 hover:text-orange-400 transition-colors mb-2">
              +54 9 (XXX) XXX-XXXX
            </a>
            <a href="mailto:contacto@montoyaconstrucciones.com" className="font-light text-stone-300 hover:text-orange-400 transition-colors">
              contacto@montoyaconstrucciones.com
            </a>
          </div>

          {/* Redes o Firma */}
          <div className="flex flex-col md:items-end">
            <span className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-4">Redes</span>
            <a href="#" className="font-light text-stone-300 hover:text-orange-400 transition-colors mb-2">Instagram</a>
            <a href="#" className="font-light text-stone-300 hover:text-orange-400 transition-colors">Facebook</a>
          </div>
        </div>

        <div className="w-full flex justify-between items-center mt-24 text-[0.65rem] tracking-[0.2em] uppercase text-stone-600">
          <span>© 2026 Montoya Construcciones.</span>
          <span>Desarrollado por Ariel Montoya</span>
        </div>
      </div>
    </footer>
  );
}