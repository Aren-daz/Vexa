import React, { useState } from 'react';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
    product: Product;
    onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleAdd = (e: React.MouseEvent) => {
        e.stopPropagation(); // ne pas ouvrir le modal
        if (product.sold) return;
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    return (
        <div
            className={`interactive-target group relative border-2 border-ink bg-bone flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer ${product.sold ? 'opacity-50' : ''}`}
            onClick={() => onClick(product)}
        >
            <div className="relative overflow-hidden aspect-square">
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {product.sold && (
                    <div className="absolute inset-0 flex items-center justify-center bg-ink/60">
                        <span className="font-mono text-bone text-sm uppercase tracking-widest border border-bone px-3 py-1">Vendu</span>
                    </div>
                )}
                <span className={`absolute top-3 left-3 font-mono text-[10px] uppercase px-2 py-1 ${product.condition === 'Neuf' ? 'bg-safety text-bone' : 'bg-ink text-bone'}`}>
                    {product.condition}
                </span>
            </div>
            <div className="p-4 flex flex-col gap-2 flex-1">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="font-mono text-[10px] uppercase text-ink/50 tracking-widest">{product.brand} · {product.size}</p>
                        <h3 className="font-oswald font-bold text-lg uppercase leading-tight mt-0.5">{product.name}</h3>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-ink/30 group-hover:text-safety group-hover:rotate-45 transition-all duration-300 flex-shrink-0 mt-1" />
                </div>
                <div className="mt-auto pt-3 border-t border-ink/20 flex justify-between items-center">
                    <span className="font-oswald font-bold text-2xl text-ink">{product.price} €</span>
                    {!product.sold && (
                        <motion.button
                            onClick={handleAdd}
                            whileTap={{ scale: 0.92 }}
                            className={`interactive-target font-mono text-xs uppercase tracking-widest px-4 py-2 transition-colors duration-300 flex items-center gap-1.5 min-w-[90px] justify-center ${added ? 'bg-safety text-bone' : 'bg-ink text-bone hover:bg-safety'
                                }`}
                            aria-label={`Ajouter ${product.name} au panier`}
                        >
                            <AnimatePresence mode="wait">
                                {added ? (
                                    <motion.span
                                        key="ok"
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        className="flex items-center gap-1"
                                    >
                                        <ShoppingBag className="w-3 h-3" /> OK
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="add"
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                    >
                                        Ajouter
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    )}
                </div>
            </div>
        </div>
    );
};
