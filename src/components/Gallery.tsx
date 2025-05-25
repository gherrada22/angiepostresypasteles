import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, X } from 'lucide-react';

// Gallery images
const galleryImages = [
  {
    id: 1,
    category: 'pasteles',
    src: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Pastel de chocolate con fresas'
  },
  {
    id: 2,
    category: 'cupcakes',
    src: 'https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Cupcakes decorados'
  },
  {
    id: 3,
    category: 'pasteles',
    src: 'https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Pastel de bodas elegante'
  },
  {
    id: 4,
    category: 'postres',
    src: 'https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Postre de frutas'
  },
  {
    id: 5,
    category: 'pasteles',
    src: 'https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Pastel de cumpleaños colorido'
  },
  {
    id: 6,
    category: 'cupcakes',
    src: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Cupcakes variados'
  },
  {
    id: 7,
    category: 'postres',
    src: 'https://images.pexels.com/photos/3992131/pexels-photo-3992131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Macarons coloridos'
  },
  {
    id: 8,
    category: 'pasteles',
    src: 'https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Pastel de frutas frescas'
  }
];

const filterCategories = [
  { id: 'all', label: 'Todos' },
  { id: 'pasteles', label: 'Pasteles' },
  { id: 'cupcakes', label: 'Cupcakes' },
  { id: 'postres', label: 'Postres' }
];

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredImages = selectedFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedFilter);

  return (
    <section id="gallery" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-brown">
            Nuestra Galería
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-secondary-800">
            Explora algunas de nuestras creaciones más destacadas y déjate inspirar para tu próximo pedido
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div 
          ref={ref}
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filterCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedFilter(category.id)}
              className={`px-5 py-2 rounded-full text-base font-medium transition-all ${
                selectedFilter === category.id
                  ? 'bg-accent-500 text-white shadow-md'
                  : 'bg-white text-secondary-800 hover:bg-secondary-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative rounded-lg overflow-hidden group cursor-pointer"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
              }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(image.id)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white"
                >
                  <h3 className="font-medium text-lg">{image.alt}</h3>
                  <div className="flex items-center mt-2">
                    <Search className="w-5 h-5 mr-2" />
                    <span className="text-sm">Ver detalles</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                className="absolute top-6 right-6 text-white z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </motion.button>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="max-w-4xl max-h-[80vh] relative"
                onClick={(e) => e.stopPropagation()}
              >
                {galleryImages.find(img => img.id === selectedImage) && (
                  <img
                    src={galleryImages.find(img => img.id === selectedImage)?.src}
                    alt={galleryImages.find(img => img.id === selectedImage)?.alt}
                    className="max-w-full max-h-[80vh] object-contain"
                  />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;