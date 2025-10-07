"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { useActiveSection } from "@/hooks/useActiveSection";
import { links } from "@/constants/links";

import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeSection = useActiveSection(links.map((l) => l.id));

  return (
    <>
      <nav className="hidden md:flex fixed z-50 top-5 left-1/2 -translate-x-1/2 items-center gap-6 px-3 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-lg shadow-lg">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
              activeSection === link.id
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {activeSection === link.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-teal-400/20 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{link.name}</span>
          </a>
        ))}
      </nav>

      <nav className="md:hidden fixed z-50 top-0 left-0 w-full border-b border-white/10 bg-white/5 backdrop-blur-lg">
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="relative"
        >
          <div className="flex items-center justify-between p-4 h-15">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="font-bold text-lg text-white"
            >
              AD.
            </a>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 z-50 text-white"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </motion.button>
          </div>

          <motion.div
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0%)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.5,
                  delayChildren: 0.2,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(0% 50% 100% 50%)",
                transition: { type: "spring", bounce: 0, duration: 0.3 },
              },
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
            className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg"
          >
            <div className="flex flex-col gap-2 px-4 py-4">
              {links.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  variants={{
                    open: { opacity: 1, y: 0, transition: { type: "spring" } },
                    closed: {
                      opacity: 0,
                      y: -10,
                      transition: { duration: 0.2 },
                    },
                  }}
                  className="block text-center py-3 text-lg font-semibold text-gray-300 hover:text-white bg-white/5 rounded-lg"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
