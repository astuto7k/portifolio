
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface Game {
  title: string;
  visits: string;
  img: string;
  link?: string;
  isPlaceholder?: boolean;
}

const rawGames: Game[] = [


{ 
    title: "Corridor of Hell", 
    visits: "695M+ visits", 
    img: " https://i.ibb.co/V0N9TyKV/no-Filter.webp ",
    link: "https://www.roblox.com/games/4982363836/"
  },


  { 
    title: "Steal A Brainrot", 
    visits: "55.5B+ visits", 
    img: "https://i.ibb.co/q88VG3z/no-Filter.webp", 
    link: "https://www.roblox.com/games/109983668079237/"
  },
  
  { 
    title: "My Singing Brainrot", 
    visits: "288M+ visits", 
    img: "https://i.ibb.co/PvCzGG5L/no-Filter.webp",
    link: "https://www.roblox.com/games/89343390950953/"
  },
  { 
    title: "Dead Sails", 
    visits: "40M+ visits", 
    img: "https://i.ibb.co/xt3zNdPL/no-Filter.webp",
    link: "https://www.roblox.com/games/85832836496852/"
  }
];

// Triple for infinite logic
const games = [...rawGames, ...rawGames, ...rawGames];

export const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const isJumping = useRef(false);

  // Responsive dimensions
  const isMobile = windowWidth < 768;
  const cardWidth = isMobile ? 180 : 280; 
  const gap = isMobile ? 15 : 30; 
  const totalItemWidth = cardWidth + gap;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current || isJumping.current) return;
    
    const container = scrollRef.current;
    const currentScroll = container.scrollLeft;
    const containerWidth = container.offsetWidth;
    const singleSetWidth = rawGames.length * totalItemWidth;
    
    // Infinite Jump Logic
    if (currentScroll < singleSetWidth * 0.5) {
      isJumping.current = true;
      container.scrollLeft = currentScroll + singleSetWidth;
      setTimeout(() => { isJumping.current = false; }, 50);
    } else if (currentScroll > singleSetWidth * 1.5 + (containerWidth / 2)) {
      isJumping.current = true;
      container.scrollLeft = currentScroll - singleSetWidth;
      setTimeout(() => { isJumping.current = false; }, 50);
    }

    // Centering detection for scaling effects
    const containerCenter = currentScroll + containerWidth / 2;
    const children = container.children[0].children;
    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }
    setCenterIndex(closestIndex);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      
      const containerWidth = el.offsetWidth;
      // Start centered on the first item of the middle set
      const targetIndex = rawGames.length; 
      const targetPos = targetIndex * totalItemWidth - (containerWidth / 2) + (cardWidth / 2);
      
      el.scrollLeft = targetPos;
      
      // Update state immediately
      setTimeout(handleScroll, 50);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, [totalItemWidth, windowWidth]);

  const scrollToItem = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -totalItemWidth : totalItemWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getScale = (itemIndex: number) => {
    const distance = Math.abs(itemIndex - centerIndex);
    if (distance === 0) return 1.15; // Main
    if (distance === 1) return 0.95; // Neighbors
    return 0.8; // Others
  };

  const getOpacity = (itemIndex: number) => {
    const distance = Math.abs(itemIndex - centerIndex);
    if (distance === 0) return 1;
    if (distance === 1) return 0.8;
    return 0.4;
  };

  return (
    <section id="projects" className="py-24 px-0 bg-brand-black overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-[1200px] h-[600px] bg-brand-red/5 blur-[120px] md:blur-[180px] pointer-events-none rounded-full"></div>

      <div className="max-w-full mx-auto relative">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 space-y-4 px-6 reveal active">
          <h3 className="font-orbitron text-brand-red font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px]">Works</h3>
          <h2 className="font-orbitron text-3xl md:text-5xl font-black uppercase tracking-tighter">
            Selected <span className="text-brand-red">Experiences</span>
          </h2>
        </div>

        <div className="relative group/carousel">
          {/* Subtle Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-brand-black to-transparent z-30 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-brand-black to-transparent z-30 pointer-events-none"></div>

          {/* Controls */}
          {!isMobile && (
            <>
              <button 
                onClick={() => scrollToItem('left')}
                className="absolute left-6 md:left-12 top-[35%] -translate-y-1/2 z-40 p-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-white transition-all hover:bg-brand-red hover:scale-110 active:scale-95 shadow-2xl"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scrollToItem('right')}
                className="absolute right-6 md:right-12 top-[35%] -translate-y-1/2 z-40 p-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-white transition-all hover:bg-brand-red hover:scale-110 active:scale-95 shadow-2xl"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Scroller */}
          <div 
            ref={scrollRef}
            className="overflow-x-auto no-scrollbar py-16 md:py-20 cursor-grab active:cursor-grabbing flex items-center scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="inline-flex gap-4 md:gap-8 px-[calc(50vw-90px)] md:px-[calc(50vw-140px)] items-center min-h-[450px] md:h-[580px]">
              {games.map((game, idx) => {
                const isActive = centerIndex === idx;
                const scale = getScale(idx);

                return (
                  <div 
                    key={idx}
                    className="flex-shrink-0 flex flex-col items-center text-center transition-all duration-500 ease-out snap-center"
                    style={{ 
                      width: `${cardWidth}px`,
                      transform: `scale(${scale})`,
                      opacity: getOpacity(idx),
                      zIndex: isActive ? 50 : 10
                    }}
                  >
                    {/* Thumbnail */}
                    <div className={`relative w-full aspect-square rounded-[30px] md:rounded-[45px] overflow-hidden border-[4px] md:border-[6px] transition-all duration-500 
                      ${isActive ? 'border-brand-red shadow-[0_0_50px_rgba(225,6,0,0.35)]' : 'border-white/5 shadow-lg'}
                      bg-brand-dark mb-6 md:mb-10
                    `}>
                      <img src={game.img} alt={game.title} className="w-full h-full object-cover" loading="lazy" />
                      <div className={`absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-20'}`}></div>
                    </div>

                    {/* Metadata */}
                    <div className={`space-y-3 md:space-y-4 w-full px-2 transition-all duration-500`}>
                      <h3 className={`font-poppins font-bold text-white tracking-tight leading-tight transition-all ${isActive ? 'text-base md:text-xl' : 'text-[10px] md:text-sm opacity-50'}`}>
                        {game.title}
                      </h3>
                      
                      <div className="flex flex-col items-center gap-3">
                        <div className={`inline-flex items-center px-3 md:px-5 py-1.5 bg-white/5 border border-white/10 rounded-full transition-opacity ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                          <span className="font-orbitron text-[8px] md:text-[10px] font-bold tracking-widest uppercase">
                            <span className="text-brand-red mr-1">{game.visits.split(' ')[0]}</span>
                            <span className="text-white/60">{game.visits.split(' ')[1]}</span>
                          </span>
                        </div>
                        
                        <div className={`transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-90 pointer-events-none'}`}>
                          <a 
                            href={game.link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn inline-flex items-center gap-2 px-6 md:px-10 py-2.5 md:py-3.5 bg-brand-red hover:bg-red-700 text-white font-poppins text-[10px] md:text-xs font-black rounded-full transition-all shadow-lg active:scale-95 uppercase"
                          >
                            View Game
                            <ExternalLink size={12} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-3 mt-6">
          {rawGames.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => {
                if (scrollRef.current) {
                  const targetIndex = rawGames.length + idx;
                  const targetPos = targetIndex * totalItemWidth - (scrollRef.current.offsetWidth / 2) + (cardWidth / 2);
                  scrollRef.current.scrollTo({ left: targetPos, behavior: 'smooth' });
                }
              }}
              className={`h-1 rounded-full transition-all duration-500 ${activeIndexMod(centerIndex) === idx ? 'w-10 bg-brand-red shadow-[0_0_10px_rgba(225,6,0,0.5)]' : 'w-2 bg-white/10'}`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

function activeIndexMod(index: number) {
  const mod = index % rawGames.length;
  return mod < 0 ? mod + rawGames.length : mod;
}
