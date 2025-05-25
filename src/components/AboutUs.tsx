import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Award, Clock, Sparkles } from 'lucide-react';

const AboutUs = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [imgRef, imgInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: <Heart className="h-10 w-10 text-accent-500" />,
      title: 'Elaborados con Amor',
      description: 'Cada creación es preparada con dedicación y pasión por la repostería artesanal.',
    },
    {
      icon: <Award className="h-10 w-10 text-accent-500" />,
      title: 'Calidad Premium',
      description: 'Utilizamos solo ingredientes seleccionados de la más alta calidad para garantizar el mejor sabor.',
    },
    {
      icon: <Clock className="h-10 w-10 text-accent-500" />,
      title: 'Siempre Frescos',
      description: 'Todos nuestros productos son elaborados bajo pedido para garantizar máxima frescura.',
    },
    {
      icon: <Sparkles className="h-10 w-10 text-accent-500" />,
      title: 'Diseños Personalizados',
      description: 'Creamos diseños únicos adaptados a tus necesidades y ocasiones especiales.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image with parallax effect */}
          <motion.div 
            ref={imgRef}
            className="lg:w-1/2 overflow-hidden rounded-xl shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={imgInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              animate={{
                y: imgInView ? [0, -20, 0] : 0,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="relative h-[500px] w-full"
            >
              <img
                src="/logo.png"
                alt="Angie Tortas y Postres Logo"
                className="absolute inset-0 w-full h-full object-contain p-12"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-900/30 to-transparent"></div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div 
            ref={ref}
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-brown">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-secondary-800 mb-8">
              En <span className="font-semibold">Angie Tortas y Postres</span>, nos apasiona crear experiencias dulces inolvidables. 
              Cada pastel, cada postre y cada detalle están diseñados con dedicación para hacer de tus momentos 
              especiales algo único.
            </p>
            <p className="text-lg text-secondary-800 mb-8">
              Con más de 5 años de experiencia, nuestra misión es combinar sabores tradicionales con técnicas 
              innovadoras para ofrecerte creaciones que deleiten todos tus sentidos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex flex-col items-start"
                >
                  <div className="p-3 rounded-full bg-accent-50 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary-900">{feature.title}</h3>
                  <p className="text-secondary-700">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;