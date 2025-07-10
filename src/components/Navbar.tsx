'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const links = [
    { name: 'Главная', path: '/' },
    { name: 'Проекты', path: '/projects' },
    { name: 'Обо мне', path: '/about' },
    { name: 'Контакты', path: '/contact' },
  ];

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 w-full bg-light-background/80 dark:bg-dark-background/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link href="/" className="text-2xl font-bold dark:text-white">
            Portfolio
          </Link>
        </motion.div>

        <div className="flex items-center gap-8">
          <ul className="flex gap-8">
            {links.map((link) => (
              <motion.li
                key={link.path}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link 
                  href={link.path} 
                  className="hover:text-gray-400 dark:hover:text-blue-300 transition-colors dark:text-gray-300"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {mounted && (
            <motion.button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-600" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </motion.button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;