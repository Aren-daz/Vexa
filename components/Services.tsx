import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  image?: string;
  className?: string;
  id?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle, image, className, id }) => (
  <div id={id} className={`interactive-target group relative border-2 border-ink bg-white overflow-hidden flex flex-col ${className}`}>
    
    {/* Image Background */}
    {image && (
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-300"></div>
      </div>
    )}

    {/* Content */}
    <div className={`relative z-10 p-6 flex flex-col justify-between h-full ${image ? 'text-white' : 'text-ink'}`}>
      <div className="flex justify-between items-start">
        <span className={`font-mono text-xs p-1 ${image ? 'bg-ink text-bone' : 'bg-safety text-bone'}`}>
          2026
        </span>
        <ArrowUpRight className={`w-8 h-8 transition-transform duration-300 group-hover:rotate-45 ${image ? 'text-white drop-shadow-lg' : 'text-ink'}`} />
      </div>
      
      <div className={image ? 'mix-blend-difference' : ''}>
        <h3 className="font-oswald font-bold text-4xl uppercase leading-none mb-2 break-words">
          {title}
        </h3>
        <p className="font-mono text-sm tracking-wide uppercase border-t border-current pt-2 inline-block">
          {subtitle}
        </p>
      </div>
    </div>
  </div>
);

export const Services: React.FC = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[400px] md:auto-rows-[500px]">
        
        {/* Card 1: Shop - Restored Original Image */}
        <ServiceCard 
          id="shop"
          title="DERNIERS DROPS"
          subtitle="Shop Sneakers"
          image="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop"
          className="md:col-span-1"
        />

        {/* Card 2: Atelier */}
        <div id="atelier" className="interactive-target md:col-span-1 border-2 border-ink bg-bone p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
           <div className="absolute inset-0 noise-overlay opacity-50"></div>
           <div className="relative z-10 space-y-6">
             <h3 className="font-oswald font-bold text-5xl md:text-6xl text-ink uppercase tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-ink group-hover:to-safety transition-all duration-300">
               L'Atelier
             </h3>
             <div className="w-full h-[2px] bg-ink transform scale-x-50 group-hover:scale-x-100 transition-transform duration-500"></div>
             <p className="font-mono text-sm md:text-base leading-relaxed">
               SERVICE DE NETTOYAGE<br/>
               & RESTAURATION<br/>
               PREMIUM
             </p>
             <a href="#contact" className="inline-block mt-4 px-6 py-2 border border-ink font-mono text-xs uppercase hover:bg-ink hover:text-bone transition-colors">
               Prendre RDV
             </a>
           </div>
        </div>

        {/* Card 3: Buy/Sell - Fixed Image URL */}
        <ServiceCard 
          title="VENDS TES PAIRES"
          subtitle="Achat / Vente"
          image="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2574&auto=format&fit=crop"
          className="md:col-span-1"
        />
        
        {/* Card 4: Events (Wide) */}
        <div id="events" className="interactive-target md:col-span-3 border-2 border-ink bg-ink text-bone p-8 md:p-12 flex flex-col md:flex-row justify-between items-center relative overflow-hidden group h-[300px] md:h-auto">
           <img 
             src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop" 
             alt="Events" 
             className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-500"
           />
           <div className="relative z-10 flex flex-col justify-center h-full">
             <h3 className="font-oswald font-bold text-5xl md:text-7xl uppercase drop-shadow-md">ÉVÉNEMENTS</h3>
             <p className="font-mono text-safety mt-2 font-bold bg-black/50 px-2 py-1 inline-block backdrop-blur-sm">PROCHAIN POP-UP: 12.10.2026 - NICE CENTRE</p>
           </div>
           <div className="relative z-10 mt-6 md:mt-0">
             <a href="#events" className="block w-24 h-24 rounded-full border border-bone flex items-center justify-center group-hover:bg-safety group-hover:border-safety transition-all duration-300 cursor-none backdrop-blur-sm">
                <ArrowUpRight className="w-10 h-10 text-bone" />
             </a>
           </div>
        </div>

      </div>
    </div>
  );
};