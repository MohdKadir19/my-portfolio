"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const PageWrapper = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1], // cubic-bezier
        }}
        // className="min-h-screen w-screen fixed top-0 pointer-events-none"
        className="relative h-auto h-screen flex items-center"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 bg-blue-600 origin-right z-50 "
        ></motion.div>
        <div className="z-10 w-full container mx-auto">{children}</div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
