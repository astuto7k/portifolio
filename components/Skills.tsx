
import React from 'react';
import { Gamepad2, Layers, Cpu, Video, TrendingUp, Users, Presentation, Coins } from 'lucide-react';

const skillSet = [
  { name: "Game Production", icon: <Gamepad2 size={20} /> },
  { name: "Monetization specialist", icon: <Coins size={20} /> },
  { name: "Social Growth", icon: <TrendingUp size={20} /> },
  { name: "Influencer", icon: <Presentation size={20} /> },
  { name: "Roblox Studio", icon: <Cpu size={20} /> },
  { name: "Blender 3D", icon: <Layers size={20} /> },
  { name: "Video Production", icon: <Video size={20} /> },
  { name: "Community Leader", icon: <Users size={20} /> },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 reveal reveal-up active">
          <h3 className="font-orbitron text-brand-red font-bold tracking-[0.4em] uppercase text-[10px]">Abilities</h3>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black uppercase">Core <span className="text-brand-red">Skills</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillSet.map((skill, idx) => (
            <div 
              key={idx} 
              className={`group glass-card p-8 rounded-2xl flex flex-col items-center justify-center gap-4 text-center hover:bg-brand-red/5 hover:border-brand-red/20 transition-all duration-500 reveal reveal-up active stagger-${(idx % 4) + 1}`}
            >
              <div className="text-white/40 group-hover:text-brand-red group-hover:scale-110 transition-all duration-300">
                {skill.icon}
              </div>
              <p className="font-orbitron text-[9px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
