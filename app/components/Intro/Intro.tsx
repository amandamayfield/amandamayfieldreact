import "./intro.scss";
import { Link } from "react-router";
import { motion } from "motion/react";
import amandaIntro from "../../assets/intro-amanda.jpg";
import IntroTitle from "../IntroTitle/IntroTitle";

export default function Intro() {
  return (
    <div className="intro-contain">
      <IntroTitle />
      <div className="intro-content">
        <div className="intro-side">
          <div className="intro-img">
            <motion.img
              src={amandaIntro}
              transition={{ duration: 2 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              alt="Photo of Amanda Mayfield smiling, surrounded by cherry blossoms"
            />
          </div>
        </div>
        <div className="intro-side">
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
          <Link
            to="/about"
            className="intro-link"
            aria-label="Click to visit the About page"
          >
            Learn more about me
          </Link>
        </div>
      </div>
    </div>
  );
}
