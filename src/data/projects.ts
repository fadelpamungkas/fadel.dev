interface Project {
  title: string;
  description?: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
}

const projects: Project[] = [
  {
    title: "Receipt",
    description: "Receipts generator that can be used for any transaction-related documents.",
    techs: ["Go"],
    link: "https://github.com/fadelpamungkas/receipt",
  },
  {
    title: "fadel.dev",
    description: "Personal website built with Astro",
    techs: ["Astro"],
    link: "https://github.com/fadelpamungkas/fadel.dev",
  },
  {
    title: "Fulltext Job Search Engine",
    description: "Fulltext search engine for job search using MeiliSearch",
    techs: ["Go"],
    link: "https://github.com/fadelpamungkas/fulltext-search.git",
  },
  {
// Zero To Production is the ideal starting point for your journey as a Rust backend developer.
// You will learn by doing: you will build a fully functional email newsletter API, starting from scratch.
    title: "Newsletter Service",
    description: "Zero To Production book's implementation to build a fully functional email newsletter API",
    techs: ["Rust"],
    link: "https://github.com/fadelpamungkas/newsletter-service",
  },
  {
    title: "Chip4 Editor",
    description: "Minimalist vim-like command line text editor",
    techs: ["Rust"],
    link: "https://github.com/fadelpamungkas/chip4editor",
  },
  {
    title: "SnapWork",
    description: "Job portal that helps job seekers to find their dream job and help companies to find the best talent.",
    techs: ["Go"],
    link: "https://github.com/fadelpamungkas/snapwork-api",
  },
  {
    title: "Wallet Engine",
    description: "Wallet service that can be used for e-wallet, payment gateway, or any other transaction-related services.",
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
