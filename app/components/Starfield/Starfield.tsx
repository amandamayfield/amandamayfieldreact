import "./starfield.scss";
import StarfieldTitle from "../StarfieldTitle/StarfieldTitle";

export default function Starfield() {
  return (
    <div className="starfield-contain">
      <div className="starfield">
        <span className="starfield__shoot"></span>
        {/* <span className="starfield__shoot"></span>
        <span className="starfield__shoot"></span> */}
        <div className="starfield__stars"></div>
        <div className="starfield__stars2"></div>
        <div className="starfield__stars3"></div>
        <StarfieldTitle />
      </div>
    </div>
  );
}
