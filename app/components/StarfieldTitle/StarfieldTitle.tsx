import "./starfieldTitle.scss";
import { motion, animate } from "motion/react";

const words = [
  { word: "Engineering" },
  { word: "with" },
  { word: "Intent" },
];

export default function StarfieldTitle() {
  return (
    <div className="starfield__title">
      <h1>Amanda Mayfield</h1>
      <div className="starfield__text">
        {words.map((w, index) => (
          <motion.p
            key={w.word}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                delay: 0.5 * index,
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
    </div>
  );
}
