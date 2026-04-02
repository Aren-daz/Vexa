import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartPage: React.FC = () => {
    const { cartItems, cartCount, total, removeFromCart } = useCart();

    return (
        <div className="px-4 md:px-8 lg:px-12 py-16 min-h-[60vh]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12 border-b-2 border-ink pb-8"
            >
                <p className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-2">— Votre sélection</p>
                <div className="flex items-end justify-between">
                    <h1 className="font-oswald font-bold text-6xl md:text-8xl uppercase text-ink">PANIER</h1>
                    {cartCount > 0 && (
                        <p className="font-mono text-xs text-ink/50 uppercase">{cartCount} article{cartCount > 1 ? 's' : ''}</p>
                    )}
                </div>
            </motion.div>

            {cartCount === 0 ? (
                /* État vide */
                <div className="flex flex-col items-center justify-center py-24 text-center">
                    <ShoppingBag className="w-16 h-16 text-ink/20 mb-6" />
                    <h2 className="font-oswald font-bold text-3xl uppercase text-ink mb-2">Panier vide</h2>
                    <p className="font-mono text-sm text-ink/50 mb-8">Tu n'as aucun article dans ton panier pour l'instant.</p>
                    <Link
                        to="/shop"
                        className="interactive-target font-mono text-sm uppercase tracking-widest px-8 py-3 bg-ink text-bone hover:bg-safety transition-colors duration-300"
                    >
                        Explorer la boutique
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-12 max-w-[1200px]">
                    {/* Liste des articles */}
                    <div className="flex-1 space-y-4">
                        <AnimatePresence>
                            {cartItems.map(({ product, quantity }) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0, overflow: 'hidden' }}
                                    transition={{ duration: 0.3 }}
                                    className="border-2 border-ink flex gap-4 p-4 bg-bone"
                                >
                                    {/* Image */}
                                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden border border-ink/20">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 flex flex-col justify-between min-w-0">
                                        <div>
                                            <p className="font-mono text-[10px] uppercase text-ink/50 tracking-widest">{product.brand} · {product.size}</p>
                                            <h3 className="font-oswald font-bold text-xl uppercase truncate">{product.name}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className={`font-mono text-[9px] uppercase px-1.5 py-0.5 ${product.condition === 'Neuf' ? 'bg-safety text-bone' : 'bg-ink text-bone'}`}>
                                                    {product.condition}
                                                </span>
                                                {quantity > 1 && (
                                                    <span className="font-mono text-[10px] text-ink/50">× {quantity}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-oswald font-bold text-2xl">{product.price * quantity} €</span>
                                            <button
                                                onClick={() => removeFromCart(product.id)}
                                                className="interactive-target p-2 hover:text-safety transition-colors"
                                                aria-label="Supprimer du panier"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Récapitulatif */}
                    <div className="lg:w-80 flex-shrink-0">
                        <div className="border-2 border-ink p-6 bg-bone sticky top-24">
                            <h2 className="font-oswald font-bold text-2xl uppercase mb-6">Récapitulatif</h2>
                            <div className="space-y-3 mb-6 border-b border-ink/20 pb-6">
                                {cartItems.map(({ product, quantity }) => (
                                    <div key={product.id} className="flex justify-between font-mono text-xs">
                                        <span className="text-ink/70 truncate pr-2">{product.name} {quantity > 1 ? `×${quantity}` : ''}</span>
                                        <span className="flex-shrink-0">{product.price * quantity} €</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                <span className="font-mono text-sm uppercase">Total</span>
                                <span className="font-oswald font-bold text-3xl">{total} €</span>
                            </div>
                            <button className="interactive-target w-full py-4 bg-ink text-bone font-mono text-sm uppercase tracking-widest hover:bg-safety transition-colors duration-300 flex items-center justify-center gap-2">
                                Commander <ArrowRight className="w-4 h-4" />
                            </button>
                            <Link
                                to="/shop"
                                className="interactive-target block text-center font-mono text-xs uppercase tracking-widest mt-4 text-ink/50 hover:text-safety transition-colors"
                            >
                                Continuer mes achats
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
