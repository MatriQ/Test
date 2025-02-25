import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const Home = () => {
  // 这里使用示例图片，实际项目中需要替换为真实图片
  const slides = [
    {
      id: 1,
      title: '自然风光',
      description: '捕捉大自然的瞬息万变',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e'
    },
    {
      id: 2,
      title: '人像摄影',
      description: '记录人生的精彩瞬间',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen relative"
    >
      <Swiper
        modules={[EffectFade, Autoplay, Navigation]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        navigation
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="relative h-full flex items-center justify-center text-center px-4">
                <div className="max-w-2xl">
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-200 mb-6"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link to="/gallery" className="btn btn-primary">
                      查看作品集
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Home;