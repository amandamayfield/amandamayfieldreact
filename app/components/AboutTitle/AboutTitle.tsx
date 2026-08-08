import "./aboutTitle.scss";
import { getTimeOfDayGreeting } from "~/utils/timeOfDayGreeting";

const words = [
  { word: "From" },
  { word: "Patterns" },
  { word: "to" },
  { word: "Programs" },
];

export default function AboutTitle() {
  const greeting = getTimeOfDayGreeting();

  return (
    <section className="about-title__contain">
      <div className="about-title__text">
        <h2>{greeting}</h2>
        <h2>I'm Amanda Mayfield</h2>
        <p className="about-title__phrase">
          {words.map((w, index) => (
            // <motion.span
            //   key={w.word}
            //   initial={{ opacity: 0, y: 100 }}
            //   whileInView={{
            //     opacity: 1,
            //     y: 0,
            //     transition: {
            //       delay: 0.3 * index,
            //       duration: 2,
            //       type: spring,
            //       bounce: 0.3,
            //     },
            //   }}
            //   viewport={{
            //     once: true,
            //     amount: 0.5,
            //   }}
            // >
            //   {w.word}
            // </motion.span>
            <span>{w.word}</span>
          ))}
        </p>
        {/* <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 2.5 },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Engineering with Intent
        </motion.p> */}
      </div>
      {/* <motion.div className="about-title__image"></motion.div> */}
    </section>
  );
}
