/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Spaces } from './components/Spaces';
import { Trust } from './components/Trust';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import ShowcasePage from './pages/ShowcasePage';

function ScrollToHash() {
  const { hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);
  
  return null;
}

function HomePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden pt-[80px]">
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="about"><Trust /></div>
      <div id="services"><Spaces /></div>
      <div id="showcase"><Projects /></div>
      <div id="process"><Process /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
      </Routes>
    </Router>
  );
}
