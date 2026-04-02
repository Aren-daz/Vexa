import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Tag, Ruler, Star, Package, ShoppingBag } from 'lucide-react';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';

const conditionStars: Record<string, number> = {
    'Neuf': 5, 'Très bon état': 4, 'Bon état': 3,
};

interface ProductModalProps {
    product: Product | null;
    onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
    const { addToCart, cartItems } = useCart();
    const [added, setAdded] = useState(false);

    if (!product) return null;
    const stock = product.stock;
    const stars = conditionStars[product.condition] ?? 3;
    const inCart = cartItems.find(i => i.product.id === product.id)?.quantity ?? 0;
    const stockLeft = stock - inCart;
    // Label adapté à la catégorie
    const unitLabel = product.category === 'sneakers' ? 'paire' : 'pièce';

    const handleAdd = () => {
        if (product.sold || stockLeft <= 0) return;
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 1800);
    };

    return (
        <AnimatePresence>
            {product && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        className="fixed inset-0 bg-ink/70 z-50 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    {/* Modal */}
                    <motion.div
                        key="modal"
                        className="fixed inset-4 md:inset-10 lg:inset-16 z-50 bg-bone border-2 border-ink overflow-hidden flex flex-col md:flex-row"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        {/* Close */}
                        <button
                            onClick={onClose}
                            className="interactive-target absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center border-2 border-ink bg-bone hover:bg-ink hover:text-bone transition-colors"
                            aria-label="Fermer"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Image */}
                        <div className="relative md:w-1/2 h-64 md:h-full flex-shrink-0 overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-ink">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                            {product.sold || stock === 0 ? (
                                <div className="absolute inset-0 bg-ink/60 flex items-center justify-center">
                                    <span className="font-mono text-bone text-sm uppercase tracking-widest border border-bone px-4 py-2">Vendu</span>
                                </div>
                            ) : stockLeft <= 0 ? (
                                <div className="absolute inset-0 bg-ink/40 flex items-center justify-center">
                                    <span className="font-mono text-bone text-xs uppercase tracking-widest border border-bone px-3 py-1">Déjà dans ton panier</span>
                                </div>
                            ) : null}
                            <span className={`absolute top-4 left-4 font-mono text-[11px] uppercase px-3 py-1 ${product.condition === 'Neuf' ? 'bg-safety text-bone' : 'bg-ink text-bone'}`}>
                                {product.condition}
                            </span>
                        </div>

                        {/* Details */}
                        <div className="flex-1 p-6 md:p-10 flex flex-col justify-between overflow-y-auto">
                            <div>
                                <p className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-1">{product.brand}</p>
                                <h2 className="font-oswald font-bold text-4xl md:text-5xl uppercase leading-none mb-6">{product.name}</h2>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {/* Taille */}
                                    <div className="border-2 border-ink p-4 flex items-center gap-3">
                                        <Ruler className="w-5 h-5 text-ink/40" />
                                        <div>
                                            <p className="font-mono text-[10px] uppercase text-ink/50">Taille</p>
                                            <p className="font-oswald font-bold text-xl">{product.size}</p>
                                        </div>
                                    </div>
                                    {/* Stock */}
                                    <div className="border-2 border-ink p-4 flex items-center gap-3">
                                        <Package className="w-5 h-5 text-ink/40" />
                                        <div>
                                            <p className="font-mono text-[10px] uppercase text-ink/50">Stock</p>
                                            <p className={`font-oswald font-bold text-xl ${stockLeft <= 0 ? 'text-safety' : stockLeft === 1 ? 'text-safety' : 'text-ink'}`}>
                                                {stock === 0 ? 'Épuisé' : stockLeft <= 0 ? 'Max atteint' : `${stockLeft} ${unitLabel}${stockLeft > 1 ? 's' : ''}`}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Catégorie */}
                                    <div className="border-2 border-ink p-4 flex items-center gap-3">
                                        <Tag className="w-5 h-5 text-ink/40" />
                                        <div>
                                            <p className="font-mono text-[10px] uppercase text-ink/50">Catégorie</p>
                                            <p className="font-oswald font-bold text-xl capitalize">{product.category === 'fripe' ? 'Fripe' : 'Sneakers'}</p>
                                        </div>
                                    </div>
                                    {/* État */}
                                    <div className="border-2 border-ink p-4 flex items-center gap-3">
                                        <Star className="w-5 h-5 text-ink/40" />
                                        <div>
                                            <p className="font-mono text-[10px] uppercase text-ink/50">État</p>
                                            <div className="flex gap-0.5 mt-0.5">
                                                {Array(5).fill(0).map((_, i) => (
                                                    <div key={i} className={`w-3 h-3 border border-ink ${i < stars ? 'bg-safety' : 'bg-transparent'}`} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="font-mono text-xs text-ink/60 leading-relaxed border-t border-ink/20 pt-4">
                                    Pièce sélectionnée par l'équipe Vexa. Inspectée et authentifiée avant mise en vente. Livraison soignée sous 48h ou retrait possible à Nice.
                                </p>
                            </div>

                            <div className="mt-6 flex items-center gap-4">
                                <span className="font-oswald font-bold text-5xl">{product.price} €</span>
                                <motion.button
                                    onClick={handleAdd}
                                    disabled={product.sold || stockLeft <= 0}
                                    className={`interactive-target flex-1 py-4 font-mono text-sm uppercase tracking-widest transition-colors duration-300 flex items-center justify-center gap-2 ${product.sold || stockLeft <= 0
                                        ? 'bg-ink/20 text-ink/40 cursor-not-allowed'
                                        : added
                                            ? 'bg-safety text-bone'
                                            : 'bg-ink text-bone hover:bg-safety'
                                        }`}
                                    whileTap={!product.sold && stockLeft > 0 ? { scale: 0.97 } : undefined}
                                >
                                    <AnimatePresence mode="wait">
                                        {added ? (
                                            <motion.span
                                                key="added"
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -8 }}
                                                className="flex items-center gap-2"
                                            >
                                                <ShoppingBag className="w-4 h-4" /> Ajouté au panier
                                            </motion.span>
                                        ) : (
                                            <motion.span
                                                key="add"
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -8 }}
                                            >
                                                {product.sold || stock === 0 ? 'Épuisé' : stockLeft <= 0 ? 'Stock max atteint' : 'Ajouter au panier'}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
