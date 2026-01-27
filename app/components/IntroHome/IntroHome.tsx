import "./introHome.scss";
import { Link } from "react-router";
import { motion } from "motion/react";

export default function IntroHome() {
  return (
    <section className="intro-home__contain">
      <div className="intro-home__content">
        <motion.div
          className="intro-home__bento"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1 },
          }}
          viewport={{ once: true, amount: 0.5 }}
        ></motion.div>
        <motion.div
          className="intro-home__bento"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1 },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p>
            I am a Senior Frontend Software Engineer with over 7 years
            of experience building high-traffic platforms for Fortune
            500 and enterprise companies.
          </p>
          <p>
            In 2018, I transitioned from a career as a patternmaker in
            the Fashion industry to working in the Tech industry. Both
            my careers have taught me to strive for precision,
            usability, and quality in my designs.
          </p>
        </motion.div>
        <motion.div
          className="intro-home__bento"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
          viewport={{ once: true, amount: 0.5 }}
          whileTap={{ scale: 0.9 }}
          whileHover={{
            scale: 0.97,
            transition: { duration: 0.3 },
          }}
        >
          <Link
            to="/about"
            aria-label="Click to visit the About page"
          >
            Learn more about me
          </Link>
        </motion.div>
        <motion.div
          className="intro-home__bento"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
          viewport={{ once: true, amount: 0.5 }}
        ></motion.div>
        <motion.div
          className="intro-home__bento polka-dot"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
          viewport={{ once: true, amount: 0.5 }}
        ></motion.div>
      </div>
    </section>
  );
}
