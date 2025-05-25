import React from 'react';
import { motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import SocialFeed from './components/SocialFeed';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <AboutUs />
        <Gallery />
        <Testimonials />
        <SocialFeed />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}

export default App;