import React, { useState } from 'react';
import { CARS } from '../constants';
import CarCard from './CarCard';
import CarDetailsModal from './CarDetailsModal';
import { Car } from '../types';

interface FleetProps {
  onBook: (car: Car) => void;
}

const Fleet: React.FC<FleetProps> = ({ onBook }) => {
  const [filter, setFilter] = useState<string>('Tous');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  
  const categories = ['Tous', 'Sport', 'SUV', 'Berline'];

  const filteredCars = filter === 'Tous' 
    ? CARS 
    : CARS.filter(car => car.category === filter);

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
  };

  const handleBookFromModal = (car: Car) => {
    handleCloseModal();
    onBook(car);
  };

  return (
    <section id="fleet" className="py-32 px-4 bg-[#050505] relative overflow-hidden">
        {/* Decorator */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-ivory-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
            <div>
                <h2 className="text-ivory-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Notre Collection</h2>
                <h3 className="font-serif text-4xl md:text-5xl text-white font-medium leading-tight">
                    The Ivory <br/>
                    <span className="text-zinc-600">Standard</span>
                </h3>
            </div>
            <div className="flex gap-2 mt-8 md:mt-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                {categories.map((cat) => (
                    <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-3 border text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                        filter === cat 
                        ? 'bg-ivory-100 text-black border-ivory-100' 
                        : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-600 hover:text-white'
                    }`}
                    >
                    {cat}
                    </button>
                ))}
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCars.map((car, index) => (
            <div key={car.id} style={{ animationDelay: `${index * 100}ms` }} className="animate-fade-in-up">
                <CarCard car={car} onClick={handleCarClick} />
            </div>
          ))}
        </div>
        
        {filteredCars.length === 0 && (
          <div className="text-center py-20 text-zinc-600 font-serif italic text-xl">
            Véhicule indisponible dans cette catégorie.
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedCar && (
        <CarDetailsModal 
            car={selectedCar} 
            onClose={handleCloseModal} 
            onBook={handleBookFromModal} 
        />
      )}
    </section>
  );
};

export default Fleet;