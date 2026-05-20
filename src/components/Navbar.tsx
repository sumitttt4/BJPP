"use client";

export function Navbar() {
  return (
    <nav className="w-full px-6 lg:px-12 py-5 flex justify-between items-center bg-white border-b border-brand-pink-border z-40 relative">
      <div className="font-sans font-black text-2xl tracking-tighter text-brand-black uppercase">
        BADDIE<span className="text-brand-pink">JP</span>
      </div>
      <div className="hidden md:flex gap-10 font-sans font-semibold text-xs text-brand-black uppercase tracking-widest">
        <a href="#manifesto" className="hover:text-brand-pink transition-colors">Manifesto</a>
        <a href="#cabinet" className="hover:text-brand-pink transition-colors">Cabinet</a>
      </div>
      <button 
        onClick={() => document.getElementById("cabinet")?.scrollIntoView({ behavior: "smooth" })}
        className="px-6 py-3 bg-brand-black text-white hover:bg-brand-pink rounded-full font-sans font-semibold text-xs uppercase tracking-widest transition-colors duration-300"
      >
        Join Now
      </button>
    </nav>
  );
}