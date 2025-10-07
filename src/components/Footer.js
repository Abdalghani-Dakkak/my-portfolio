"use client";

import { motion } from "framer-motion";

import { links } from "@/constants/links";

import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="w-full"
    >
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="flex flex-col items-center gap-10">
          <motion.a
            variants={itemVariants}
            href="#"
            className="
              text-3xl font-bold bg-clip-text text-transparent 
              bg-gradient-to-r from-teal-400 to-purple-600
            "
          >
            AD.
          </motion.a>

          <motion.div variants={itemVariants}>
            <a
              href="/files/abdalghani-dakkak-cv.pdf"
              download
              className="
              inline-flex items-center gap-2
              border border-teal-400/50 text-teal-300
              px-6 py-2 rounded-full
              transition-all duration-300 ease-in-out
              hover:bg-teal-400/10 hover:border-teal-400 hover:text-white
            "
            >
              <FaDownload />
              <span>Download Resume</span>
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-gray-300"
          >
            <a
              href="tel:+963992528376"
              className="flex items-center gap-2 hover:text-teal-300 transition-colors"
            >
              <FaPhone />
              <span>+963 992 528 376</span>
            </a>
            <a
              href="mailto:abdalghanidakkak@gmail.com"
              className="flex items-center gap-2 hover:text-teal-300 transition-colors"
            >
              <FaEnvelope />
              <span>abdalghanidakkak@gmail.com</span>
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-8">
            <a
              href="https://github.com/Abdalghani-Dakkak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/abdalghani-dakkak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://t.me/Abdalghanidakkak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTelegram size={28} />
            </a>
            <a
              href="https://wa.me/963992528376"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaWhatsapp size={28} />
            </a>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm text-center text-gray-500 mt-6"
          >
            &copy; {new Date().getFullYear()} Abdalghani Dakkak.
            <br className="sm:hidden" />
            <span> All rights reserved.</span>
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
