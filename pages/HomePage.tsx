import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    subtitle: string;
    image?: string;
    className?: string;
    to: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle, image, className, to }) => (
    <Link to={to} className={`interactive-target group relative border-2 border-ink bg-white overflow-hidden flex flex-col ${className}`}>
        {image && (
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>
        )}
        <div className={`relative z-10 p-6 flex flex-col justify-between h-full ${image ? 'text-white' : 'text-ink'}`}>
            <div className="flex justify-between items-start">
                <span className={`font-mono text-xs p-1 ${image ? 'bg-ink text-bone' : 'bg-safety text-bone'}`}>2026</span>
                <ArrowUpRight className={`w-8 h-8 transition-transform duration-300 group-hover:rotate-45 ${image ? 'text-white drop-shadow-lg' : 'text-ink'}`} />
            </div>
            <div className={image ? 'mix-blend-difference' : ''}>
                <h3 className="font-oswald font-bold text-4xl uppercase leading-none mb-2 break-words">{title}</h3>
                <p className="font-mono text-sm tracking-wide uppercase border-t border-current pt-2 inline-block">{subtitle}</p>
            </div>
        </div>
    </Link>
);

export const HomePage: React.FC = () => {
    return (
        <>
            {/* Hero — identique à l'original */}
            <section className="relative w-full h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden border-b-2 border-ink">
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

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-16 md:mt-32 w-full text-center z-20"
                >
                    <Link
                        to="/shop"
                        className="inline-block interactive-target px-8 py-3 bg-safety text-bone font-mono text-sm md:text-base uppercase tracking-widest hover:bg-ink transition-colors duration-300"
                    >
                        Découvrir la collection
                    </Link>
                </motion.div>

                {/* Marquee */}
                <div className="w-full bg-ink text-bone py-3 overflow-hidden whitespace-nowrap border-t-2 border-ink">
                    <motion.div
                        className="inline-block"
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                    >
                        {Array(10).fill('').map((_, i) => (
                            <span key={i} className="font-mono text-lg md:text-xl font-bold mx-4 tracking-widest uppercase">
                                SNEAKERS • FRIPE • CLEANING • NICE • EXCLUSIVE DROPS • CÔTE D'AZUR •{' '}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services — layout original restauré */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-100px' }}
                className="px-4 md:px-8 lg:px-12 py-24"
            >
                <div className="w-full max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[400px] md:auto-rows-[500px]">
                        {/* Card 1: Shop */}
                        <ServiceCard
                            to="/shop"
                            title="DERNIERS DROPS"
                            subtitle="Shop Sneakers"
                            image="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop"
                            className="md:col-span-1"
                        />

                        {/* Card 2: Atelier */}
                        <Link to="/atelier" className="interactive-target md:col-span-1 border-2 border-ink bg-bone p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
                            <div className="absolute inset-0 noise-overlay opacity-50" />
                            <div className="relative z-10 space-y-6">
                                <h3 className="font-oswald font-bold text-5xl md:text-6xl text-ink uppercase tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-ink group-hover:to-safety transition-all duration-300">
                                    L'Atelier
                                </h3>
                                <div className="w-full h-[2px] bg-ink transform scale-x-50 group-hover:scale-x-100 transition-transform duration-500" />
                                <p className="font-mono text-sm md:text-base leading-relaxed">
                                    SERVICE DE NETTOYAGE<br />
                                    &amp; RESTAURATION<br />
                                    PREMIUM
                                </p>
                                <span className="inline-block mt-4 px-6 py-2 border border-ink font-mono text-xs uppercase group-hover:bg-ink group-hover:text-bone transition-colors">
                                    Prendre RDV
                                </span>
                            </div>
                        </Link>

                        {/* Card 3: Vends */}
                        <ServiceCard
                            to="/shop"
                            title="VENDS TES PAIRES"
                            subtitle="Achat / Vente"
                            image="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2574&auto=format&fit=crop"
                            className="md:col-span-1"
                        />

                        {/* Card 4: Events — full width */}
                        <Link to="/events" className="interactive-target md:col-span-3 border-2 border-ink bg-ink text-bone p-8 md:p-12 flex flex-col md:flex-row justify-between items-center relative overflow-hidden group h-[300px] md:h-auto">
                            <img
                                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop"
                                alt="Events"
                                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-500"
                            />
                            <div className="relative z-10 flex flex-col justify-center h-full">
                                <h3 className="font-oswald font-bold text-5xl md:text-7xl uppercase drop-shadow-md">ÉVÉNEMENTS</h3>
                                <p className="font-mono text-safety mt-2 font-bold bg-black/50 px-2 py-1 inline-block backdrop-blur-sm">
                                    PROCHAIN POP-UP: 12.10.2026 - NICE CENTRE
                                </p>
                            </div>
                            <div className="relative z-10 mt-6 md:mt-0">
                                <div className="w-24 h-24 rounded-full border border-bone flex items-center justify-center group-hover:bg-safety group-hover:border-safety transition-all duration-300 cursor-none backdrop-blur-sm">
                                    <ArrowUpRight className="w-10 h-10 text-bone" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </>
    );
};
