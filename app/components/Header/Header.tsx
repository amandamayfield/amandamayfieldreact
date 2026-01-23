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
  { name: "About", link: "/about" },
  // { name: "Blog", link: "/blog" },
  // { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
] as const;

export default function Header() {
  return (
    <header className="header">
      <DesktopNav />
      <MobileNav />
    </header>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  function closeNav() {
    setIsOpen(false);
  }

  return (
    <div className="mobile-nav">
      <Link
        to="/"
        aria-label="Click to visit the Home page"
        onClick={closeNav}
      >
        <Logo />
      </Link>
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
    </div>
  );
}

function DesktopNav() {
  // const leftLinks = navLinks.slice(0, 2); // About, Blog
  // const rightLinks = navLinks.slice(2); // Projects, Contact

  const leftLinks = navLinks.slice(0, 1); // About
  const rightLinks = navLinks.slice(1); // Contact

  return (
    <nav className="header-nav">
      <ul className="header-links">
        {leftLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.link}
              className="header-link"
              aria-label={`Click to visit the ${link.name} page`}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/" aria-label="Click to visit the Home page">
            <Logo />
          </Link>
        </li>
        {rightLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.link}
              className="header-link"
              aria-label={`Click to visit the ${link.name} page`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
