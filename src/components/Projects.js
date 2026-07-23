"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initTextReveal } from "../lib/animations";
import { Code, Rocket, X, ExternalLink, AlertTriangle, Lightbulb, ChevronRight, Layers } from "lucide-react";
import Image from "next/image";
import { projectsData } from "../data/projectsData";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [mounted, setMounted] = useState(false);
  const projectsPerPage = 6;

  useEffect(() => {
    setMounted(true);
    initTextReveal(".reveal-portfolio");
  }, []);

  if (!mounted) {
    return (
      <section id="projects" className="py-24 opacity-0">
        <div className="h-96" />
      </section>
    );
  }

  // Filter projects by active category tab
  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "all") return true;
    if (Array.isArray(project.category)) {
      return project.category.includes(activeCategory);
    }
    return project.category === activeCategory;
  });

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage,
  );

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setCurrentPage(1);
  };

  return (
    <section
      id="projects"
      className="px-6 md:px-24 max-w-7xl mx-auto text-center bg-zinc-50/30 dark:bg-zinc-950/20 transition-colors duration-300 py-16"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 reveal-portfolio text-zinc-900 dark:text-white">
        Projects
      </h2>
      <p className="text-zinc-500 dark:text-gray-400 text-sm uppercase tracking-widest font-bold mb-10">
        Recent Projects
      </p>

      {/* Category Toggle Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryChange(cat.id)}
              className={`relative px-6 py-3 rounded-xl text-xs font-bold transition-all duration-300 overflow-hidden cursor-pointer ${
                isActive
                  ? "bg-[linear-gradient(135deg,#4b5964,#2f3a42,#0f1113)] dark:bg-[linear-gradient(135deg,#1e293b,#0f172a,#020617)] text-white shadow-xl shadow-zinc-900/20 border border-white/10"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 shadow-sm"
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 w-[200%] h-[200%] bg-linear-to-br from-white/30 via-white/10 to-transparent -translate-x-full -translate-y-full animate-glow transition-all pointer-events-none" />
              )}
              <span className="relative z-10">{cat.label}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {currentProjects.map((project, idx) => (
            <motion.div
              key={project.id || project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedProject(project)}
              className="group relative h-full cursor-pointer"
            >
              <div className="relative p-0.5 rounded-3xl overflow-hidden h-full group-hover:-translate-y-2.5 transition-all duration-500 shadow-sm hover:shadow-2xl dark:shadow-zinc-950/50">
                <motion.div
                  className="absolute inset-[-150%] group-hover:opacity-100 transition-opacity opacity-0 duration-500 z-0 pointer-events-none"
                  style={{
                    background: `conic-gradient(from 0deg, transparent 0deg, transparent 150deg, #3b82f6 180deg, transparent 210deg, transparent 360deg)`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative bg-white dark:bg-zinc-900 rounded-[22px] overflow-hidden h-full flex flex-col z-10 transition-colors duration-500">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Hover Click Badge */}
                    <div className="absolute top-4 right-4 bg-zinc-900/80 dark:bg-white/90 backdrop-blur-md text-white dark:text-zinc-900 text-[10px] font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1 shadow-md">
                      <span>View Details</span>
                      <ChevronRight size={12} />
                    </div>
                  </div>

                  <div className="p-8 flex flex-col grow text-left">
                    <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white line-clamp-2 group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-gray-400 text-xs leading-relaxed mb-6 font-medium line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                      {project.tags.slice(0, 4).map((tag, i) => (
                        <span
                          key={i}
                          className="text-[9px] bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-gray-300 px-3 py-1 rounded-lg font-bold tracking-wide border border-zinc-200 dark:border-zinc-700 group-hover:bg-[#1e293b] dark:group-hover:bg-zinc-100 group-hover:text-white dark:group-hover:text-zinc-900 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-[9px] bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-gray-400 px-2 py-1 rounded-lg font-bold">
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-3" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        suppressHydrationWarning
                        className="flex items-center justify-center gap-2 py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-gray-300 text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-black dark:hover:bg-zinc-700 hover:text-white transition-all duration-300"
                      >
                        <Code size={14} /> Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        suppressHydrationWarning
                        className="flex items-center justify-center gap-2 py-3 bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
                      >
                        <Rocket size={14} /> Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 flex justify-center items-center gap-3"
        >
          {[...Array(totalPages)].map((_, i) => (
            <motion.button
              key={i + 1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentPage(i + 1)}
              suppressHydrationWarning
              className={`w-12 h-12 flex items-center justify-center rounded-2xl border border-zinc-200 dark:border-zinc-700 font-bold text-sm transition-all ${
                currentPage === i + 1
                  ? "bg-[#1e293b] dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-xl shadow-zinc-900/20"
                  : "bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-500 dark:text-gray-400"
              }`}
            >
              {i + 1}
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-zinc-950/60 dark:bg-black/75 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden text-left z-10 my-8 max-h-[90vh] flex flex-col border border-zinc-100 dark:border-zinc-800"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-zinc-900/60 text-white hover:bg-zinc-900 rounded-full transition-all backdrop-blur-sm border border-white/20 shadow-md"
              >
                <X size={20} />
              </button>

              {/* Modal Image Header */}
              <div className="relative h-64 sm:h-72 w-full shrink-0 overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-8 grow">
                {/* Main Technology Stack Used */}
                <div>
                  <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    <Layers size={16} />
                    <span>Main Technology Stack Used</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 px-3.5 py-1.5 rounded-xl font-bold border border-zinc-200 dark:border-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Brief Description */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-gray-500 mb-2">
                    Brief Description
                  </h4>
                  <p className="text-zinc-600 dark:text-gray-300 text-sm leading-relaxed font-medium">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Action Links */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 px-5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md shadow-blue-600/20"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 px-5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-black dark:hover:bg-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md"
                  >
                    <Code size={16} /> Client Repo
                  </a>
                  {selectedProject.githubServer && (
                    <a
                      href={selectedProject.githubServer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 px-5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md shadow-purple-600/20"
                    >
                      <Code size={16} /> Server Repo
                    </a>
                  )}
                </div>

                {/* Challenges Faced */}
                {selectedProject.challenges && selectedProject.challenges.length > 0 && (
                  <div className="bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 p-5 rounded-2xl">
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider mb-3">
                      <AlertTriangle size={16} />
                      <span>Challenges Faced While Developing</span>
                    </div>
                    <ul className="space-y-2 text-zinc-700 dark:text-gray-300 text-xs font-medium leading-relaxed">
                      {selectedProject.challenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Potential Improvements & Future Plans */}
                {selectedProject.futurePlans && selectedProject.futurePlans.length > 0 && (
                  <div className="bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20 p-5 rounded-2xl">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-3">
                      <Lightbulb size={16} />
                      <span>Potential Improvements & Future Plans</span>
                    </div>
                    <ul className="space-y-2 text-zinc-700 dark:text-gray-300 text-xs font-medium leading-relaxed">
                      {selectedProject.futurePlans.map((fp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-500 font-bold">•</span>
                          <span>{fp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
