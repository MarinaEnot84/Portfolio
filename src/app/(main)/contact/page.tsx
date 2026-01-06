'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-teal-50 to-teal-600 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6 text-center">Свяжитесь со мной</h1>
          <p className="text-xl mb-12 text-center text-gray-600 dark:text-gray-400">
            Есть вопросы или предложения? Напишите мне!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <motion.h2 
                whileHover={{ scale: 1.02 }}
                className="text-2xl font-bold mb-6"
              >
                Контактная информация
              </motion.h2>
              
              <div className="space-y-4">
                <p>Email: porsche251184@gmail.com</p>
                <p>Telegram: @marina_q_84</p>
                <p>GitHub: github.com/MarinaEnot84</p>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}