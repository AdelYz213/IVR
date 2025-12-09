import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Fleet from './components/Fleet';
import Concierge from './components/Concierge';
import Footer from './components/Footer';
import { Car } from './types';
import { ShieldCheck, Zap, Gem, MoveRight, Crown } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const handleBook = (car: Car) => {
    scrollToSection('contact');
  };

  // Setup scroll observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-ivory-400 selection:text-black overflow-x-hidden">
      <Navbar onNavigate={scrollToSection} activeSection={activeSection} />
      
      <main>
        <Hero onNavigate={scrollToSection} />
        
        {/* Services / Benefits Section */}
        <section id="services" className="py-32 relative border-b border-zinc-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <div className="reveal-on-scroll glass p-10 group hover:bg-zinc-900/50 transition-colors duration-500">
                        <Zap className="w-10 h-10 text-zinc-600 group-hover:text-ivory-400 mb-8 transition-colors duration-300" />
                        <h3 className="text-xl font-serif text-white mb-4">Performance Pure</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                            Une flotte constituée uniquement des modèles les plus performants. Pas de versions de base, que du haut de gamme.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="reveal-on-scroll glass p-10 group hover:bg-zinc-900/50 transition-colors duration-500 transition-delay-100">
                        <ShieldCheck className="w-10 h-10 text-zinc-600 group-hover:text-ivory-400 mb-8 transition-colors duration-300" />
                        <h3 className="text-xl font-serif text-white mb-4">Discrétion & Sécurité</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                            Service de conciergerie crypté. Vos déplacements et vos locations restent strictement confidentiels.
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="reveal-on-scroll glass p-10 group hover:bg-zinc-900/50 transition-colors duration-500 transition-delay-200">
                        <Crown className="w-10 h-10 text-zinc-600 group-hover:text-ivory-400 mb-8 transition-colors duration-300" />
                        <h3 className="text-xl font-serif text-white mb-4">Ivory Standard</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                            Véhicules inspectés quotidiennement. Propreté clinique et mécanique irréprochable garanties.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <Fleet onBook={handleBook} />

        {/* Contact Form Section */}
        <section id="contact" className="py-32 relative">
            <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-16">
                
                <div className="md:w-1/3 reveal-on-scroll">
                    <h2 className="text-ivory-400 text-xs font-bold tracking-[0.3em] uppercase mb-6">Contact VIP</h2>
                    <h3 className="font-serif text-5xl text-white leading-tight mb-8">Ready to <br/>Drive?</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                        Remplissez le formulaire pour une prise en charge immédiate par notre équipe de conciergerie dédiée.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-zinc-400">
                            <span className="w-2 h-2 bg-ivory-400 rounded-full"></span>
                            Paris, 8ème Ardt.
                        </div>
                        <div className="flex items-center gap-4 text-sm text-zinc-400">
                            <span className="w-2 h-2 bg-zinc-700 rounded-full"></span>
                            contact@ivory-rentline.fr
                        </div>
                    </div>
                </div>

                <div className="md:w-2/3 reveal-on-scroll">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-6">
                            <input type="text" placeholder="NOM" className="bg-transparent border-b border-zinc-800 py-4 text-white focus:border-ivory-400 focus:outline-none transition-colors placeholder:text-zinc-700 text-sm tracking-wider" />
                            <input type="text" placeholder="PRÉNOM" className="bg-transparent border-b border-zinc-800 py-4 text-white focus:border-ivory-400 focus:outline-none transition-colors placeholder:text-zinc-700 text-sm tracking-wider" />
                        </div>
                        <input type="email" placeholder="EMAIL PROFESSIONNEL" className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:border-ivory-400 focus:outline-none transition-colors placeholder:text-zinc-700 text-sm tracking-wider" />
                         <select className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:border-ivory-400 focus:outline-none transition-colors text-sm tracking-wider appearance-none">
                            <option className="bg-zinc-900 text-zinc-500">SÉLECTIONNEZ UN VÉHICULE</option>
                            <option className="bg-zinc-900 text-white">Audi RS6 Avant</option>
                            <option className="bg-zinc-900 text-white">Mercedes-AMG E63 S</option>
                            <option className="bg-zinc-900 text-white">Mercedes-AMG GLC 63</option>
                            <option className="bg-zinc-900 text-white">VW Golf 8 R</option>
                        </select>
                        <textarea rows={4} placeholder="MESSAGE PARTICULIER" className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:border-ivory-400 focus:outline-none transition-colors placeholder:text-zinc-700 text-sm tracking-wider resize-none"></textarea>
                        
                        <div className="pt-8">
                            <button className="group flex items-center gap-4 text-white font-bold uppercase tracking-[0.2em] text-sm hover:text-ivory-400 transition-colors">
                                Envoyer la demande
                                <MoveRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
      </main>

      <Footer />
      <Concierge />
    </div>
  );
};

export default App;