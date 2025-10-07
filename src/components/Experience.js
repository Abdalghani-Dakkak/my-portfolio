"use client";

import { motion } from "framer-motion";

import { experience } from "@/constants/experience";

const ExperienceCard = ({ role, company, location, date, description }) => {
  return (
    <div
      className="
      p-6 rounded-lg border border-white/10 
      bg-white/5 backdrop-blur-xs 
      transition-all duration-300
      hover:border-teal-400/50 hover:bg-white/10
    "
    >
      <p className="text-gray-400 text-sm mb-1">{date}</p>
      <h3 className="text-xl font-bold text-white mb-1">{role}</h3>
      <p className="text-md font-semibold text-gray-300 mb-4">
        {company} | {location}
      </p>
      <ul className="list-disc list-inside text-gray-400 space-y-2">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 md:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Work Experience
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-teal-400 -translate-x-1/2 my-2" />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="mb-10 relative"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div
                  className={`md:w-1/2 ${index % 2 !== 0 ? "md:order-2" : ""}`}
                />

                <div
                  className="
                    absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[-24px] 
                    w-6 h-6 rounded-full bg-slate-900 border-2 border-teal-400
                    flex items-center justify-center z-10
                  "
                >
                  <div className="w-2 h-2 bg-teal-400 rounded-full" />
                </div>

                <div
                  className={`md:w-1/2 ${
                    index % 2 !== 0 ? "md:pl-8" : "md:pr-8"
                  }`}
                >
                  <ExperienceCard {...exp} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
