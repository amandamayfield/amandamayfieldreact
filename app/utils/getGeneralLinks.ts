type NavLink = {
  name: string;
  link: string;
};

export const generalLinks: readonly NavLink[] = [
  { name: "About", link: "/about" },
  // { name: "Blog", link: "/blog" },
  // { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
] as const;
