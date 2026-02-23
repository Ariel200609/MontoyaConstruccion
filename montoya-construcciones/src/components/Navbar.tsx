export default function Navbar() {
return (
    <nav className="absolute top-0 left-0 w-full p-8 md:p-12 flex justify-between items-start z-20 text-white">
    <div className="flex flex-col">
        <span className="text-sm font-bold tracking-[0.4em] uppercase">Montoya</span>
        <span className="text-[0.65rem] tracking-[0.2em] uppercase text-stone-400 mt-1">
        Construcciones
        </span>
    </div>
    <button className="text-xs tracking-[0.2em] uppercase hover:text-orange-400 transition-colors">
        Contacto
    </button>
    </nav>
);
}