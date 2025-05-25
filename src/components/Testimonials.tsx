import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'María Rodríguez',
    role: 'Cliente',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'El pastel de cumpleaños que pedí para mi hija fue espectacular. No solo era hermoso visualmente, sino que su sabor era increíble. Todos los invitados quedaron encantados.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    role: 'Evento Corporativo',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Contratamos a Angie para nuestro evento corporativo y entregó postres excepcionales. Su profesionalismo y la calidad de sus productos superaron nuestras expectativas.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Laura Gutiérrez',
    role: 'Boda',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Nuestro pastel de bodas fue un sueño hecho realidad. Angie capturó perfectamente nuestra visión y creó algo que no solo era hermoso sino delicioso. ¡Totalmente recomendado!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Juan Pérez',
    role: 'Cliente Frecuente',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'He pedido varios pasteles para diferentes ocasiones y nunca me han decepcionado. La atención personalizada y la calidad constante son lo que me hace volver una y otra vez.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-brown">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-secondary-800">
            Descubre por qué nuestros clientes confían en nosotros para sus momentos más especiales
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Background decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute -top-10 -left-10 text-accent-100"
          >
            <Quote className="w-24 h-24 transform -scale-x-100" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute -bottom-10 -right-10 text-accent-100"
          >
            <Quote className="w-24 h-24" />
          </motion.div>

          {/* Testimonial slider */}
          <div className="relative rounded-xl overflow-hidden shadow-xl bg-white">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  x: currentIndex === index ? 0 : 100,
                  display: currentIndex === index ? 'block' : 'none',
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="p-6 md:p-10"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-accent-100 shadow-lg">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg text-secondary-800 italic mb-6">{testimonial.text}</p>
                    <h3 className="font-semibold text-xl text-secondary-900">{testimonial.name}</h3>
                    <p className="text-secondary-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Navigation dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? 'bg-accent-500' : 'bg-secondary-200'
                  } transition-colors duration-300`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;