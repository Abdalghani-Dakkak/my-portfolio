import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiExpo,
  SiBootstrap,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiGit,
  SiGithub,
  SiVite,
  SiWebpack,
  SiWordpress,
  SiThreedotjs,
} from "react-icons/si";

import ZustandIcon from "@/icons/zustandIcon";

const iconSize = 20;

export const skills = [
  {
    name: "HTML",
    icon: <SiHtml5 size={iconSize} className="text-orange-500" />,
  },
  { name: "CSS", icon: <SiCss3 size={iconSize} className="text-blue-500" /> },
  {
    name: "JavaScript (ES6+)",
    icon: <SiJavascript size={iconSize} className="text-yellow-400" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={iconSize} className="text-blue-400" />,
  },
  {
    name: "React",
    icon: <SiReact size={iconSize} className="text-cyan-400" />,
  },
  { name: "Next.js", icon: <SiNextdotjs size={iconSize} /> },
  {
    name: "Svelte & Sveltekit",
    icon: <SiSvelte size={iconSize} className="text-orange-600" />,
  },
  {
    name: "React Native",
    icon: <SiReact size={iconSize} className="text-cyan-400" />,
  },
  { name: "Expo", icon: <SiExpo size={iconSize} /> },
  {
    name: "Bootstrap",
    icon: <SiBootstrap size={iconSize} className="text-purple-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={iconSize} className="text-cyan-500" />,
  },
  {
    name: "Redux",
    icon: <SiRedux size={iconSize} className="text-purple-600" />,
  },
  {
    name: "Zustand",
    icon: <ZustandIcon size={iconSize} />,
  },
  {
    name: "React Query",
    icon: <SiReactquery size={iconSize} className="text-red-500" />,
  },
  {
    name: "Three.js",
    icon: <SiThreedotjs size={iconSize} className="text-white" />,
  },
  { name: "Git", icon: <SiGit size={iconSize} className="text-orange-600" /> },
  { name: "Github", icon: <SiGithub size={iconSize} /> },
  {
    name: "Vite",
    icon: <SiVite size={iconSize} className="text-purple-500" />,
  },
  {
    name: "Webpack",
    icon: <SiWebpack size={iconSize} className="text-blue-500" />,
  },
  {
    name: "WordPress",
    icon: <SiWordpress size={iconSize} className="text-blue-600" />,
  },
];
