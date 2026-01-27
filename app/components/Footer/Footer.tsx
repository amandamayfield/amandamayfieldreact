import "./footer.scss";
import { Link } from "react-router";
import { generalLinks } from "~/utils/getGeneralLinks";
import { socialLinks } from "~/utils/getSocialLinks";

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
