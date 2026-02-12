
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-brand-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <p className="font-orbitron text-sm font-bold tracking-widest text-white/40">
            © {new Date().getFullYear()} GUSTAVO CANTINO
          </p>
        </div>
        
        <div className="flex gap-8">
           <a href="#" className="text-[10px] font-orbitron font-bold text-white/20 hover:text-brand-red uppercase tracking-widest transition-colors">Terms of Play</a>
           <a href="#" className="text-[10px] font-orbitron font-bold text-white/20 hover:text-brand-red uppercase tracking-widest transition-colors">Privacy Mission</a>
        </div>

        <p className="font-orbitron text-[10px] font-bold tracking-widest text-white/20 uppercase">
          Crafted for the virtual age.
        </p>
      </div>
<div className="text-center space-y-2">
          
          <p className="font-inter text-[11px] text-white/30">
            <a
              href="https://discord.com/channels/@me/1057488804497326152"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2B9FE6] transition-colors"
            >
              powered by Astuto
            </a>
          </p>
        </div>
      
    </footer>
  );
};
