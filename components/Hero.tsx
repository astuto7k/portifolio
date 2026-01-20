
import React from 'react';
import { Youtube, Gamepad2, MessageSquare } from 'lucide-react';

const XIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const TikTokIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const Hero: React.FC = () => {
  const floatingWords = [
    { text: "GAME PRODUCER", top: "12%", left: "5%", size: "text-[8px] md:text-[10px]" },
    { text: "GAME MARKETER", top: "25%", left: "45%", size: "text-[10px] md:text-[12px]" },
    { text: "BUILDER", top: "8%", left: "75%", size: "text-[9px] md:text-[11px]" },
    { text: "MODELER", top: "55%", left: "85%", size: "text-[8px] md:text-[10px]" },
    { text: "CONTENT CREATOR", top: "75%", left: "10%", size: "text-[7px] md:text-[9px]" },
    { text: "GOAT", top: "85%", left: "40%", size: "text-[9px] md:text-[11px]" },
  ];

  const socialLinks = [
    { icon: <XIcon />, href: "https://x.com/Guga_028" },
    { icon: <Gamepad2 size={18} />, href: "https://www.roblox.com/users/168572769/profile" },
    { icon: <Youtube size={18} />, href: "https://www.youtube.com/@Guga028" },
    { icon: <TikTokIcon />, href: "https://www.tiktok.com/@guga_028" },
    { icon: <MessageSquare size={18} />, href: "https://discord.com/users/168572769" },
  ];

  return (
    <section className="relative min-h-[90vh] md:min-h-screen hero-gradient flex items-center px-4 md:px-6 pt-24 pb-12 overflow-hidden text-white">
      {/* Floating Background Text */}
      {floatingWords.map((word, idx) => (
        <div 
          key={idx}
          className={`absolute floating-text font-orbitron transition-transform duration-[15s] animate-float-slow opacity-20 md:opacity-100 ${word.size}`}
          style={{ top: word.top, left: word.left, animationDelay: `${idx * 1.5}s` }}
        >
          {word.text}
        </div>
      ))}

      {/* Sparkles */}
      <div className="absolute top-[20%] left-[10%] text-brand-red animate-sparkle">✦</div>
      <div className="absolute top-[60%] left-[85%] text-brand-red/40 animate-sparkle delay-700">✦</div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-6 md:space-y-8 reveal reveal-left active text-center lg:text-left order-2 lg:order-1">
          <div className="space-y-4 md:space-y-6 relative inline-block lg:block">
            <h4 className="font-poppins text-brand-red font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px]">Premium Portfolio</h4>
            <h1 className="font-orbitron text-6xl sm:text-7xl md:text-9xl font-black text-white leading-none tracking-tighter mb-2">Guga</h1>
            <h3 className="font-orbitron text-[10px] md:text-sm font-bold text-white/90 leading-relaxed uppercase tracking-[0.15em] md:tracking-[0.2em] border-l-2 border-brand-red pl-4 mx-auto lg:mx-0 max-w-fit">
              Building games, communities and audiences at scale.
            </h3>
          </div>

          <p className="max-w-xl mx-auto lg:mx-0 text-white/50 text-sm md:text-lg leading-relaxed font-inter font-light pt-2">
            55B+ total visits contributed. Overseeing game production pipeline, viral marketing, and strategic growth for one of the scene's rising titles.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="#projects" className="w-full sm:w-auto px-10 py-4 bg-brand-red hover:bg-red-700 text-white font-orbitron text-[10px] font-bold tracking-widest transition-all hover:-translate-y-1 shadow-lg shadow-brand-red/20 active:scale-95">
              VIEW PROJECTS
            </a>
            <a href="#contact" className="w-full sm:w-auto px-10 py-4 bg-transparent hover:bg-white/5 text-white font-orbitron text-[10px] font-bold tracking-widest border border-white/10 transition-all hover:-translate-y-1 active:scale-95">
              CONTACT
            </a>
          </div>

          {/* Socials */}
          <div className="flex justify-center lg:justify-start gap-4 pt-2">
            {socialLinks.map(({ icon, href }, i) => (
              <a 
                key={i} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/5 text-white/60 border border-white/10 rounded-full hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-300 flex items-center justify-center"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Content - Responsive Avatar */}
        <div className="relative flex justify-center lg:justify-end reveal reveal-right active stagger-2 order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-2 bg-brand-red rounded-full blur-2xl opacity-10 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[420px] md:h-[420px] rounded-full border-[4px] md:border-[6px] border-white/5 shadow-2xl overflow-hidden bg-brand-dark transition-all duration-700 group-hover:border-brand-red/30">
              <img 
                src="https://i.ibb.co/Kct6s9yM/16-Sem-Titulo-20220914131403.png" 
                alt="Guga Avatar" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
            </div>
            {/* Pulsing Badge */}
            <div className="absolute bottom-[5%] -left-[5%] md:left-[5%] bg-brand-red text-white font-orbitron font-bold text-[7px] md:text-[8px] px-3 md:px-4 py-2 tracking-[0.2em] uppercase rounded-full shadow-lg shadow-brand-red/40 animate-pulse">
              Open to collaborations
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
