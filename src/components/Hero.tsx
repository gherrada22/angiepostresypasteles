import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cake, ChevronDown } from 'lucide-react';

const cakeImages = [
  "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut"
    }
  })
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % cakeImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {cakeImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: currentImage === index ? 1 : 0,
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/30 to-dark/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div
            custom={0}
            variants={fadeInVariants}
            className="mb-6"
          >
            <Cake className="inline-block h-16 w-16 text-accent-400 mb-4 animate-float" />
          </motion.div>
          
          <motion.h1
            custom={1}
            variants={fadeInVariants}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white drop-shadow-md"
          >
            Dulces Creaciones <span className="text-accent-400">Artesanales</span>
          </motion.h1>
          
          <motion.p
            custom={2}
            variants={fadeInVariants}
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto text-beige"
          >
            Pasteles y postres hechos con amor para tus momentos más especiales
          </motion.p>
          
          <motion.div
            custom={3}
            variants={fadeInVariants}
            className="flex flex-col md:flex-row justify-center gap-4 mb-12"
          >
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-full font-medium text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Ver Productos
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3 rounded-full font-medium text-lg transition-all"
            >
              Contactar
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a href="#products" aria-label="Scroll down">
            <ChevronDown className="h-10 w-10 text-white" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;