import { Link } from "react-router";
import { generalLinks } from "~/components/GeneralLinks/getGeneralLinks";

interface LinkProps {
  passedClass: string;
}

export default function GeneralLinks({ passedClass }: LinkProps) {
  return (
    <>
      {generalLinks.map((link) => (
        <li key={link.name}>
          <Link
            to={link.link}
            aria-label={`Click to visit the ${link.name} page`}
            className={passedClass}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
}
