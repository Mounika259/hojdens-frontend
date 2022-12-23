import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from '../components/contact';
import Home from '../components/home';
import Offers from '../components/offerPage';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/erbjudanden" element={<Offers />} />
        <Route path="/kontakt" element={<Contact />} />
        {/* <Route path="/search/:keyword" element={<Home />} />  */}
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;
