"use client";

// import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

import { experience } from "@/constants/experience";

const ExperienceCard = ({ role, company, location, date, description }) => (
  <div
    className="
      p-6 rounded-lg border border-white/10 
      bg-white/5 backdrop-blur-sm transition-all 
      duration-300 hover:border-teal-400/50 hover:bg-white/10
    "
  >
    <p className="text-gray-400 text-sm mb-1">{date}</p>
    <h3 className="text-xl font-bold text-white mb-1">{role}</h3>
    <p className="text-md font-semibold text-gray-300 mb-4">
      {company} | {location}
    </p>
    <ul className="list-disc list-inside text-gray-400 space-y-2">
      {description.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </div>
);

const itemVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AnimatedExperienceItem = ({ exp, index }) => {
  // const controls = useAnimation();

  // const [ref, , entry] = useInView({
  //   threshold: [0, 0.05, 0.45],
  //   triggerOnce: false,
  //   rootMargin: "0px 0px -5% 0px",
  // });

  // const timerRef = useRef(null);
  // const ENTER = 0.45;
  // const EXIT = 0.05;
  // const RESET_DELAY_MS = 60;

  // useEffect(() => {
  //   if (!entry) return;

  //   const ratio = entry.intersectionRatio;

  //   if (ratio >= ENTER) {
  //     clearTimeout(timerRef.current);
  //     controls.stop();
  //     controls.set("hidden");
  //     requestAnimationFrame(() => controls.start("visible"));
  //     return;
  //   }

  //   if (ratio <= EXIT) {
  //     clearTimeout(timerRef.current);
  //     timerRef.current = setTimeout(() => {
  //       controls.stop();
  //       controls.set("hidden");
  //     }, RESET_DELAY_MS);
  //     return;
  //   }
  // }, [entry, controls]);

  // useEffect(() => {
  //   return () => clearTimeout(timerRef.current);
  // }, []);

  return (
    <motion.div
      // ref={ref}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      // animate={controls}
      viewport={{ once: true, amount: 0.3 }}
      className="relative pl-8 md:pl-0 md:flex md:items-center"
    >
      <div
        className={`hidden md:block md:w-1/2 ${
          index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:order-2"
        }`}
      />
      <div className="absolute left-[6px] top-8 w-3 h-3 rounded-full bg-teal-400 border-2 border-slate-900 z-10 md:left-1/2 md:-translate-x-1/2" />

      <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
        <ExperienceCard {...exp} />
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Work Experience
        </h2>

        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-600 md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {experience.map((exp, index) => (
              <AnimatedExperienceItem exp={exp} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
