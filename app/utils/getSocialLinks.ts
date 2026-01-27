type NavLink = {
  name: string;
  link: string;
};

export const socialLinks: readonly NavLink[] = [
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
