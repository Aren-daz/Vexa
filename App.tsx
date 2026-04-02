import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { AtelierPage } from './pages/AtelierPage';
import { EventsPage } from './pages/EventsPage';
import { ArchivePage } from './pages/ArchivePage';
import { CartPage } from './pages/CartPage';

const App: React.FC = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="atelier" element={<AtelierPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="archive" element={<ArchivePage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;