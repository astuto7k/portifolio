
import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#skills' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-brand-black/90 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-red rounded-full overflow-hidden flex items-center justify-center border-2 border-brand-red transition-transform group-hover:rotate-12 group-hover:scale-110">
            <img 
              src="https://i.ibb.co/Kct6s9yM/16-Sem-Titulo-20220914131403.png" 
              alt="Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-orbitron text-xl font-black text-white tracking-tighter">Guga<span className="text-brand-red">028</span></span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-[11px] font-bold transition-colors font-orbitron uppercase tracking-widest ${scrolled ? 'text-white/60 hover:text-brand-red' : 'text-white/80 hover:text-brand-red'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
           <a 
            href="https://discord.com/users/168572769"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-brand-red text-brand-red font-orbitron text-[10px] font-bold tracking-[0.2em] hover:bg-brand-red hover:text-white transition-all duration-300 uppercase"
          >
            LET'S TALK
          </a>
        </div>
      </div>
    </nav>
  );
};
