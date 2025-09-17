import MainButton from "../Buttons/MainButton"
import "./Navbar.css";
function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="logo.svg" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Featured Artwork
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Artists Spotlight
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Resources and Tutorials
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Testimonials
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <MainButton />
            </form>
          </div>
        </div>
      </nav>{" "}
    </div>
  );
}
export default Home;
