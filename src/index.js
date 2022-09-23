import React from 'react';
import { createRoot } from "react-dom/client";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import reportWebVitals from './reportWebVitals';
import Basic from './components/Basic';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import HeroImage from './components/heroImage';
import HeroSectionWithNavbar from './components/heroSectionWithNavbar';
import BgImageWithNavbar from './components/bgImageWithNavbar';
import FixedNavbar from './components/fixedNavbar';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/hero-image" element={<HeroImage/>} />
        <Route path="/hero-section-with-navbar" element={<HeroSectionWithNavbar/>} />
        <Route path="/bg-image-with-navbar" element={<BgImageWithNavbar/>} />
        <Route path="/fixed-navbar" element={<FixedNavbar/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
