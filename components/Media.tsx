
import React from 'react';
import { ExternalLink, Play } from 'lucide-react';

const mediaArticles = [
  {
    outlet: "G1 Globo",
    title: "Roblox atrai desenvolvedores de até 12 anos",
    href: "https://g1.globo.com/pop-arte/games/noticia/2021/01/08/roblox-atrai-desenvolvedores-de-ate-12-anos-com-possibilidade-de-criar-jogos-e-ganhar-dinheiro.ghtml"
  },
  {
    outlet: "Medium",
    title: "Holofotes em Guga028 e Phoenix RDN",
    href: "https://medium.com/roblox-developer-portugu%C3%AAs/holofotes-em-guga028-e-phoenix-rdn-2109378342a8"
  },
  {
    outlet: "Interview",
    title: "Roblox DevRel Interview",
    href: "https://www.youtube.com/watch?v=WjUjewb2VeM",
    isVideo: true
  },
  {
    outlet: "Showcase",
    title: "Winner of BGS Roblox Gamejam Challenge",
    href: "https://www.youtube.com/watch?v=gUM2RqX_MHs&pp=ygUYc2J0IGJncyByb2Jsb3ggY2hhbGxlbmdl2AYE",
    isVideo: true
  }
];

const outlets = [
  "CNN Brasil",
  "SBT",
  "Brasil Game Show",
  "Roblox DevRel",
  "The Enemy"
];

export const Media: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-brand-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h3 className="font-orbitron text-brand-red font-bold tracking-widest uppercase text-sm">Featured In</h3>
          <h2 className="font-orbitron text-3xl md:text-4xl font-black uppercase">Press & <span className="text-brand-red">Recognition</span></h2>
        </div>
        
        {/* Featured Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {mediaArticles.map((article, idx) => (
            <a 
              key={idx} 
              href={article.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group glass-card p-8 rounded-2xl hover:border-brand-red/40 transition-all duration-500 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-orbitron text-[10px] font-bold text-brand-red uppercase tracking-widest">{article.outlet}</span>
                {article.isVideo ? <Play size={16} className="text-white/40" /> : <ExternalLink size={16} className="text-white/40" />}
              </div>
              <h4 className="font-orbitron text-lg font-black text-white group-hover:text-brand-red transition-colors flex-grow">{article.title}</h4>
              <p className="mt-4 text-white/30 text-xs font-inter">Read the full story &rarr;</p>
            </a>
          ))}
        </div>

        {/* Logo cloud style list */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0">
          {outlets.map((outlet, idx) => (
            <span key={idx} className="font-orbitron text-lg md:text-xl font-black uppercase tracking-tighter whitespace-nowrap">
              {outlet}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
