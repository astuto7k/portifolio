
import React from 'react';

const stats = [
  { label: "Total Visits", value: "55.5B+" },
  { label: "Peak CCU - Owned", value: "33k" },
  { label: "Peak CCU - Contributed", value: "24.9M" },
  { label: "Subscribers", value: "650k" },
  { label: "Total Views", value: "40M+" },
  { label: "UGC Sales", value: "3M+" },
  { label: "Comm. Members", value: "350k" },
];

export const Stats: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-brand-red relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1 md:space-y-2">
              <h3 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-black text-white">{stat.value}</h3>
              <p className="text-[9px] md:text-xs font-orbitron font-bold text-brand-black/60 uppercase tracking-widest leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
