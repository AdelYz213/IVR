import { Car } from './types';

export const CARS: Car[] = [
  {
    id: 'rs6',
    make: 'Audi',
    model: 'RS6 Avant',
    year: 2021,
    category: 'Sport',
    pricePerDay: 1800,
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2669&auto=format&fit=crop',
    features: ['V8 Biturbo', 'Quattro', 'Bang & Olufsen 3D', 'Toit Panoramique', 'Freins Céramique'],
    engine: '4.0L V8 TFSI',
    hp: 600,
    acceleration: '3.6s',
    maxSpeed: '305 km/h',
    transmission: 'Tiptronic 8',
    description: "L'arme absolue. Le mélange parfait entre une supercar et une familiale. Une présence sur la route inégalée avec ses ailes larges et sa sonorité rauque."
  },
  {
    id: 'e63s',
    make: 'Mercedes-AMG',
    model: 'E63 S 4MATIC+',
    year: 2021,
    category: 'Berline',
    pricePerDay: 1600,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop',
    features: ['Mode Drift', 'Sièges Performance', 'Échappement Sport', 'Carbone', 'Pack Nuit'],
    engine: '4.0L V8 Biturbo',
    hp: 612,
    acceleration: '3.4s',
    maxSpeed: '300 km/h',
    transmission: 'MCT 9 Speed',
    description: "La berline d'affaires qui se transforme en bête de circuit. Élégance brutale, une capacité à drifter sur demande et un confort de limousine."
  },
  {
    id: 'glc63',
    make: 'Mercedes-AMG',
    model: 'GLC 63 S E Performance',
    year: 2024,
    category: 'SUV',
    pricePerDay: 1400,
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2670&auto=format&fit=crop',
    features: ['Hybride Performance', 'MBUX Hyperscreen', '4 Roues Directrices', 'Pack Nuit', 'Launch Control'],
    engine: '2.0L Turbo Hybrid',
    hp: 680,
    acceleration: '3.5s',
    maxSpeed: '275 km/h',
    transmission: 'MCT 9 Speed',
    description: "La technologie F1 dans un SUV. Une puissance hybride foudroyante de 680ch combinée pour une polyvalence totale sans compromis."
  },
  {
    id: 'golf8r',
    make: 'Volkswagen',
    model: 'Golf 8.5 R',
    year: 2024,
    category: 'Sport',
    pricePerDay: 500,
    image: 'https://images.unsplash.com/photo-1621996530694-8255979d3809?q=80&w=2574&auto=format&fit=crop',
    features: ['R-Performance', 'Drift Mode', 'Akrapovič', 'IQ.Light', 'Nürburgring Mode'],
    engine: '2.0L TSI',
    hp: 333,
    acceleration: '4.6s',
    maxSpeed: '270 km/h',
    transmission: 'DSG 7',
    description: "L'efficacité allemande compactée. Agile, rapide et technologiquement avancée. Le daily driver ultime capable de surprendre bien plus gros que lui."
  }
];