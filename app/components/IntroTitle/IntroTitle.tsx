import { animate } from "motion";
import "./introTitle.scss";
import { motion } from "motion/react";

const words = [
  { word: "Engineer" },
  { word: "Speaker" },
  { word: "Mentor" },
];

export default function IntroTitle() {
  return (
    <>
      <IntroTitleDesktop />
      <IntroTitleMobile />
    </>
  );
}

function IntroTitleDesktop() {
  return (
    <div className="intro-title__desktop">
      {words.map((w, index) => (
        <motion.h2
          key={w.word}
          className="intro-title__text"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3 * index,
              duration: 1,
            },
          }}
          whileHover={{
            scale: 0.9,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
        >
          {w.word}
        </motion.h2>
      ))}
    </div>
  );
}

function IntroTitleMobile() {
  return (
    <div className="intro-title__mobile">
      {words.map((w) => (
        <motion.h2
          key={w.word}
          className="intro-title__text"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.5,
              ease: "easeOut",
              default: { type: "spring" },
            },
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
        >
          {w.word}
        </motion.h2>
      ))}
    </div>
  );
}
