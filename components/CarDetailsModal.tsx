import React, { useEffect, useState } from 'react';
import { Car } from '../types';
import { X, Gauge, Zap, Cog, Timer, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CarDetailsModalProps {
  car: Car;
  onClose: () => void;
  onBook: (car: Car) => void;
}

const CarDetailsModal: React.FC<CarDetailsModalProps> = ({ car, onClose, onBook }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for animation
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ${isVisible ? 'bg-black/80 backdrop-blur-md' : 'bg-black/0 backdrop-blur-none pointer-events-none'}`}>
      
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={handleClose}></div>

      {/* Main Modal Content */}
      <div 
        className={`relative w-full max-w-6xl h-[90vh] md:h-auto md:max-h-[85vh] bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      >
        
        {/* Close Button */}
        <button 
            onClick={handleClose}
            className="absolute top-6 right-6 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-white hover:text-black transition-colors border border-zinc-700"
        >
            <X size={24} />
        </button>

        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-zinc-950 md:bg-gradient-to-l md:from-zinc-950 md:via-transparent md:to-transparent z-10"></div>
            <img 
                src={car.image} 
                alt={car.model} 
                className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 z-20 md:hidden">
                <span className="text-ivory-400 font-bold uppercase tracking-widest text-xs mb-2 block">{car.make}</span>
                <h2 className="text-3xl font-serif text-white font-bold">{car.model}</h2>
            </div>
        </div>

        {/* Right Side - Details */}
        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-zinc-950 relative">
            
            {/* Header Desktop */}
            <div className="hidden md:block mb-8">
                <div className="flex items-center gap-4 mb-2">
                    <span className="text-ivory-400 font-bold uppercase tracking-[0.2em] text-xs">{car.make}</span>
                    <span className="px-2 py-0.5 border border-zinc-800 text-zinc-500 text-[10px] uppercase font-bold">{car.category}</span>
                </div>
                <h2 className="text-5xl font-serif text-white font-bold leading-none mb-4">{car.model}</h2>
                <div className="w-20 h-1 bg-ivory-500"></div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-8 md:absolute md:top-12 md:right-12">
                <span className="text-3xl font-bold text-white">{car.pricePerDay}€</span>
                <span className="text-zinc-500 text-xs uppercase tracking-wider">/ Jour</span>
            </div>

            {/* Description */}
            <p className="text-zinc-400 leading-relaxed mb-10 text-sm font-light">
                {car.description}
            </p>

            {/* Performance Grid */}
            <h3 className="text-white text-xs uppercase tracking-[0.2em] font-bold mb-6 flex items-center gap-2">
                <Gauge size={14} className="text-ivory-500" />
                Performance Specs
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 hover:border-ivory-500/50 transition-colors group">
                    <div className="flex items-center gap-2 text-zinc-500 text-xs mb-1 uppercase tracking-wider">
                        <Timer size={14} /> 0-100 km/h
                    </div>
                    <div className="text-xl font-bold text-white group-hover:text-ivory-400 transition-colors">{car.acceleration}</div>
                </div>
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 hover:border-ivory-500/50 transition-colors group">
                    <div className="flex items-center gap-2 text-zinc-500 text-xs mb-1 uppercase tracking-wider">
                        <Gauge size={14} /> V-Max
                    </div>
                    <div className="text-xl font-bold text-white group-hover:text-ivory-400 transition-colors">{car.maxSpeed}</div>
                </div>
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 hover:border-ivory-500/50 transition-colors group">
                    <div className="flex items-center gap-2 text-zinc-500 text-xs mb-1 uppercase tracking-wider">
                        <Zap size={14} /> Puissance
                    </div>
                    <div className="text-xl font-bold text-white group-hover:text-ivory-400 transition-colors">{car.hp} CH</div>
                </div>
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 hover:border-ivory-500/50 transition-colors group">
                    <div className="flex items-center gap-2 text-zinc-500 text-xs mb-1 uppercase tracking-wider">
                        <Cog size={14} /> Moteur
                    </div>
                    <div className="text-lg font-bold text-white truncate group-hover:text-ivory-400 transition-colors">{car.engine}</div>
                </div>
            </div>

            {/* Features List */}
             <h3 className="text-white text-xs uppercase tracking-[0.2em] font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-ivory-500" />
                Équipements Inclus
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
                {car.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-zinc-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-ivory-500 rounded-full"></div>
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Actions */}
            <div className="sticky bottom-0 bg-zinc-950 pt-4 pb-0 md:pb-4 border-t border-zinc-900 flex gap-4">
                <button 
                    onClick={() => onBook(car)}
                    className="flex-1 bg-white hover:bg-ivory-400 text-black py-4 font-bold uppercase tracking-widest text-xs transition-colors flex items-center justify-center gap-2"
                >
                    Réserver maintenant <ArrowRight size={16} />
                </button>
                 <button 
                    onClick={handleClose}
                    className="px-6 border border-zinc-700 text-zinc-400 hover:text-white hover:border-white uppercase tracking-widest text-xs font-bold transition-all"
                >
                    Fermer
                </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default CarDetailsModal;