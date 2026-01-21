import "./footer.scss";
import { Link } from "react-router";

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
      <div className="footer-section">
        <div className="footer-links">
          <Link
            to="/"
            aria-label="Click to visit the About page"
            className="footer-link"
          >
            About
          </Link>
          <Link
            to="/"
            aria-label="Click to visit the Contact page"
            className="footer-link"
          >
            Contact
          </Link>
          <Link
            to="/"
            aria-label="Click to visit the Projects page"
            className="footer-link"
          >
            Projects
          </Link>
          <Link
            to="/"
            aria-label="Click to visit the Blog page"
            className="footer-link"
          >
            Blog
          </Link>
        </div>
        <div className="footer-links">
          <Link
            to="/"
            aria-label="Click to visit my Twitter profile"
            className="footer-link"
          >
            Twitter
          </Link>
          <Link
            to="/"
            aria-label="Click to visit my Bluesky profile"
            className="footer-link"
          >
            Bluesky
          </Link>
          <Link
            to="/"
            aria-label="Click to visit my LinkedIn profile"
            className="footer-link"
          >
            Linkedin
          </Link>
          <Link
            to="/"
            aria-label="Click to visit my Github profile"
            className="footer-link"
          >
            Github
          </Link>
        </div>
      </div>
    </footer>
  );
}
