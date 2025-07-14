import React from 'react';
import Hero from './components/Hero';
import Policies from './components/Policies';
import Gallery from './components/Gallery';
import Opportunities from './components/Opportunities';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Policies />
      <Gallery />
      <Opportunities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;