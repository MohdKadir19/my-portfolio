"use client";
import React from "react";
import { navLinks } from "./NavLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

const Navbar = ({ containerStyle }) => {
  // get the current URL path inside a client component.
  const pathname = usePathname();
  const reduce = useReducedMotion();

  return (
    <ul className={containerStyle}>
      {navLinks.map((link) => {
        const active = pathname === link.path;
        return (
          <Link
            key={link.path}
            href={link.path}
            className={`relative px-2 py-1 transition-colors ${
              active ? "text-secondary" : "text-white/80 hover:text-white"
            }`}
          >
            <span className="relative">
              {link.name}

              {/* Animated strike-through */}
              {active ? (
                <motion.span
                  layoutId="strike"
                  className="absolute left-0 top-1/2 h-[2px] w-full bg-secondary"
                  style={{ transformOrigin: "left", translateY: "-50%" }}
                  initial={reduce ? false : { scaleX: 0, opacity: 0 }}
                  animate={reduce ? {} : { scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                />
              ) : (
                // keep hover strike for non-active items (nice polish)
                <motion.span
                  className="pointer-events-none absolute left-0 top-1/2 h-[2px] w-full bg-secondary opacity-0"
                  style={{ transformOrigin: "left", translateY: "-50%" }}
                  initial={false}
                  whileHover={reduce ? {} : { scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              )}
            </span>
          </Link>
        );
      })}
    </ul>
  );
};

export default Navbar;
