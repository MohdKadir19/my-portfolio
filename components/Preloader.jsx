"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NameLoader({ name = "Abdul Kadir", duration = 3 }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), duration * 1000);
    return () => clearTimeout(timer);
  }, [duration]);

  const letters = name.split("");

  // Container animation (stagger)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }, // cinematic spacing
    },
    exit: { opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  // Letter animation
  const letter = {
    hidden: { opacity: 0, y: 40, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }, // smooth cubic bezier
    },
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black text-secondary z-[9999]"
          initial={{ opacity: 1 }}
          exit="exit"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-wide flex gap-1"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {letters.map((char, i) => (
              <motion.span key={i} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
