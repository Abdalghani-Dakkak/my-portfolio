"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { projects } from "@/constants/projects";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const cardVariants = {
    hidden: { y: 50 },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        My Work
      </h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div
              className="
                group h-full bg-white/5 p-4 rounded-lg border border-white/10
                backdrop-blur-xs transition-all duration-300
              hover:border-teal-400/50 hover:bg-white/10
              "
            >
              <div className="relative h-52 w-full rounded-md overflow-hidden mb-4">
                <Image
                  src={project.image}
                  layout="fill"
                  objectFit="cover"
                  alt={project.title}
                  className="group-hover:scale-105 transition-transform duration-300"
                  suppressHydrationWarning
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-teal-400/20 text-teal-300 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    Live Demo <FaExternalLinkAlt className="inline" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    Source Code <FaGithub className="inline" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
export default Projects;
