"use client";

import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

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
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Git",
    "Material UI",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <section className="h-[50vh] relative flex items-center justify-center bg-gradient-to-br from-blue-900 to-cyan-300 dark:from-gray-900 dark:to-gray-700">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <WaveBackground />
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Обо мне
          </h1>
          <p className="mt-4 text-xl text-blue-200">
            Frontend разработчик / React специалист
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-600">Моя история</h2>
          <p className="text-lg mb-8 text-gray-800">
            Я фронтенд-разработчик с 4+ годами опыта. Специализируюсь на
            создании интерактивных и производительных веб-приложений.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-600">Навыки</h3>
          <div className="flex flex-wrap gap-3 mb-12">
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

          <h3 className="text-2xl font-bold mb-4 text-gray-600">Опыт работы</h3>
          <div className="space-y-6">
            <motion.div
              whileHover={{ x: 20 }}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg"
            >
              <h4 className="text-xl font-semibold text-gray-600">
                Middle Frontend Developer в компании "РВД Инфосистемы"
              </h4>
              <p className="text-gray-800">
                01.2025 - 05.2025
              </p>
              <p className="mt-2 text-gray-600">
                1. Разработка и поддержка существующего дизайна платформы
                электронного документооборота, используя инструменты React и
                Material-UI. Исправление багов и корректировка функционала в
                соответствии с требованиями заказчика. Доработка недостающего
                функционала в существующих компонентах. 2. Работа с серверной
                частью админки хоккейного клуба, исправление багов, частично
                работа с UI. Восстановление структуры объектов для базы данных
                mongoDB, работа со Swagger, деплой проекта на удаленный сервер
                (nginx), подключение приложения через биллинг-аккаунт в google
                cloud platform для загрузки видео и изображений.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ x: 20 }}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg"
            >
              <h4 className="text-xl font-semibold text-gray-600">
                Middle Frontend Developer в компании ConnectWise
              </h4>
              <p className="text-gray-800">
                08.2023 - 11.2024
              </p>
              <p className="mt-2 text-gray-600">
                Разработка дизайна информационной системы для частной клиники,
                предназначенной для автоматизации процессов записи пациентов на
                прием к врачу, управления медицинскими картами, учета процедур и
                других связанных функций, упрощения взаимодействия между
                медицинским персоналом и пациентами, используя инструменты React
                и Material-UI.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ x: 20 }}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg"
            >
              <h4 className="text-xl font-semibold text-gray-600">
                Junior+ Frontend Developer, ФГУП "РФЯЦ-ВНИИЭФ", Институт
                цифровых технологий
              </h4>
              <p className="text-gray-800">
                01.2022 - 07.2023
              </p>
              <p className="mt-2 text-gray-600">
                Разработка интерфейса платформы для внутреннего обучения,
                позволяющей сотрудникам проходить курсы, тесты и получать
                сертификаты, используя React, Redux и Material-UI.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ x: 20 }}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg"
            >
              <h4 className="text-xl font-semibold text-gray-600">
                Junior Frontend Developer, ФГУП "РФЯЦ-ВНИИЭФ", Институт цифровых
                технологий
              </h4>
              <p className="text-gray-800">
                10.2020 - 12.2021
              </p>
              <p className="mt-2 text-gray-600">
                Разработка интерфейса для системы управления производственными
                процессами (MES), позволяющего мониторить и управлять
                производственными линиями в реальном времени, с использованием
                React, Redux, CSS-in-JS. Связывание приложения
                с уже существующим API, чтобы получать данные о состоянии
                оборудования и производственных показателях, используя
                библиотеку Axios.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
