import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const services = [
    {
        name: 'BASIQUE',
        price: '25€',
        description: 'Nettoyage extérieur complet, brossage des semelles.',
        features: ['Nettoyage upper', 'Semelles propres', 'Lacets rincés', 'Séchage naturel'],
    },
    {
        name: 'PREMIUM',
        price: '50€',
        description: 'Nettoyage en profondeur, traitement anti-odeur, protection imperméabilisante.',
        features: ['Tout le basique', 'Nettoyage intérieur', 'Anti-odeur', 'Protection imperméable'],
        highlighted: true,
    },
    {
        name: 'RESTAURATION',
        price: '120€',
        description: 'Retouche de la semelle, repeinture partielle, remplacement des lacets.',
        features: ['Tout le premium', 'Retouche semelle', 'Repeinture', 'Nouveaux lacets'],
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
};

export const AtelierPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
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
                <p className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-2">— Service professionnel</p>
                <h1 className="font-oswald font-bold text-6xl md:text-8xl uppercase text-ink">L'ATELIER</h1>
                <p className="font-mono text-sm text-ink/70 mt-4 max-w-lg">
                    Nettoyage et restauration de sneakers à Nice. On redonne vie à tes paires préférées.
                </p>
            </motion.div>

            {/* Tarifs — centrés avec stagger animation */}
            <div className="mb-20">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="font-oswald font-bold text-3xl uppercase mb-10 text-center"
                >
                    NOS TARIFS
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1000px] mx-auto">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.name}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className={`border-2 border-ink p-6 flex flex-col ${s.highlighted ? 'bg-ink text-bone' : 'bg-bone text-ink'}`}
                        >
                            {s.highlighted && (
                                <span className="font-mono text-[10px] uppercase tracking-widest text-safety mb-2">Le plus populaire</span>
                            )}
                            <h3 className="font-oswald font-bold text-3xl uppercase mb-1">{s.name}</h3>
                            <motion.p
                                className={`font-oswald font-bold text-5xl mb-4 ${s.highlighted ? 'text-safety' : 'text-ink'}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 + 0.3, duration: 0.4, ease: 'backOut' }}
                            >
                                {s.price}
                            </motion.p>
                            <p className={`font-mono text-xs leading-relaxed mb-6 ${s.highlighted ? 'text-bone/70' : 'text-ink/60'}`}>
                                {s.description}
                            </p>
                            <ul className="space-y-2 mt-auto">
                                {s.features.map((f, fi) => (
                                    <motion.li
                                        key={f}
                                        className="flex items-center gap-2 font-mono text-xs"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.15 + fi * 0.07 + 0.4 }}
                                    >
                                        <CheckCircle className={`w-4 h-4 flex-shrink-0 ${s.highlighted ? 'text-safety' : 'text-ink'}`} />
                                        {f}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Formulaire RDV — centré */}
            <div className="max-w-xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="font-oswald font-bold text-3xl uppercase mb-8 text-center"
                >
                    PRENDRE RDV
                </motion.h2>

                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="border-2 border-ink p-8 bg-bone text-center"
                    >
                        <CheckCircle className="w-12 h-12 text-safety mx-auto mb-4" />
                        <h3 className="font-oswald font-bold text-2xl uppercase mb-2">Demande envoyée !</h3>
                        <p className="font-mono text-xs text-ink/60">On te recontacte dans les 24h pour confirmer ton rendez-vous.</p>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >
                        {[
                            { id: 'name', label: 'Nom complet', type: 'text', placeholder: 'Jordan Dupont' },
                            { id: 'email', label: 'Email', type: 'email', placeholder: 'jordan@email.com' },
                        ].map(field => (
                            <div key={field.id}>
                                <label htmlFor={field.id} className="block font-mono text-xs uppercase tracking-widest text-ink/70 mb-1">
                                    {field.label}
                                </label>
                                <input
                                    id={field.id}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    required
                                    className="w-full border-2 border-ink bg-bone px-4 py-3 font-mono text-sm focus:outline-none focus:border-safety transition-colors"
                                />
                            </div>
                        ))}
                        <div>
                            <label htmlFor="service" className="block font-mono text-xs uppercase tracking-widest text-ink/70 mb-1">Service</label>
                            <select
                                id="service"
                                required
                                className="interactive-target w-full border-2 border-ink bg-bone px-4 py-3 font-mono text-sm focus:outline-none focus:border-safety transition-colors"
                            >
                                <option value="">Choisir un service</option>
                                {services.map(s => (
                                    <option key={s.name} value={s.name}>{s.name} — {s.price}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block font-mono text-xs uppercase tracking-widest text-ink/70 mb-1">
                                Description de la paire
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="Nike Air Jordan 1, taille 42, taches sur la semelle..."
                                className="w-full border-2 border-ink bg-bone px-4 py-3 font-mono text-sm focus:outline-none focus:border-safety transition-colors resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="interactive-target w-full py-4 bg-ink text-bone font-mono text-sm uppercase tracking-widest hover:bg-safety transition-colors duration-300"
                        >
                            Envoyer la demande
                        </button>
                    </motion.form>
                )}
            </div>
        </div>
    );
};
