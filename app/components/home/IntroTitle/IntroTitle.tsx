import "./introTitle.scss";
import Rocket from "../Rocket/Rocket";

const words = [
  { word: "Engineer" },
  { word: "Speaker" },
  { word: "Mentor" },
];

const IntroText = () => {
  return words.map((w) => (
    <h2 key={w.word} className="intro-text">
      {w.word}
    </h2>
  ));
};

export default function IntroTitle() {
  return (
    <div className="intro-title__contain">
      <div className="intro-title__title">
        <IntroText />
      </div>
      <Rocket />
    </div>
  );
}
