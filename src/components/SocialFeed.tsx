import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, Share2 } from 'lucide-react';

const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M19.321 5.562a5.122 5.122 0 01-5.116-5.115h-3.767v17.238a3.384 3.384 0 01-3.38 3.38 3.384 3.384 0 01-3.38-3.38 3.384 3.384 0 013.38-3.38c.193 0 .38.021.562.053v-3.863a7.228 7.228 0 00-.562-.022C3.314 10.473.5 13.287.5 16.685c0 3.398 2.814 6.212 6.212 6.212 3.398 0 6.212-2.814 6.212-6.212V9.429a8.95 8.95 0 005.116 1.584V7.146a5.122 5.122 0 01-5.116-5.115h-3.767v17.238a3.384 3.384 0 01-3.38 3.38 3.384 3.384 0 01-3.38-3.38 3.384 3.384 0 013.38-3.38c.193 0 .38.021.562.053v-3.863a7.228 7.228 0 00-.562-.022C3.314 10.473.5 13.287.5 16.685c0 3.398 2.814 6.212 6.212 6.212 3.398 0 6.212-2.814 6.212-6.212V9.429a8.95 8.95 0 005.116 1.584V7.146z"/>
  </svg>
);

const socialPosts = [
  {
    id: 1,
    platform: 'instagram',
    image: 'https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Deliciosas tartas de frutas frescas para el verano ☀️🍓 #AngiePasteles',
    likes: 128,
    comments: 24,
  },
  {
    id: 2,
    platform: 'tiktok',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Aprende a decorar cupcakes como un profesional en 30 segundos 🧁✨ #TipsDeRepostería',
    likes: 1542,
    comments: 87,
  },
  {
    id: 3,
    platform: 'instagram',
    image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Nuevos cupcakes de temporada ya disponibles para pedidos 🧁❤️ #CupcakesArtesanales',
    likes: 95,
    comments: 18,
  },
  {
    id: 4,
    platform: 'tiktok',
    image: 'https://images.pexels.com/photos/4686818/pexels-photo-4686818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Cómo hacer la crema perfecta para tus pasteles en casa 🎂👩‍🍳 #RecetasFáciles',
    likes: 876,
    comments: 43,
  },
  {
    id: 5,
    platform: 'instagram',
    image: 'https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Pastel de bodas elegante para una celebración inolvidable 👰🤵 #BodasPerfectas',
    likes: 213,
    comments: 32,
  },
  {
    id: 6,
    platform: 'tiktok',
    image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Ideas para postres rápidos cuando tienes invitados sorpresa 🏠🍰 #PostresExpress',
    likes: 1120,
    comments: 65,
  },
];

const SocialFeed = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-secondary-50 to-white">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-brown">
            Síguenos en Redes Sociales
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-secondary-800">
            Inspírate con nuestras creaciones más recientes y mantente al día con nuestras novedades
          </p>
        </motion.div>

        {/* Social media links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6 mb-12"
        >
          <motion.a
            href="https://www.instagram.com/tortasypostresangie/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium transition-transform"
          >
            <Instagram className="h-5 w-5" />
            <span>Instagram</span>
          </motion.a>
          <motion.a
            href="https://www.tiktok.com/@agripina_rosales?lang=es-419&is_from_webapp=1&sender_device=mobile&sender_web_id=7508262262949103110"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium transition-transform"
          >
            <TiktokIcon />
            <span>TikTok</span>
          </motion.a>
        </motion.div>

        {/* Social feed grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
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
          {socialPosts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.1 } 
                }
              }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.caption} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  {post.platform === 'instagram' ? (
                    <Instagram className="h-5 w-5 text-pink-500" />
                  ) : (
                    <TiktokIcon />
                  )}
                </div>
              </div>
              <div className="p-4">
                <p className="text-secondary-800 line-clamp-2 mb-3">{post.caption}</p>
                <div className="flex justify-between items-center text-sm text-secondary-600">
                  <div className="flex items-center gap-3">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-accent-500 hover:text-accent-600"
                  >
                    <Share2 className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialFeed;
