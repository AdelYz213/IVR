import React, { useState, useEffect } from 'react';
import { Menu, X, Crown } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', id: 'home' },
    { name: 'Flotte', id: 'fleet' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-zinc-800/50 py-4' 
          : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick('home')}
        >
          <div className="relative">
            <Crown className="w-8 h-8 text-ivory-100 group-hover:text-ivory-400 transition-colors duration-300" />
            <div className="absolute inset-0 bg-ivory-400 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold text-white tracking-[0.15em] leading-none">
              IVORY
            </span>
            <span className="text-[10px] font-medium text-ivory-400 tracking-[0.4em] uppercase">
              Rentline
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 relative group ${
                activeSection === link.id ? 'text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-ivory-400 transition-all duration-300 group-hover:w-full ${activeSection === link.id ? 'w-full' : ''}`}></span>
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('fleet')}
            className="px-6 py-2 bg-ivory-100 text-black font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-ivory-400 transition-colors duration-300"
          >
            Réserver
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-ivory-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
         {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-2xl font-serif font-bold text-white hover:text-ivory-400 transition-colors"
            >
              {link.name}
            </button>
          ))}
      </div>
    </nav>
  );
};

export default Navbar;