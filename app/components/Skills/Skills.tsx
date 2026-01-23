import "./skills.scss";

const skillSet = [
  { name: "HTML5" },
  { name: "CSS" },
  { name: "Sass" },
  { name: "Tailwind" },
  { name: "Javascript" },
  { name: "Typescript" },
  { name: "Vue" },
  { name: "Angular" },
  { name: "React" },
  { name: "PHP" },
  { name: "NodeJS" },
];

export default function Skills() {
  return (
    <div className="skills-contain">
      {skillSet.map((skill) => (
        <div className="skills-pill" key={skill.name}>
          {skill.name}
        </div>
      ))}
    </div>
  );
}
