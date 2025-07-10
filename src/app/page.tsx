'use client';

import { motion } from 'framer-motion';
import { useWindupString } from 'windups';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [text] = useWindupString("Фронтенд разработчик", { 
    pace: char => 30,
  });

  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-teal-200 dark:bg-teal-800 blur-3xl"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.05, y: 0 }}
        transition={{ duration: 2.5, delay: 0.5 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-teal-300 dark:bg-teal-700 blur-3xl"
      />

      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50, x: -20 }}
          animate={{ 
            opacity: [0, 0.4, 0],
            y: [0, -100, -50],
            x: [0, 20, 40]
          }}
          transition={{
            duration: 15 + i * 3,
            delay: i * 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
          className={`absolute ${i%2 ? 'left-1/4' : 'right-1/4'} ${i%3 ? 'top-1/3' : 'bottom-1/3'} w-3 h-3 rounded-full bg-teal-500 dark:bg-teal-400`}
        />
      ))}

      <section className="h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl relative z-10">
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ 
              y: 0, 
              opacity: 1,
              textShadow: '0 5px 15px rgba(192, 132, 252, 0.2)'
            }}
            transition={{ 
              type: 'spring',
              damping: 10,
              stiffness: 50,
              delay: 0.3
            }}
            className="text-5xl md:text-6xl font-light text-teal-800 dark:text-teal-100 mb-6"
          >
            Привет, я Марина
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              delay: 0.8, 
              duration: 1,
              when: "beforeChildren",
              staggerChildren: 0.1
            }}
            className="text-xl md:text-2xl text-teal-700 dark:text-teal-300 mb-8 h-8 font-medium"
          >
            {text.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-teal-300 dark:via-teal-500 to-transparent my-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              delay: 1.8, 
              duration: 0.8,
              scale: {
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            }}
            className="text-teal-600 dark:text-teal-400 font-light text-lg"
          >
            с фокусом на современные технологии
          </motion.p>
        </div>
      </section>
    </div>
  );
}