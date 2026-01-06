'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  // demoUrl?: string;
  // codeUrl?: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="bg-white/10 rounded-xl overflow-hidden border border-gray-700/50 flex flex-col h-full"
    >
      <div className="relative h-48 w-full flex-shrink-0">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl text-gray-600 font-bold mb-2 line-clamp-2">{project.title}</h3>
        <p className="mb-4 line-clamp-3 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-blue-100 rounded-full text-sm text-gray-800">
              {tag}
            </span>
          ))}
        </div>

        {/* <div className="flex gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Демо
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Код
            </a>
          )}
        </div> */}
      </div>
    </motion.div>
  );
};

export default ProjectCard;