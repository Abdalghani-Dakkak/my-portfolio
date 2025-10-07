"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center p-4 md:flex-row md:text-left gap-8 md:gap-12"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.2 }}
        className="z-10 flex flex-col items-center md:flex-row md:text-left gap-8 md:gap-12"
      >
        <motion.div
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: { type: "spring", stiffness: 120, damping: 20 },
            },
          }}
          className="relative w-48 h-48 md:w-60 md:h-60 rounded-full p-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 hover:scale-105 transition-transform duration-300"
        >
          <div className="relative w-full h-full bg-slate-900 rounded-full">
            <Image
              src="/profile.jpg"
              alt="Abdalghani Dakkak Profile Photo"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              priority
              suppressHydrationWarning
            />
          </div>
        </motion.div>

        <div>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-5xl font-bold md:text-7xl text-white"
          >
            Abdalghani Dakkak
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-4 text-lg text-gray-300 md:text-2xl"
          >
            Front-End Developer
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
