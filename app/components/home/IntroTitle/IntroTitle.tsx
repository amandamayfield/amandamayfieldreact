import "./introTitle.scss";

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
    <>
      <IntroTitleDesktop />
      <IntroTitleMobile />
    </>
  );
}

function IntroTitleDesktop() {
  return (
    <div className="intro-title__desktop">
      <div className="intro-title__title">
        <IntroText />
      </div>
    </div>
  );
}

function IntroTitleMobile() {
  return (
    <div className="intro-title__mobile">
      <IntroText />
    </div>
  );
}
