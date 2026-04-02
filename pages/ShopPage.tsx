import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import type { Product } from '../data/products';

type Filter = 'all' | 'sneakers' | 'fripe';

export const ShopPage: React.FC = () => {
    const [filter, setFilter] = useState<Filter>('all');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

    const filters: { label: string; value: Filter }[] = [
        { label: 'Tout', value: 'all' },
        { label: 'Sneakers', value: 'sneakers' },
        { label: 'Fripe', value: 'fripe' },
    ];

    return (
        <>
            <div className="px-4 md:px-8 lg:px-12 py-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 border-b-2 border-ink pb-8"
                >
                    <p className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-2">— Vexa Shop</p>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <h1 className="font-oswald font-bold text-6xl md:text-8xl uppercase text-ink">BOUTIQUE</h1>
                        <p className="font-mono text-xs text-ink/60 uppercase">{filtered.length} articles</p>
                    </div>
                </motion.div>

                {/* Filters */}
                <div className="flex gap-2 mb-10 flex-wrap">
                    {filters.map(f => (
                        <button
                            key={f.value}
                            onClick={() => setFilter(f.value)}
                            className={`interactive-target font-mono text-xs uppercase tracking-widest px-5 py-2 border-2 border-ink transition-all duration-200 ${filter === f.value ? 'bg-ink text-bone' : 'bg-bone text-ink hover:bg-safety hover:text-bone hover:border-safety'
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
                >
                    {filtered.map((product, i) => (
                        <motion.div
                            key={product.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                        >
                            <ProductCard product={product} onClick={setSelectedProduct} />
                        </motion.div>
                    ))}
                </motion.div>

                {filtered.length === 0 && (
                    <div className="text-center py-24 font-mono text-ink/40 uppercase text-sm">
                        Aucun article dans cette catégorie
                    </div>
                )}
            </div>

            {/* Modal */}
            <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </>
    );
};
