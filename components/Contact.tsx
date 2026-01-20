
import React from 'react';
import { Mail, Youtube, MessageSquare, Linkedin } from 'lucide-react';

const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const TikTokIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const Contact: React.FC = () => {
  const socials = [
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/gustavo-cantino-1530731b6/', label: 'Gustavo Cantino' },
    { name: 'X / Twitter', icon: <XIcon />, href: 'https://x.com/Guga_028', label: '@Guga_028' },
    { name: 'YouTube', icon: <Youtube size={20} />, href: 'https://www.youtube.com/@Guga028', label: '@Guga028' },
    { name: 'TikTok', icon: <TikTokIcon />, href: 'https://www.tiktok.com/@guga_028', label: '@guga_028' },
    { name: 'Discord', icon: <MessageSquare size={20} />, href: 'https://discord.com/users/168572769', label: 'guga_028' },
    { name: 'Email', icon: <Mail size={20} />, href: 'mailto:contato.guga028@gmail.com', label: 'contato.guga028@gmail.com' },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-12 md:p-24 rounded-3xl relative overflow-hidden text-center reveal reveal-up">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/5 blur-[120px] rounded-full"></div>
          
          <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
            <h2 className="font-orbitron text-5xl md:text-7xl font-black leading-none tracking-tighter">
              LET'S <span className="text-brand-red">CONNECT.</span>
            </h2>
            <p className="text-white/40 text-sm md:text-lg font-inter font-light">
              Available for high-impact production and creative direction. 
              Let's build the next generation of experiences together.
            </p>
            
            <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {socials.map((social, idx) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 p-4 rounded-xl border border-white/5 hover:border-brand-red/30 transition-all duration-300 reveal reveal-up stagger-${(idx % 3) + 1}`}
                >
                  <div className="text-white/20 group-hover:text-brand-red transition-colors flex-shrink-0 flex items-center justify-center">
                    {social.icon}
                  </div>
                  <div className="text-left overflow-hidden">
                    <p className="text-[8px] uppercase font-orbitron font-bold text-white/20 tracking-widest">{social.name}</p>
                    <p className="text-xs font-medium text-white/60 group-hover:text-white transition-colors truncate">{social.label}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-12 reveal reveal-up stagger-3">
               <a 
                href="mailto:contato.guga028@gmail.com" 
                className="inline-block px-12 py-5 bg-white text-brand-black font-orbitron font-black text-[10px] tracking-[0.3em] hover:bg-brand-red hover:text-white transition-all duration-500 rounded-full active:scale-95"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
