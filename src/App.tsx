/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Spaces } from './components/Spaces';
import { Trust } from './components/Trust';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
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
