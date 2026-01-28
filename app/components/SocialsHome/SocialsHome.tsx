import "./socialsHome.scss";
import { Link } from "react-router";
import { motion } from "motion/react";
import SocialLinksLogo from "../SocialLinks/SocialLinksLogo";

const words = [
  { word: "Build" },
  { word: "Learn" },
  { word: "Chat" },
];

export default function SocialsHome() {
  return (
    <section className="socials-home__contain">
      <div className="socials-home__content">
        <motion.div className="socials-home__bento">
          <h2>Connect</h2>
          <div className="socials-home__text">
            {words.map((w, index) => (
              <motion.p
                key={w.word}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.3 * index,
                    duration: 1,
                  },
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
              >
                {w.word}
              </motion.p>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                delay: 1.6,
                duration: 1,
              },
            }}
          >
            Together
          </motion.p>
        </motion.div>
        <motion.div className="socials-home__bento polka-dot"></motion.div>
        <motion.div
          className="socials-home__bento"
          whileHover={{
            scale: 0.97,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9, opacity: 0.9 }}
        >
          <Link to="/contact">
            <span>Contact me</span>
          </Link>
        </motion.div>
        <SocialLinksLogo passedClass="socials-home__bento" />
        <motion.div className="socials-home__bento polka-dot"></motion.div>
      </div>
    </section>
  );
}
