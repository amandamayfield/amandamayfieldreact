import "./introTitle.scss";

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
      <div className="intro-title__title">
        {words.map((w) => (
          <h2 key={w.word} className="intro-title__text">
            {w.word}
          </h2>
        ))}
      </div>
    </div>
  );
}

function IntroTitleMobile() {
  return (
    <div className="intro-title__mobile">
      {words.map((w) => (
        <h2 key={w.word} className="intro-title__text">
          {w.word}
        </h2>
      ))}
    </div>
  );
}
