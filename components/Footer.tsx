import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-serif text-2xl font-bold text-white mb-4">
              IVORY <span className="text-ivory-400">RENTLINE</span>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              L'agence de référence pour la location de véhicules de prestige en France. L'élégance à chaque kilomètre.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-ivory-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-zinc-400 hover:text-ivory-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-zinc-400 hover:text-ivory-400 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Exploration</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="#home" className="hover:text-ivory-400 transition-colors">Accueil</a></li>
              <li><a href="#fleet" className="hover:text-ivory-400 transition-colors">Notre Flotte</a></li>
              <li><a href="#services" className="hover:text-ivory-400 transition-colors">Chauffeur Privé</a></li>
              <li><a href="#" className="hover:text-ivory-400 transition-colors">Mentions Légales</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>Livraison 24/7</li>
              <li>Transfert Aéroport</li>
              <li>Mariage & Événements</li>
              <li>Conciergerie VIP</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-ivory-400 w-5 h-5 shrink-0" />
                <span>12 Avenue Montaigne,<br />75008 Paris, France</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-ivory-400 w-5 h-5 shrink-0" />
                <span>+33 1 42 68 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-ivory-400 w-5 h-5 shrink-0" />
                <span>contact@ivory-rentline.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs">
            © {new Date().getFullYear()} Ivory Rentline. Tous droits réservés.
          </p>
          <p className="text-zinc-600 text-xs">
            Site crée par Adel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;