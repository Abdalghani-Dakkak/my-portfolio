import { skills } from "@/constants/skills";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          About Me
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
          Hello, I&apos;m Abdalghani Dakkak, a passionate front-end developer
          with a strong commitment to crafting exceptional user experiences on
          the web. With a background rooted in both creativity and technology, I
          bridge the gap between design and functionality, transforming concepts
          into visually appealing and interactive digital solutions.
        </p>

        <h3 className="text-2xl font-bold text-center text-white mb-8">
          Tech Stack
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex gap-2 items-center px-4 py-2 bg-white/5 border border-teal-400/20 rounded-md text-gray-200 select-none backdrop-blur-xs"
            >
              {skill.icon}
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
