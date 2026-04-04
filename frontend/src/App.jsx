import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Causes from './components/Causes'; // Nouveau composant
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Causes /> {/* À la place d'Actions */}
        <Gallery />
        <Contact />
    </main>
    <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
