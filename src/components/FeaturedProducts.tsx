import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CircleSlash2, ChevronDown } from 'lucide-react';

// Product categories and data
const categories = ['Todos', 'Pasteles', 'Cupcakes', 'Postres', 'Eventos'];

const products = [
  {
    id: 1,
    name: 'Pastel de Chocolate Premium',
    description: 'Delicioso pastel de chocolate con ganache y decoración artesanal',
    price: '$350',
    category: 'Pasteles',
    image: 'https://images.pexels.com/photos/264892/pexels-photo-264892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    name: 'Pastel de Frutos Rojos',
    description: 'Exquisito pastel de vainilla con frutos rojos frescos y crema',
    price: '$380',
    category: 'Pasteles',
    image: 'https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    name: 'Cupcakes Variados',
    description: 'Paquete de 12 cupcakes surtidos con diferentes sabores y decoraciones',
    price: '$280',
    category: 'Cupcakes',
    image: 'https://images.pexels.com/photos/3992131/pexels-photo-3992131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 4,
    name: 'Pastel de Boda',
    description: 'Elegante pastel de tres pisos para bodas, personalizable',
    price: 'Desde $1,200',
    category: 'Eventos',
    image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 5,
    name: 'Cheesecake New York',
    description: 'Auténtico cheesecake estilo New York con base de galleta',
    price: '$320',
    category: 'Postres',
    image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 6,
    name: 'Pastel de Cumpleaños',
    description: 'Pastel personalizado para celebrar cumpleaños, varios sabores disponibles',
    price: 'Desde $400',
    category: 'Eventos',
    image: 'https://images.pexels.com/photos/369267/pexels-photo-369267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredProducts = activeCategory === 'Todos'
    ? products
    : products.filter(product => product.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="products" className="py-20 bg-beige/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-brown">
            Nuestros Productos Destacados
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-secondary-800">
            Explora nuestra selección de pasteles y postres artesanales, elaborados con ingredientes de primera calidad
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-all ${
                activeCategory === category
                  ? 'bg-accent-500 text-white shadow-md'
                  : 'bg-white text-secondary-800 hover:bg-secondary-50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <motion.button
                      onClick={() => setSelectedProduct(product.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                    >
                      Ver Detalles
                    </motion.button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2 text-secondary-900">{product.name}</h3>
                  <p className="text-secondary-700 mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-accent-600">{product.price}</span>
                    <span className="text-sm px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full">{product.category}</span>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              variants={itemVariants}
              className="col-span-full flex flex-col items-center justify-center py-12 text-center"
            >
              <CircleSlash2 className="h-16 w-16 text-secondary-400 mb-4" />
              <h3 className="text-2xl font-semibold text-secondary-700 mb-2">No hay productos en esta categoría</h3>
              <p className="text-secondary-600">Por favor, selecciona otra categoría o revisa más tarde.</p>
            </motion.div>
          )}
        </motion.div>

        {/* "See More" Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center mx-auto text-brown hover:text-accent-600 font-medium text-lg transition-colors"
          >
            Ver Catálogo Completo
            <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Product Modal */}
        {selectedProduct !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/80"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-xl overflow-hidden max-w-4xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {products.find(p => p.id === selectedProduct) && (
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <img
                      src={products.find(p => p.id === selectedProduct)?.image}
                      alt={products.find(p => p.id === selectedProduct)?.name}
                      className="w-full h-full object-cover max-h-[50vh] md:max-h-none"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col">
                    <div className="mb-auto">
                      <h3 className="font-display text-3xl font-bold mb-4 text-secondary-900">
                        {products.find(p => p.id === selectedProduct)?.name}
                      </h3>
                      <p className="text-lg text-secondary-700 mb-6">
                        {products.find(p => p.id === selectedProduct)?.description}
                      </p>
                      <div className="mb-8">
                        <span className="text-2xl font-semibold text-accent-600">
                          {products.find(p => p.id === selectedProduct)?.price}
                        </span>
                      </div>
                      <div className="bg-secondary-50 p-4 rounded-lg mb-6">
                        <h4 className="font-medium text-lg mb-2 text-secondary-900">Información del producto:</h4>
                        <ul className="space-y-2 text-secondary-700">
                          <li>• Elaborado con ingredientes naturales</li>
                          <li>• Sin conservantes artificiales</li>
                          <li>• Personalizable a pedido</li>
                          <li>• Se requiere pedido con 48h de anticipación</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-full font-medium text-center transition-colors"
                        onClick={() => setSelectedProduct(null)}
                      >
                        Realizar Pedido
                      </motion.a>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-secondary-300 hover:border-secondary-400 text-secondary-800 px-6 py-3 rounded-full font-medium text-center transition-colors"
                        onClick={() => setSelectedProduct(null)}
                      >
                        Cerrar
                      </motion.button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;