interface Social {
  label: string;
  link: string;
}

interface Info {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
}

const info: Info = {
  mail: "mail@fadel.dev",
  title: "hi, fadel here.",
  description:
    `I'm a software engineer with over 1 year of programming experience. 
    Currently working with Go and Rust language. 
    Beyond the code, i fine-tune my neovim setup, sharing tech insights through writing, 
  and exploring the limitless possibilities of technology.`,
  socials: [
    {
      label: "GitHub",
      link: "https://github.com/fadelpamungkas",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/fadelpamungkas",
    },
    {
      label: "Medium",
      link: "https://medium.com/@fadelpamungkas",
    },
    {
      label: "Resume",
      link: "/FadelPamungkas.pdf",
    },
  ],
};

export default info;
