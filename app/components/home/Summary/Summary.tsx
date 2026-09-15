import "./Summary.scss";
import headshot from "../../../assets/headshot-square.jpg";

export default function Summary() {
  return (
    <section className="summary-contain">
      <div className="summary-desc">
        <p>
          <span>M</span>y name is Amanda Mayfield. I'm a senior
          software engineer with a love for teaching, speaking,
          mentorship, and accessibility.
        </p>
      </div>
      <div className="summary-img">
        <div className="headshot-border3">
          <div className="headshot-planet3"></div>
          <div className="headshot-border2">
            <div className="headshot-border1">
              <img
                className="summary-headshot"
                src={headshot}
                alt={"headshot of Amanda Mayfield lookin fly"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
