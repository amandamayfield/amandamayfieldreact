import "./header.scss";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import NavButton from "../navButton/navButton";
import { generalLinks } from "../GeneralLinks/getGeneralLinks";
import Logo from "../Logo/Logo";

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

  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(
        document.body
      ).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  function closeNav() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="backdrop" id="backdrop"></div>
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
            {generalLinks.map((link) => (
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
    </>
  );
}

function DesktopNav() {
  // const leftLinks = navLinks.slice(0, 2); // About, Blog
  // const rightLinks = navLinks.slice(2); // Projects, Contact

  const leftLinks = generalLinks.slice(0, 1); // About
  const rightLinks = generalLinks.slice(1); // Contact

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
