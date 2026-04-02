import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, X, Bell } from 'lucide-react';

const events = [
    {
        id: '01',
        title: 'POP-UP VEXA #4',
        date: '12 Octobre 2026',
        location: 'Nice Centre — Place Masséna',
        description: 'Notre quatrième pop-up. Drops exclusifs, nettoyage gratuit sur place, et bonne ambiance garantie.',
        upcoming: true,
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '02',
        title: 'COLLAB STREETCULTURE',
        date: '3 Juillet 2026',
        location: 'Nice Méridia',
        description: 'Collaboration avec StreetCulture Nice. Vente de pièces exclusives et showcase live.',
        upcoming: false,
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '03',
        title: 'POP-UP VEXA #3',
        date: '22 Mars 2026',
        location: 'Antibes — Vieille Ville',
        description: 'Troisième édition du pop-up. Plus de 200 visiteurs, sold out en 2h.',
        upcoming: false,
        image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop',
    },
];

export const EventsPage: React.FC = () => {
    const [notifOpen, setNotifOpen] = useState(false);
    const [notifSent, setNotifSent] = useState(false);

    const upcoming = events.filter(e => e.upcoming);
    const past = events.filter(e => !e.upcoming);

    const handleNotif = () => {
        setNotifSent(true);
        setTimeout(() => setNotifOpen(false), 1500);
    };

    return (
        <div className="px-4 md:px-8 lg:px-12 py-16">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16 border-b-2 border-ink pb-8"
            >
                <p className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-2">— Dans la rue</p>
                <h1 className="font-oswald font-bold text-6xl md:text-8xl uppercase text-ink">ÉVÉNEMENTS</h1>
            </motion.div>

            {/* Prochain événement */}
            {upcoming.length > 0 && (
                <div className="mb-20">
                    <h2 className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-6">Prochain événement</h2>
                    {upcoming.map(event => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="relative border-2 border-ink overflow-hidden h-[400px] md:h-[500px]"
                        >
                            <img
                                src={event.image}
                                alt={event.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-ink/60" />
                            <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 text-bone">
                                <div className="flex items-start justify-between">
                                    <span className="font-mono text-xs uppercase tracking-widest bg-safety text-bone px-3 py-1">À venir</span>
                                    {/* Bouton S'inscrire aux notifs */}
                                    <button
                                        onClick={() => setNotifOpen(true)}
                                        className="interactive-target flex items-center gap-2 border border-bone/60 px-4 py-2 font-mono text-xs uppercase tracking-widest text-bone hover:bg-bone hover:text-ink transition-colors duration-200"
                                    >
                                        <Bell className="w-3.5 h-3.5" /> Me rappeler
                                    </button>
                                </div>
                                <div>
                                    <h3 className="font-oswald font-bold text-5xl md:text-7xl uppercase mb-4">{event.title}</h3>
                                    <div className="flex flex-col md:flex-row gap-3 font-mono text-sm">
                                        <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-safety" /> {event.date}</span>
                                        <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-safety" /> {event.location}</span>
                                    </div>
                                    <p className="font-mono text-sm text-bone/70 mt-4 max-w-lg">{event.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Événements passés — pas de hover cliquable */}
            <div>
                <h2 className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-6">Événements passés</h2>
                <div className="space-y-4">
                    {past.map((event, i) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="border-2 border-ink/40 p-6 md:p-8 flex flex-col md:flex-row gap-4 bg-bone/50"
                        >
                            <span className="font-oswald font-bold text-6xl text-ink/10 leading-none hidden md:block">
                                {event.id}
                            </span>
                            <div className="flex-1">
                                <h3 className="font-oswald font-bold text-2xl uppercase mb-1 text-ink">{event.title}</h3>
                                <div className="flex flex-wrap gap-4 font-mono text-xs text-ink/50 mb-2">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {event.date}</span>
                                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.location}</span>
                                </div>
                                <p className="font-mono text-sm text-ink/60">{event.description}</p>
                            </div>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-ink/30 self-start md:self-center border border-ink/20 px-2 py-1 flex-shrink-0">
                                Terminé
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal "Me rappeler" */}
            <AnimatePresence>
                {notifOpen && (
                    <>
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-ink/50 z-50 backdrop-blur-sm"
                            onClick={() => setNotifOpen(false)}
                        />
                        <motion.div
                            key="modal"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-bone border-2 border-ink p-8 w-[90vw] max-w-sm"
                        >
                            <button onClick={() => setNotifOpen(false)} className="interactive-target absolute top-3 right-3">
                                <X className="w-5 h-5" />
                            </button>

                            {notifSent ? (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-4">
                                    <Bell className="w-10 h-10 text-safety mx-auto mb-3" />
                                    <p className="font-oswald font-bold text-2xl uppercase mb-1">Noté !</p>
                                    <p className="font-mono text-xs text-ink/60">On te prévient avant le pop-up.</p>
                                </motion.div>
                            ) : (
                                <>
                                    <Bell className="w-8 h-8 mb-4" />
                                    <h3 className="font-oswald font-bold text-2xl uppercase mb-1">Me rappeler</h3>
                                    <p className="font-mono text-xs text-ink/60 mb-6">
                                        Pop-Up Vexa #4 — 12 Octobre 2026<br />
                                        Nice Centre, Place Masséna
                                    </p>
                                    <input
                                        type="email"
                                        placeholder="ton@email.fr"
                                        className="w-full border-2 border-ink px-4 py-3 font-mono text-sm mb-4 bg-bone focus:outline-none focus:border-safety transition-colors"
                                    />
                                    <button
                                        onClick={handleNotif}
                                        className="interactive-target w-full py-3 bg-ink text-bone font-mono text-xs uppercase tracking-widest hover:bg-safety transition-colors"
                                    >
                                        S'inscrire
                                    </button>
                                </>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};
