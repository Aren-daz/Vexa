import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';

export const ArchivePage: React.FC = () => {
    // All products shown as "archived" (sold out style)
    return (
        <div className="px-4 md:px-8 lg:px-12 py-16">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16 border-b-2 border-ink pb-8"
            >
                <p className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-2">— Drops passés</p>
                <h1 className="font-oswald font-bold text-6xl md:text-8xl uppercase text-ink">ARCHIVE</h1>
                <p className="font-mono text-sm text-ink/60 mt-4 max-w-lg">
                    Tous les drops qui ont fait Vexa. Ces pièces ont trouvé leurs propriétaires.
                </p>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
                {products.map((product, i) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: i * 0.03 }}
                        viewport={{ once: true }}
                        className="group relative border-2 border-ink/30 overflow-hidden aspect-square"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            loading="lazy"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-ink/50 group-hover:bg-ink/0 transition-colors duration-300 flex items-end">
                            <div className="p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <p className="font-oswald font-bold text-bone text-lg uppercase leading-tight">{product.name}</p>
                                <p className="font-mono text-bone/70 text-[10px] uppercase">{product.price}€</p>
                            </div>
                        </div>
                        <span className="absolute top-2 right-2 font-mono text-[9px] uppercase bg-ink/80 text-bone px-2 py-0.5">
                            Sold
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
