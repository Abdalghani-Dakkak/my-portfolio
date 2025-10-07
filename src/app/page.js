import ParticlesBackground from "@/components/ParticlesBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen">
      <ParticlesBackground />
      <Hero />
      <main className="max-w-7xl mx-auto">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </main>
  );
}
