import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import type { ReactNode } from "react";

type SocialLink = {
  name: string;
  link: string;
  logo?: ReactNode;
};

export const socialLinks: readonly SocialLink[] = [
  {
    name: "Github",
    link: "https://github.com/amandamayfield",
    logo: <FaGithub className="socials-icon" />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/amandamayfielddev/",
    logo: <FaLinkedin className="socials-icon" />,
  },
  {
    name: "Twitter",
    link: "https://x.com/AmandaMDev",
    logo: <FaTwitter className="socials-icon" />,
  },
  {
    name: "Bluesky",
    link: "https://bsky.app/profile/amandamayfield.bsky.social",
    logo: <FaBluesky className="socials-icon" />,
  },
] as const;
