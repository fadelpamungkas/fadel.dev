type Project = {
  title: string;
  description?: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Fulltext Search Engine",
    description: "A simple fulltext search engine using Go",
    techs: ["Go"],
    link: "https://github.com/fadelpamungkas/snapwork-api",
  },
  {
    title: "Newsletter Service",
    description: "A simple newsletter service using Rust",
    techs: ["Rust"],
    link: "https://github.com/fadelpamungkas/newsletter-service",
  },
  {
    title: "Chip4 Editor",
    description: "A simple chip8 emulator using Rust",
    techs: ["Rust"],
    link: "https://github.com/fadelpamungkas/chip4editor",
  },
  {
    title: "Snapwork",
    description: "A simple job portal using Go",
    techs: ["Go"],
    link: "https://github.com/fadelpamungkas/snapwork-api",
  },
  {
    title: "Wallet Engine",
    description: "A simple wallet engine using Go",
    techs: ["Go"],
    link: "https://github.com/fadelpamungkas/engine",
  },
  // {
  //   title: "Portfolio / Template",
  //   techs: ["Astro"],
  //   link: "/",
  //   isComingSoon: true,
  // },
];

export default projects;
