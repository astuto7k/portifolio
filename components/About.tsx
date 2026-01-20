
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-24 px-6 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative group reveal reveal-left active order-2 md:order-1">
          <div className="absolute -inset-4 bg-brand-red/10 rounded-xl blur-3xl group-hover:bg-brand-red/20 transition-all duration-500"></div>
          <img 
            src="https://i.ibb.co/4nx2mFcB/IMG-6362.jpg" 
            alt="Gustavo Cantino" 
            className="relative rounded-2xl border border-white/10 w-full aspect-[4/5] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
            loading="lazy"
          />
          <div className="absolute -bottom-6 -right-6 glass-card p-4 md:p-6 rounded-2xl hidden sm:block reveal reveal-up active stagger-3">
            <p className="font-orbitron text-2xl md:text-4xl font-black text-brand-red">10+</p>
            <p className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-[0.2em] mt-1">Years in Roblox</p>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8 reveal reveal-right active stagger-1 order-1 md:order-2 text-center md:text-left">
          <div className="space-y-3 md:space-y-4">
            <h3 className="font-orbitron text-brand-red font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px]">Background</h3>
            <h2 className="font-orbitron text-3xl md:text-5xl font-black leading-tight uppercase">FROM PLAYER <br /><span className="text-brand-red">TO PIONEER.</span></h2>
          </div>

          <p className="text-white/50 text-base md:text-lg leading-relaxed font-inter font-light">
            Starting at age 11, I turned a curiosity for virtual worlds into a record-breaking career. By 15, I launched my first major project, laying the foundation for <span className="text-white font-bold">Corridor of Hell</span>.
          </p>

          <p className="text-white/50 text-base md:text-lg leading-relaxed font-inter font-light">
            Today, with over <span className="text-brand-red font-bold">55 Billion visits</span>, my work focuses on bridging high-fidelity production with massive community growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-6 md:pt-8 border-t border-white/5 text-left">
            <div>
              <h4 className="font-orbitron text-white text-[9px] md:text-[10px] font-bold mb-2 uppercase tracking-widest">Main Focus</h4>
              <p className="text-[11px] md:text-xs text-white/30 leading-relaxed font-inter">Game Production, Marketing Strategy & Global Content Creation.</p>
            </div>
            <div>
             
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
