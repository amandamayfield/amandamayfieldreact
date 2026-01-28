import GeneralLinks from "../GeneralLinks/GeneralLinks";
import SocialLinks from "../SocialLinks/SocialLinks";
import "./footer.scss";

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
          <GeneralLinks passedClass="footer-link" />
        </ul>
        <ul>
          <SocialLinks passedClass="footer-link" />
        </ul>
      </nav>
    </footer>
  );
}
