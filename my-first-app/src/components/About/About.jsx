import "./About.css";
const About = () => {
  return (
    <div className="about container">
      <h3 className="title">ABOUT DESIGNFORGE</h3>
      <p>
        Where creativity knows no bounds and digital art takes center stage. At
        DesignForge, we believe in the power of imagination to transform pixels
        into masterpieces, and we're passionate about fostering a vibrant
        community of digital artists, designers, and enthusiasts from around the
        globe.
      </p>
      <div className="community row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
          <div className="upper">
            <img src="artist.svg" alt="artist" />
            <p>Artist</p>
          </div>
          <p className="number">100 +</p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
          <div className="upper">
            <img src="artwork.svg" alt="artist" />
            <p>Network</p>
          </div>
          <p className="number">200</p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
          <div className="upper">
            <img src="new.svg" alt="artist" />
            <p>online exhibition</p>
          </div>
          <p className="number">10</p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
          <div className="upper">
            <img src="rate.svg" alt="artist" />
            <p>Wxperience</p>
          </div>
          <p className="number">2 yrs</p>
        </div>
      </div>
    </div>
  );
};

export default About;
