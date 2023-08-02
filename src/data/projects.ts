interface Project {
  title: string;
  description?: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
}

const projects: Project[] = [
  {
    title: "fadel.dev",
    description: "Personal website built with Astro",
    techs: ["Astro"],
    link: "https://github.com/fadelpamungkas/fadel.dev",
  },
  {
    title: "Fulltext Job Search Engine",
    description: "Implementing fulltext search using meilisearch and Go",
    techs: ["Go"],
    link: "https://github.com/fadelpamungkas/fulltext-search.git",
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
