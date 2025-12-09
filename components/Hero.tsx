import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Dynamic Background */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <img
          src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2574&auto=format&fit=crop" 
          alt="Dark Luxury Car"
          className="w-full h-full object-cover scale-105 animate-[pulse-slow_10s_ease-in-out_infinite]"
        />
        {/* Complex Gradient Overlay for "Stealth" look */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-end pb-20 md:pb-0 h-full md:h-auto">
        <div className="md:col-span-8 flex flex-col justify-center h-full">
            <div className={`transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-[1px] w-12 bg-ivory-400"></div>
                    <span className="text-ivory-400 text-xs font-bold tracking-[0.3em] uppercase">
                        Ivory Rentline Exclusive
                    </span>
                </div>
                
                <h1 className="font-serif text-5xl md:text-8xl font-bold text-white mb-8 leading-[0.9]">
                  Beyond <br />
                  Driving <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-ivory-100 to-ivory-600">
                    Excellence.
                  </span>
                </h1>
                
                <p className="text-zinc-400 text-lg font-light max-w-xl leading-relaxed mb-10 border-l border-zinc-800 pl-6">
                  Une sélection rigoureuse des modèles les plus performants d'Allemagne. 
                  RS6, AMG, R-Line. L'expérience de conduite ultime à portée de main.
                </p>

                <div className="flex flex-wrap gap-6">
                  <button 
                    onClick={() => onNavigate('fleet')}
                    className="px-8 py-4 bg-white hover:bg-ivory-400 text-black font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center gap-3"
                  >
                    Voir la collection
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="px-8 py-4 border border-zinc-700 hover:border-white text-white hover:text-white font-medium uppercase tracking-widest text-xs transition-all duration-300 backdrop-blur-sm"
                  >
                    Nous contacter
                  </button>
                </div>
            </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Scroll</span>
        <ChevronDown className="w-4 h-4 text-ivory-400" />
      </div>
    </section>
  );
};

export default Hero;