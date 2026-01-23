import "./footer.scss";
import { Link } from "react-router";

type NavLink = {
  name: string;
  link: string;
};

const generalLinks: readonly NavLink[] = [
  { name: "About", link: "/about" },
  // { name: "Blog", link: "/blog" },
  // { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
] as const;

const socialLinks: readonly NavLink[] = [
  { name: "Twitter", link: "https://x.com/AmandaMDev" },
  {
    name: "Bluesky",
    link: "https://bsky.app/profile/amandamayfield.bsky.social",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/amandamayfielddev/",
  },
  { name: "Github", link: "https://github.com/amandamayfield" },
] as const;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <p>
          I'm Amanda Mayfield: Senior Frontend Developer, blogger, and
          speaker. I'd love to connect with you!
        </p>
        <p>&#169; 2026 Amanda Mayfield</p>
      </div>
      <nav className="footer-links">
        <ul>
          {generalLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                aria-label={`Click to visit the ${link.name} page`}
                className="footer-link"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {socialLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                aria-label={`Click to visit my ${link.name} profile`}
                className="footer-link"
                target="_blank"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
