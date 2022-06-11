import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home';
import {OfferCrew} from './pages/OfferCrew';
import {OfferCorporate} from './pages/OfferCorporate';
import {AboutFlight} from './pages/AboutFlight';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/offer-crew" element={<OfferCrew />} />
        <Route path="/offer-corporate" element={<OfferCorporate />} />
        <Route path="/about-flight" element={<AboutFlight />} />
      </Routes>
    </BrowserRouter>
  );
}