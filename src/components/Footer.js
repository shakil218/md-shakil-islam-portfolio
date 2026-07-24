"use client";
import { motion } from "framer-motion";
import { Linkedin, Phone, Github, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 py-12 text-center border-t border-zinc-200 dark:border-zinc-900 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
        <div className="flex gap-6">
          <a 
            href="https://www.linkedin.com/in/md-shakil-islam-sagor/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-gray-400 hover:text-[#a855f7] dark:hover:text-blue-400 hover:border-[#a855f7] dark:hover:border-blue-400 transition-all bg-white dark:bg-zinc-900 shadow-sm"
          >
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
          <a 
            href="https://wa.me/8801763386000" 
            target="_blank" 
            rel="noopener noreferrer"
            title="WhatsApp"
            className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-gray-400 hover:text-[#a855f7] dark:hover:text-blue-400 hover:border-[#a855f7] dark:hover:border-blue-400 transition-all bg-white dark:bg-zinc-900 shadow-sm"
          >
            <Phone size={18} strokeWidth={1.5} />
          </a>
          <a 
            href="https://github.com/shakil218" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-gray-400 hover:text-[#a855f7] dark:hover:text-blue-400 hover:border-[#a855f7] dark:hover:border-blue-400 transition-all bg-white dark:bg-zinc-900 shadow-sm"
          >
            <Github size={18} strokeWidth={1.5} />
          </a>
        </div>
        <p className="text-[10px] text-zinc-500 dark:text-gray-500 font-medium tracking-widest uppercase">
          © {currentYear} Copyright: Md Shakil Islam
        </p>
      </div>

      <a 
        href="#home" 
        className="fixed bottom-8 right-8 w-10 h-10 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg flex items-center justify-center shadow-lg hover:-translate-y-1 transition-transform z-40 group"
      >
        <ArrowUp size={20} className="transition-transform group-hover:-translate-y-0.5" />
      </a>
    </footer>
  );
}
