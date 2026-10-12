"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const TECH_STACK = [
  { name: "Next.js", dotColor: "bg-white", textClass: "text-zinc-200" },
  { name: "React", dotColor: "bg-cyan-400", textClass: "text-cyan-300" },
  { name: "Node.js", dotColor: "bg-emerald-400", textClass: "text-emerald-300" },
  { name: "MongoDB", dotColor: "bg-green-500", textClass: "text-green-300" },
];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const readyRef = useRef(false);

  useEffect(() => {
    // 1. Detect application and asset readiness
    const checkReadiness = () => {
      if (document.readyState === "complete") {
        readyRef.current = true;
      }
    };

    if (document.readyState === "complete") {
      readyRef.current = true;
    } else {
      window.addEventListener("load", checkReadiness);
    }

    // Check font readiness to prevent layout jumps
    if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
      document.fonts.ready
        .then(() => {
          readyRef.current = true;
        })
        .catch(() => {
          readyRef.current = true;
        });
    }

    // Lock page scroll while the preloader is visible
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 2. Smooth progress curve simulation
    // - Seamlessly runs across ~1600ms on normal loads
    // - Holds at 88% if the app is still loading heavy assets
    // - Accelerates to 100% when readyRef is confirmed
    // - Prevents any flickering while avoiding artificial delays
    const startTime = Date.now();
    const duration = shouldReduceMotion ? 600 : 1600;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const isAppReady = readyRef.current || elapsed >= 3500;

      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        // Calculate expected progress based on time elapsed
        const maxAllowed = isAppReady ? 100 : 88;
        const target = Math.min(maxAllowed, Math.floor((elapsed / duration) * 100));

        // Increment smoothly by at least 1%
        const next = Math.min(100, Math.max(prev + 1, target));

        if (next >= 100) {
          clearInterval(interval);
          // Brief pleasant hold at 100% then initiate fade out
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              document.body.style.overflow = originalOverflow || "unset";
            }, 650);
          }, 260);
          return 100;
        }

        return next;
      });
    }, 25);

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", checkReadiness);
      document.body.style.overflow = originalOverflow || "unset";
    };
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence mode="wait">
      {!isExiting && (
        <motion.div
          key="portfolio-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: shouldReduceMotion ? 1 : 1.02,
            filter: shouldReduceMotion ? "none" : "blur(10px)",
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99990] flex flex-col items-center justify-center bg-[#06080e] text-white overflow-hidden select-none"
          role="status"
          aria-live="polite"
        >
          {/* Near-Black Ambient Navy, Cyan, & Purple Gradients */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-36 -left-36 w-96 h-96 rounded-full bg-cyan-500/12 blur-[120px]" />
            <div className="absolute -bottom-40 -right-36 w-112 h-112 rounded-full bg-purple-600/15 blur-[130px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full bg-blue-600/10 blur-[150px]" />

            {/* Subtle Futuristic Radial Dots Pattern */}
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)`,
                backgroundSize: "28px 28px",
              }}
            />
          </div>

          {/* Delicate Glowing Background Curves */}
          <div className="absolute inset-0 pointer-events-none opacity-45">
            <svg
              className="w-full h-full"
              viewBox="0 0 1440 900"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="curveCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                  <stop offset="35%" stopColor="#06b6d4" stopOpacity="0.4" />
                  <stop offset="75%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="curvePurpleGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                  <stop offset="40%" stopColor="#a855f7" stopOpacity="0.35" />
                  <stop offset="80%" stopColor="#06b6d4" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Curve 1: Upper flowing wave */}
              <motion.path
                d="M -100 220 C 340 70, 720 420, 1540 180"
                stroke="url(#curveCyanGrad)"
                strokeWidth="1.5"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        d: [
                          "M -100 220 C 340 70, 720 420, 1540 180",
                          "M -100 200 C 380 120, 760 380, 1540 210",
                          "M -100 220 C 340 70, 720 420, 1540 180",
                        ],
                      }
                }
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Curve 2: Lower flowing wave */}
              <motion.path
                d="M -100 680 C 420 860, 940 380, 1540 640"
                stroke="url(#curvePurpleGrad)"
                strokeWidth="1.5"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        d: [
                          "M -100 680 C 420 860, 940 380, 1540 640",
                          "M -100 710 C 390 810, 900 430, 1540 610",
                          "M -100 680 C 420 860, 940 380, 1540 640",
                        ],
                      }
                }
                transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Curve 3: Subtle central dashed trajectory */}
              <path
                d="M -100 460 C 480 300, 880 660, 1540 420"
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="1"
                strokeDasharray="4 7"
              />
            </svg>
          </div>

          {/* Central Content */}
          <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-md w-full">
            {/* Glowing Circular Loader with "S" */}
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center mb-8">
              {/* Outer Pulsing Diffuse Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-purple-600/25 blur-2xl animate-pulse pointer-events-none" />

              {/* Rotating Neon Gradient Circular Ring */}
              <motion.svg
                viewBox="0 0 140 140"
                className="absolute inset-0 w-full h-full"
                animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
              >
                <defs>
                  <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="45%" stopColor="#3b82f6" />
                    <stop offset="85%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <filter id="neonBlur" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="glow" />
                    <feMerge>
                      <feMergeNode in="glow" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Base circular path */}
                <circle
                  cx="70"
                  cy="70"
                  r="58"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.07)"
                  strokeWidth="3"
                />

                {/* Rotating Glowing Neon Arc */}
                <circle
                  cx="70"
                  cy="70"
                  r="58"
                  fill="none"
                  stroke="url(#neonGradient)"
                  strokeWidth="3.5"
                  strokeDasharray="260 105"
                  strokeLinecap="round"
                  filter="url(#neonBlur)"
                />
              </motion.svg>

              {/* Counter-Rotating Inner Accent Ring */}
              <motion.svg
                viewBox="0 0 140 140"
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] pointer-events-none opacity-50"
                animate={shouldReduceMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <circle
                  cx="70"
                  cy="70"
                  r="50"
                  fill="none"
                  stroke="rgba(6, 182, 212, 0.4)"
                  strokeWidth="1.2"
                  strokeDasharray="5 7"
                />
                <circle cx="70" cy="20" r="2.2" fill="#06b6d4" />
                <circle cx="120" cy="70" r="2.2" fill="#a855f7" />
                <circle cx="20" cy="70" r="2.2" fill="#3b82f6" />
              </motion.svg>

              {/* Central Glassmorphic Core Badge with "S" */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative z-10 w-22 h-22 sm:w-24 sm:h-24 rounded-full bg-gradient-to-b from-[#121624] via-[#0c0f18] to-[#06080e] border border-white/15 backdrop-blur-md shadow-[inset_0_1px_15px_rgba(255,255,255,0.08),0_0_25px_rgba(6,182,212,0.15)] flex items-center justify-center group"
              >
                <div className="absolute inset-1 rounded-full border border-cyan-500/20" />

                {/* The Letter "S" */}
                <motion.span
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.05, 1],
                        }
                  }
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  className="font-extrabold text-3xl sm:text-4xl tracking-tighter bg-gradient-to-br from-white via-cyan-100 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(6,182,212,0.7)] select-none pl-0.5"
                >
                  S
                </motion.span>
              </motion.div>
            </div>

            {/* Typography: "Md Shakil Islam" */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="space-y-1.5"
            >
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
                <span className="text-zinc-200">Md</span>
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(6,182,212,0.45)]">
                  Shakil
                </span>
                <span className="text-zinc-200">Islam</span>
              </h1>

              {/* Subtitle */}
              <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.32em] text-cyan-400/90 font-mono">
                FULL STACK DEVELOPER
              </p>

              {/* "Preparing your experience..." Status */}
              <div className="flex items-center justify-center gap-2 pt-2 text-xs text-zinc-400 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                </span>
                <span className="tracking-wide text-zinc-300">
                  Preparing your experience...
                </span>
              </div>
            </motion.div>

            {/* Percentage Indicator & Horizontal Progress Bar */}
            <div className="w-full max-w-xs sm:max-w-sm mt-7 space-y-2.5">
              <div className="flex items-center justify-between text-xs px-1 font-mono">
                <span className="text-zinc-400 uppercase tracking-widest text-[10px] font-bold">
                  System Readiness
                </span>
                <span className="font-extrabold text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                  {Math.round(progress)}%
                </span>
              </div>

              {/* Horizontal Progress Bar Track */}
              <div className="relative w-full h-2 bg-zinc-900/90 rounded-full overflow-hidden p-0.5 border border-white/10 shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]">
                {/* Active Cyan-Blue-Purple Gradient Bar */}
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 relative shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.08 }}
                >
                  {/* Glowing Leading Head Edge */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#38bdf8]" />
                </motion.div>
              </div>
            </div>

            {/* Subtle Technology Row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center justify-center gap-2 sm:gap-2.5 mt-8 flex-wrap"
            >
              {TECH_STACK.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm text-[11px] font-mono tracking-wide shadow-sm"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${tech.dotColor} shadow-xs`} />
                  <span className={`${tech.textClass} font-semibold`}>{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
