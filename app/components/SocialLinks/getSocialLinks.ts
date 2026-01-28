import { FaGithub } from "react-icons/fa";

type SocialLink = {
  name: string;
  link: string;
  logo?: any;
};

export const socialLinks: readonly SocialLink[] = [
  { name: "Github", link: "https://github.com/amandamayfield" },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/amandamayfielddev/",
  },
  { name: "Twitter", link: "https://x.com/AmandaMDev" },
  {
    name: "Bluesky",
    link: "https://bsky.app/profile/amandamayfield.bsky.social",
  },
] as const;
