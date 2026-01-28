import "./skills.scss";
import { motion, animate, useMotionValue } from "motion/react";
import useMeasure from "react-use-measure";
import { useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaVuejs,
  FaAngular,
  FaReact,
  FaPhp,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { SiTypescript, SiMysql } from "react-icons/si";
import type { ReactNode } from "react";

type Skill = {
  name: string;
  logo: ReactNode;
};

const skillSet: readonly Skill[] = [
  {
    logo: <FaHtml5 className="skills-icon"></FaHtml5>,
    name: "HTML5",
  },
  {
    logo: <FaCss3Alt className="skills-icon"></FaCss3Alt>,
    name: "CSS",
  },
  { logo: <FaSass className="skills-icon"></FaSass>, name: "Sass" },
  {
    logo: (
      <RiTailwindCssFill className="skills-icon"></RiTailwindCssFill>
    ),
    name: "Tailwind",
  },
  {
    logo: (
      <RiJavascriptFill className="skills-icon"></RiJavascriptFill>
    ),
    name: "Javascript",
  },
  {
    logo: <SiTypescript className="skills-icon"></SiTypescript>,
    name: "Typescript",
  },
  { logo: <FaVuejs className="skills-icon"></FaVuejs>, name: "Vue" },
  {
    logo: <FaAngular className="skills-icon"></FaAngular>,
    name: "Angular",
  },
  {
    logo: <FaReact className="skills-icon"></FaReact>,
    name: "React",
  },
  { logo: <FaPhp className="skills-icon"></FaPhp>, name: "PHP" },
  {
    logo: <FaNodeJs className="skills-icon"></FaNodeJs>,
    name: "NodeJS",
  },
  {
    logo: <FaPython className="skills-icon"></FaPython>,
    name: "Python",
  },
  {
    logo: <SiMysql className="skills-icon"></SiMysql>,
    name: "MySQL",
  },
] as const;

export default function Skills() {
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    // 2 because of the two arrays, 8 for the current gap of 4
    let finalPostion = -width / 2 - 16;

    controls = animate(xTranslation, [0, finalPostion], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <section className="skills-contain">
      <h3>Technologies used</h3>
      <div className="skills-scroll__contain">
        <motion.div
          className="skills-scroll"
          ref={ref}
          style={{ x: xTranslation }}
        >
          {[...skillSet, ...skillSet].map((skill, index) => (
            <div className="skills-pill" key={skill.name + index}>
              {skill.logo}
              <p>{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
