import "./header.scss";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="header">
      <Link
        to={"/about"}
        className="header-link"
        aria-label="Click to visit the About page"
      >
        About
      </Link>
      <Link
        to={"/contact"}
        className="header-link"
        aria-label="Click to visit the Contact page"
      >
        Contact
      </Link>
      <Link
        to={"/"}
        className="header-link"
        aria-label="Click to visit the Home page"
      >
        Home
      </Link>
      <Link
        to={"/projects"}
        className="header-link"
        aria-label="Click to visit the Projects page"
      >
        Projects
      </Link>
      <Link
        to={"/blog"}
        className="header-link"
        aria-label="Click to visit the Blog page"
      >
        Blog
      </Link>
    </header>
  );
}
