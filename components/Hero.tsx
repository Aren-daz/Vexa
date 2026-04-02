import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden border-b-2 border-ink">
      
      {/* Main Headline */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="text-center overflow-visible">
          <motion.h2 
             initial={{ y: 200 }}
             animate={{ y: 0 }}
             transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
             className="font-oswald font-bold text-[15vw] leading-[0.9] tracking-tight text-ink uppercase select-none py-2"
          >
            CRÉE TON
          </motion.h2>
          <motion.h2 
             initial={{ y: 200 }}
             animate={{ y: 0 }}
             transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
             className="font-oswald font-bold text-[15vw] leading-[0.9] tracking-tight text-ink uppercase select-none py-2"
          >
            STYLE
          </motion.h2>
        </div>
      </div>

      {/* Call To Action - Floating */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-16 md:mt-32 w-full text-center z-20"
      >
        <a href="#shop" className="inline-block interactive-target px-8 py-3 bg-safety text-bone font-mono text-sm md:text-base uppercase tracking-widest hover:bg-ink transition-colors duration-300">
          Découvrir la collection
        </a>
      </motion.div>

      {/* Infinite Marquee */}
      <div className="w-full bg-ink text-bone py-3 overflow-hidden whitespace-nowrap border-t-2 border-ink">
        <motion.div 
          className="inline-block"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {Array(10).fill("").map((_, i) => (
             <span key={i} className="font-mono text-lg md:text-xl font-bold mx-4 tracking-widest uppercase">
               SNEAKERS • FRIPE • CLEANING • NICE • EXCLUSIVE DROPS • CÔTE D'AZUR • 
             </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};