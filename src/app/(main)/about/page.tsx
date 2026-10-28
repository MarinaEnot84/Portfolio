'use client';

import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const WaveBackground = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((wave, index) => {
        wave.position.y = Math.sin(clock.getElapsedTime() * 0.5 + index) * 0.2;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[0, 0, -i * 0.5]}>
          <planeGeometry args={[20, 2, 32, 32]} />
          <meshBasicMaterial
            color={new THREE.Color(0x3b82f6)}
            transparent
            opacity={0.2 + i * 0.05}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
};
export default function AboutPage() {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Tailwind CSS',
    'Git',
    'Material UI',
    'Ant Design',
    'MobX',
    'Webpack',
    'Redux Toolkit',
    'Vite',
    'Swagger',
    'Vite',
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <section className="h-[50vh] relative flex items-center justify-center bg-gradient-to-br from-blue-900 to-cyan-300 dark:from-gray-900 dark:to-gray-700">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <WaveBackground />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">Обо мне</h1>
          <p className="mt-4 text-xl text-blue-200">Frontend разработчик / React специалист</p>
        </motion.div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">Моя история</h2>
          <p className="text-lg mb-8">
            Я фронтенд-разработчик с 5+ годами опыта. Специализируюсь на создании интерактивных и
            производительных веб-приложений.
          </p>

          <h3 className="text-2xl font-bold mb-4">Навыки</h3>
          <div className="flex flex-wrap gap-3 mb-12 text-gray-800">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-4">Опыт работы</h3>
          <div className="space-y-6">
            <motion.div
              whileHover={{ x: 20 }}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg"
            >
              <h4 className="text-xl font-semibold text-gray-600">
                Middle+ Frontend Developer в компании "АТБ" (Азиатско-Тихоокеанский банк)
              </h4>
              <p className="text-gray-800">10.2025 - 10.2026</p>
              <p className="mt-2 text-gray-600">
                Cоздала единообразный интерфейс с помощью кастомизированного UI-Kit по макетам Figma
                на React и TypeScript, настроила и запустила 2 приложения с нуля - для рабочего
                места сотрудника (ипотечный конвейер) и приложение проверяющего сотрудника
                (microfrontend). Анализировала ошибки в Kibana. Использовала Swagger и DBeaver для
                работы с данными. Согласовывала реализацию интерфейсов ипотечного конвейера с
                аналитиками и тестировщиками по макетам Figma и техническому заданию. Участвовала в
                код-ревью.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ x: 20 }}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg"
            >
              <h4 className="text-xl font-semibold text-gray-600">
                Middle Frontend Developer в компании МАН (Международная Академия Нутрициологии)
              </h4>
              <p className="text-gray-800">09.2025 - 10.2026</p>
              <p className="mt-2 text-gray-600">
                Доработала существующее приложение на Next.js и Tailwind CSS, создала новые
                компоненты с логикой и правила баги.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ x: 20 }}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg"
            >
              <h4 className="text-xl font-semibold text-gray-600">
                Middle Frontend Developer в компании "РВД Инфосистемы"
              </h4>
              <p className="text-gray-800">01.2025 - 05.2025</p>
              <p className="mt-2 text-gray-600">
                <h5 className="text-md font-semibold text-gray-600">
                  Система электронного документооборота.{' '}
                </h5>
                Доработала логику и интерфейс для автоматизации ведения документации на React и
                TypeScript, что значительно ускорило взаимодействие между ключевыми участниками
                процесса.
                <h5 className="text-md font-semibold text-gray-600">
                  Административная панель и клиентская часть для работы с хоккейными клубами.{' '}
                </h5>{' '}
                Восстановила работоспособность приложения (legacy-код) Node.js. Использовала Google
                Cloud Console для настройки прав пользователя и отслеживания затрат
              </p>
            </motion.div>
            <motion.div
              whileHover={{ x: 20 }}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg"
            >
              <h4 className="text-xl font-semibold text-gray-600">
                Middle Frontend Developer в компании ConnectWise
              </h4>
              <p className="text-gray-800">08.2023 - 11.2024</p>
              <p className="mt-2 text-gray-600">
                Разработала совместно с командой интуитивно понятный интерфейс на Next.js и Chakra
                UI, успешно внедрила модуль записи на прием, реализовала систему уведомлений. В
                результате - повышение уровня посещаемости пациентов на 25%.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ x: 20 }}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg"
            >
              <h4 className="text-xl font-semibold text-gray-600">
                Junior+ Frontend Developer, ФГУП "РФЯЦ-ВНИИЭФ", Институт цифровых технологий
              </h4>
              <p className="text-gray-800">01.2022 - 07.2023</p>
              <p className="mt-2 text-gray-600">
                <h5 className="text-md font-semibold text-gray-600">
                  Платформа для внутреннего обучения сотрудников.{' '}
                </h5>{' '}
                Повысила вовлечённость персонала в обучение на 50% за счёт продуманного
                пользовательского сценария и удобной навигации по платформе. Спроектировала и
                реализовала клиентскую часть на React с компонентным UI-китом Material UI (MUI) :
                настроила адаптивное поведение макета и экранов, чтобы платформой было удобно
                пользоваться с десктопа, планшета и смартфона.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ x: 20 }}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg"
            >
              <h4 className="text-xl font-semibold text-gray-600">
                Junior Frontend Developer, ФГУП "РФЯЦ-ВНИИЭФ", Институт цифровых технологий
              </h4>
              <p className="text-gray-800">10.2020 - 12.2021</p>
              <p className="mt-2 text-gray-600">
                <h5 className="text-md font-semibold text-gray-600">Интерфейс для MES системы. </h5>{' '}
                Участвовала в доработке интерфейса на React и MUI и внедрении системы мониторинга в
                реальном времени, что позволило снизить время простоя оборудования на 20%.
                Использовала механизм виртуализации таблиц для эффективного отображения больших
                массивов производственных данных в реальном времени с помощью react-window.
                Разработала интуитивно понятный адаптивный интерфейс улучшил доступность информации
                для пользователей на различных устройствах.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
