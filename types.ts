export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  category: 'Sport' | 'SUV' | 'Berline' | 'Cabriolet';
  pricePerDay: number;
  image: string;
  features: string[];
  engine: string;
  hp: number;
  acceleration: string; // 0-100 km/h
  maxSpeed: string;
  transmission: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum AppSection {
  HOME = 'home',
  FLEET = 'fleet',
  SERVICES = 'services',
  CONTACT = 'contact'
}