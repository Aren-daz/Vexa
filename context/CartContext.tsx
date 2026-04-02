import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Product } from '../data/products';

export interface CartItem {
    product: Product;
    quantity: number;
}

interface CartContextValue {
    cartItems: CartItem[];
    cartCount: number;
    total: number;
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = useCallback((product: Product) => {
        setCartItems(prev => {
            const existing = prev.find(i => i.product.id === product.id);
            if (existing) {
                // Ne pas dépasser le stock disponible
                if (existing.quantity >= product.stock) return prev;
                return prev.map(i =>
                    i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            if (product.stock <= 0) return prev;
            return [...prev, { product, quantity: 1 }];
        });
    }, []);

    const removeFromCart = useCallback((productId: string) => {
        setCartItems(prev => prev.filter(i => i.product.id !== productId));
    }, []);

    const cartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);
    const total = cartItems.reduce((acc, i) => acc + i.product.price * i.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, cartCount, total, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used inside CartProvider');
    return ctx;
};
