import React from 'react';

export const Footer: React.FC = () => (
    <footer id="contact" className="w-full py-12 px-4 md:px-12 border-t-2 border-ink mt-12 bg-bone relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end font-mono text-xs md:text-sm">
            <div className="mb-4 md:mb-0">
                <p className="font-oswald font-bold text-2xl text-ink mb-1">VEXA</p>
                <p>© 2026 VEXA NICE</p>
                <p>TOUS DROITS RÉSERVÉS</p>
                <a href="mailto:contact@vexa.fr" className="mt-2 text-ink/60 hover:text-safety transition-colors block">
                    contact@vexa.fr
                </a>
            </div>
            <div className="flex gap-6 uppercase">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-safety transition-colors interactive-target">Instagram</a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-safety transition-colors interactive-target">TikTok</a>
                <a href="#" className="hover:text-safety transition-colors interactive-target">Mentions légales</a>
            </div>
        </div>
    </footer>
);
