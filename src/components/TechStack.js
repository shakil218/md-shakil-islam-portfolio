"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import { useEffect, useState } from 'react';

const techs = [
  // Expert / Core Advanced
  { name: "React", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "JavaScript", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Node.js", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },

  // Advanced
  { name: "Tailwind CSS", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "TypeScript", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "REST API", level: "Advanced", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "JWT", level: "Advanced", icon: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg" },
  { name: "Firebase", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
  { name: "Redux", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },

  // Intermediate & Basics
  { name: "PostgreSQL", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Prisma", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
  { name: "Docker", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
];

export default function TechStack({ sectionId = "tech" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id={sectionId} className="py-24 opacity-0">
        <div className="h-96" />
      </section>
    );
  }

  return (
    <section id={sectionId} className="py-20 text-center bg-zinc-50 dark:bg-zinc-950/20 transition-colors duration-300">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-zinc-900 dark:text-white">Technologies</h2>
      <p className="text-zinc-500 dark:text-gray-400 text-sm mb-16 uppercase tracking-widest font-bold">My Tech Stack (Advanced to Basics)</p>
      
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-6">
        {techs.map((tech, idx) => (
          <motion.div 
            key={idx}
            animate={{ 
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.12
            }}
            whileHover={{ scale: 1.12, y: -12 }}
            className="group relative w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex items-center justify-center p-4 tech-card cursor-pointer transition-colors"
          >
            <motion.div
              className="absolute inset-0 rounded-2xl bg-blue-500/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ 
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.12
              }}
            />

            <div className="relative z-10 w-full h-full">
              <Image 
                src={tech.icon} 
                alt={tech.name} 
                fill
                className="object-contain" 
              />
            </div>
            
            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[10px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 font-bold uppercase tracking-widest shadow-lg flex items-center gap-1.5">
              <span>{tech.name}</span>
              <span className="text-[9px] opacity-70">({tech.level})</span>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 dark:bg-white rotate-45"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
