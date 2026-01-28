import { Link } from "react-router";
import { motion } from "motion/react";
import { socialLinks } from "~/components/SocialLinks/getSocialLinks";

interface LinkProps {
  passedClass: string;
}

export default function SocialLinksLogo({ passedClass }: LinkProps) {
  return (
    <>
      {socialLinks.map((link) => (
        <motion.div
          key={link.name}
          className={passedClass}
          whileHover={{
            scale: 0.97,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9, opacity: 0.9 }}
        >
          <Link
            to={link.link}
            aria-label={`Click to visit my ${link.name} profile`}
            target="_blank"
          >
            <span>{link.name}</span>
          </Link>
        </motion.div>
      ))}
    </>
  );
}
