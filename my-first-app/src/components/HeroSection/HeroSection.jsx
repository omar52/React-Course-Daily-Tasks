import MainButton from "../Buttons/MainButton";
import "./HeroSection.css";
function HeroSection() {
  return (
    <div className="hero-section container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-7 col-xxl-7">
          <div className="text-content">
            <h2>
              Unveiling the mastery behind every pixel’s life. Tour our digital
              art paradise!
            </h2>
            <div className="buttons">
              <MainButton />
              <MainButton />
            </div>
          </div>
        </div>
        <div className="col-21 col-sm-12 col-md-12 col-lg-6 col-xl-5 col-xxl-5">
          <img className="w-100" src="Hero-Section.jpg" alt="hero-pic" />
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
