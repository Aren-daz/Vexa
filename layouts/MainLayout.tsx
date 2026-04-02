import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { CustomCursor } from '../components/CustomCursor';
import { Footer } from '../components/Footer';

export const MainLayout: React.FC = () => {
    return (
        <div className="min-h-screen w-full relative">
            {/* Noise Texture Layer */}
            <div className="noise-overlay" />

            {/* Custom Cursor */}
            <CustomCursor />

            {/* Navigation */}
            <Navbar />

            {/* Page Content */}
            <main className="relative z-10 pt-20">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};
