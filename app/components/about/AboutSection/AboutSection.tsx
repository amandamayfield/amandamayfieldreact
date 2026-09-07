import "./AboutSection.scss";

export default function AboutSection() {
  return (
    <div>
      <section className="about-section__contain">
        <div className="about-section__content">
          <h2 className="about-section__title">
            Timeless Aesthetics
          </h2>
          <p className="about-section__desc">
            We believe great design never goes out of style. Each
            project is built on clean lines, thoughtful materials, and
            harmony between form and function.
          </p>
        </div>
        <div className="about-section__img-box">
          <img src={"/images/fashion2.jpg"} alt="" />
        </div>
      </section>

      <section className="about-section__contain">
        <div className="about-section__content">
          <h2 className="about-section__title">
            Timeless Aesthetics
          </h2>
          <p className="about-section__desc">
            We believe great design never goes out of style. Each
            project is built on clean lines, thoughtful materials, and
            harmony between form and function.
          </p>
        </div>
        <div className="about-section__img-box">
          <img src={"/images/fashion3.jpg"} alt="" />
        </div>
      </section>
    </div>
  );
}
