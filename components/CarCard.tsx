import React from 'react';
import { Car } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onClick: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onClick }) => {
  return (
    <div 
        onClick={() => onClick(car)}
        className="group relative w-full h-[500px] overflow-hidden bg-zinc-900/20 cursor-pointer border border-zinc-900 hover:border-zinc-700 transition-colors"
    >
      {/* Image */}
      <img
        src={car.image}
        alt={`${car.make} ${car.model}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.7] group-hover:brightness-90"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

      {/* Hover Icon Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
              <span className="text-white text-xs uppercase tracking-widest font-bold">Voir</span>
          </div>
      </div>

      {/* Content Container */}
      <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
        
        {/* Header (Top Right) */}
        <div className="absolute top-8 right-8 flex flex-col items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
             <span className="text-2xl font-bold text-white tracking-tighter">{car.pricePerDay}€</span>
             <span className="text-ivory-400 text-[10px] font-bold tracking-widest uppercase">/ Jour</span>
        </div>

        {/* Main Info */}
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-1 border border-zinc-700 text-zinc-300 text-[10px] uppercase tracking-wider font-medium">
                    {car.category}
                </span>
                 <span className="text-ivory-400 text-xs font-bold tracking-[0.2em] uppercase">
                    {car.make}
                </span>
            </div>
           
            <h3 className="text-3xl font-serif text-white mb-2 leading-none group-hover:text-ivory-100 transition-colors">
                {car.model}
            </h3>
            
            <div className="w-full flex justify-between items-end mt-4 border-t border-zinc-800 pt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                 <div className="flex gap-4 text-xs text-zinc-400 uppercase tracking-wider font-medium">
                     <span>{car.year}</span>
                     <span>{car.hp} CH</span>
                 </div>
                 <div className="flex items-center gap-2 text-ivory-400 text-[10px] font-bold tracking-widest uppercase group-hover:translate-x-2 transition-transform">
                     Détails <ArrowUpRight size={14} />
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;