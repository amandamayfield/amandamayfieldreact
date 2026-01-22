import "./header.scss";
import { Link } from "react-router";
import { useState } from "react";
import NavButton from "../navButton/navButton";
import Logo from "../Logo/Logo";

type NavLink = {
  name: string;
  link: string;
};

const navLinks: readonly NavLink[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Blog", link: "/blog" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
] as const;

export default function Header() {
  return (
    <header className="header">
      {/* <DesktopNav /> */}
      <MobileNav />
    </header>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Logo />
      <NavButton isOpen={isOpen} onClick={toggleMenu} />
      <nav className={`header-nav ${isOpen ? "isOpen" : ""}`}>
        <ul className="header-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                className="header-link"
                aria-label="Click to visit the {link.name} page"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

function DesktopNav() {
  return (
    <nav className="header-nav">
      <ul className="header-links">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.link}
              className="header-link"
              aria-label="Click to visit the {link.name} page"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
