import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const links = [
    { label: 'SHOP', to: '/shop' },
    { label: "L'ATELIER", to: '/atelier' },
    { label: 'ÉVÉNEMENTS', to: '/events' },
    { label: 'ARCHIVE', to: '/archive' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-20 bg-bone border-b-2 border-ink z-40 flex items-center justify-between px-4 md:px-8 lg:px-12">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="interactive-target block" aria-label="Retour à l'accueil">
            <h1 className="font-oswald font-bold text-3xl md:text-4xl tracking-tighter text-ink">VEXA</h1>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `interactive-target font-mono text-sm tracking-wide transition-colors relative group ${isActive ? 'text-safety' : 'text-ink hover:text-safety'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-safety transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/cart')}
            className="interactive-target relative group"
            aria-label="Voir le panier"
          >
            <ShoppingBag className="w-6 h-6 text-ink group-hover:text-safety transition-colors" />
            {/* Animated badge */}
            <AnimatePresence>
              <motion.span
                key={cartCount}
                initial={{ scale: 1.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                className="absolute -top-1 -right-2 bg-ink text-bone text-[10px] font-mono w-4 h-4 flex items-center justify-center rounded-full group-hover:bg-safety transition-colors"
              >
                {cartCount}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden interactive-target p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="w-6 h-6 text-ink" />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="w-6 h-6 text-ink" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-ink/40 z-30 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-20 right-0 h-[calc(100vh-80px)] w-72 bg-bone border-l-2 border-ink z-30 md:hidden flex flex-col"
            >
              <nav className="flex flex-col p-6 gap-1 flex-1">
                {links.map((link, i) => (
                  <motion.div key={link.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 + 0.1 }}>
                    <NavLink
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block font-oswald font-bold text-3xl uppercase py-3 border-b border-ink/20 transition-colors ${isActive ? 'text-safety' : 'text-ink hover:text-safety'}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <div className="p-6 border-t border-ink/20">
                <p className="font-mono text-xs text-ink/40 uppercase">contact@vexa.fr</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};