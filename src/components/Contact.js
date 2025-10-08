"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 text-center">
      <motion.div
        variants={{
          hidden: { y: 50, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 100,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-300 max-w-md mx-auto mb-8">
          I&apos;m currently open to new opportunities. If you have a project in
          mind or just want to say hello, feel free to reach out.
        </p>
        <a
          href="mailto:abdalghanidakkak@gmail.com"
          className="
            inline-block bg-teal-500 text-white font-bold px-8 py-3
            rounded-full hover:bg-teal-600 transition-all duration-300
          "
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
