import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Productos',
      links: [
        { name: 'Pasteles', href: '#products' },
        { name: 'Cupcakes', href: '#products' },
        { name: 'Postres', href: '#products' },
        { name: 'Eventos', href: '#products' },
      ],
    },
    {
      title: 'Información',
      links: [
        { name: 'Sobre Nosotros', href: '#about' },
        { name: 'Galería', href: '#gallery' },
        { name: 'Testimonios', href: '#testimonials' },
        { name: 'Preguntas Frecuentes', href: '#' },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { name: 'Ubicación', href: '#contact' },
        { name: 'Horarios', href: '#contact' },
        { name: 'Pedidos', href: '#contact' },
        { name: 'Redes Sociales', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Logo className="h-16 w-auto text-white mb-4" />
            <p className="text-secondary-200 mb-6 max-w-md">
              Endulzamos tus momentos especiales con creaciones artesanales únicas, 
              elaboradas con pasión y los mejores ingredientes para brindarte una 
              experiencia inolvidable.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </motion.a>
            </div>
          </div>
          
          {/* Links */}
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h4 className="text-white font-medium text-lg mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href={link.href} 
                      className="text-secondary-300 hover:text-accent-300 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-secondary-700/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Angie Tortas y Postres. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-secondary-400 text-sm">Hecho con</span>
            <Heart className="h-4 w-4 text-accent-500 animate-pulse" />
            <span className="text-secondary-400 text-sm">en el corazón de cada creación</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;