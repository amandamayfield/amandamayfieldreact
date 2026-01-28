import { Link } from "react-router";
import { socialLinks } from "~/components/SocialLinks/getSocialLinks";

interface LinkProps {
  passedClass: string;
}

export default function SocialLinks({ passedClass }: LinkProps) {
  return (
    <>
      {socialLinks.map((link) => (
        <li key={link.name}>
          <Link
            to={link.link}
            aria-label={`Click to visit my ${link.name} profile`}
            className={passedClass}
            target="_blank"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
}
