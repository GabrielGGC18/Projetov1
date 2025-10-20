import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header(): JSX.Element {
  const [open, setOpen] = useState(false);

  const activeClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm ${isActive ? "bg-white/20 text-white" : "text-white/90 hover:bg-white/10"}`;

  return (
    <header className="bg-gradient-to-r from-pink-500 to-pink-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center"><href class = "logo">  </href></div>
            <span className="text-white font-bold">Site da Isis(O Nome é ProjetoKKKKKKK)</span>
          </NavLink>

          {/* desktop */}
          <nav className="hidden md:flex items-center gap-3">
            <NavLink to="/about" className={activeClass}>Sobre</NavLink>
            <NavLink to="/login" className={activeClass}>Entrar</NavLink>
          </nav>

          {/* mobile */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Abrir menu"
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-md text-white hover:bg-white/10"
            >
              {/* simple hamburger / close */}
              {open ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* mobile menu panel */}
        {open && (
          <div className="md:hidden mt-2 pb-4 border-t border-white/10">
            <nav className="flex flex-col px-2 gap-1">
              <NavLink to="/about" className={({isActive}) => `px-3 py-2 rounded-md ${isActive ? 'bg-white/20 text-white' : 'text-white/90 hover:bg-white/10'}`} onClick={() => setOpen(false)}>Sobre</NavLink>
              <NavLink to="/login" className={({isActive}) => `px-3 py-2 rounded-md ${isActive ? 'bg-white/20 text-white' : 'text-white/90 hover:bg-white/10'}`} onClick={() => setOpen(false)}>Entrar</NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}