import "./Rocket.scss";

function RocketGraphic() {
  return (
    <div className="rocket-graphic">
      <div className="rocket">
        <div className="rocket-fin__left"></div>
        <div className="rocket-fin__right"></div>
        <div className="rocket-body"></div>
        <div className="rocket-window"></div>
        <div className="rocket-tail"></div>
      </div>
    </div>
  );
}

export default function Rocket() {
  return (
    <div className="rocket-scroll">
      <div className="rocket-scroll__contain">
        <div className="rocket-scroll__bar">
          <RocketGraphic />
        </div>
      </div>
    </div>
  );
}
