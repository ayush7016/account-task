import profile from "./elements/profile.png";
import badge from "./elements/badge.png";
import download from "./elements/download.png";
import certificate from "./elements/certificate.png";
import pen from "./elements/pen.png";

import "./App.css";

function App() {
  return (
    <div className="">
      <header className="">
        <nav className="navbar navbar-expand-lg navbar-light navbar-bg rounded-bottom" style={{paddingLeft: '60px', paddingRight: '60px'}}>
          <div className="container-fluid d-flex justify-content-around">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-around"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <a
                  className="brand-name text-decoration-none"
                  aria-current="page"
                  href="#"
                >
                  CodesandBots
                </a>
              </div>
              <form className="d-flex position-relative">
                <input
                  className="form-control me-2 nav-search border-0"
                  type="search"
                  placeholder="What you want to learn today?"
                  aria-label="Search"
                />
                <i class="fas fa-search position-absolute search"></i>
              </form>
              <div className="navbar-nav">
                <a className="nav-clicks" aria-current="page" href="#">
                  Home
                </a>
              </div>
              <div className="navbar-nav d-flex justify-content-around">
                <a className="nav-clicks" aria-current="page" href="#">
                  My Classes
                </a>
              </div>
              <div className="navbar-nav d-flex justify-content-around">
                <a
                  className="nav-link rounded-circle"
                  aria-current="page"
                  href="#"
                >
                  <img className="rounded-circle" src={profile} />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="container-fluid mb-5 mt-4 bg-custom">
        <div className="container bg-white second-div">
          <div className="container div-pad">
            <div className="d-flex align-middle bd-highlight mt-6 mb-3">
              <div className="me-auto p-2 bd-highlight account mt-5">
                Account
              </div>
              <div className="p-2 bd-highlight">
                <img className="rounded-circle mt-5" src={profile} />
                <img
                  className="mt-5"
                  src={pen}
                  style={{ marginLeft: "10px" }}
                />
                <h5>Name</h5>
              </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light sub-navbar nav-pad">
              <div className="container-fluid d-flex justify-content-around">
                <div className="navbar-subnav d-flex justify-content-around">
                <img className="badges" src={badge} />
                  <a
                    className="sub-navbar-clicks active text-decoration-none"
                    aria-current="page"
                    href="#"
                  >
                    
                    Robotics
                  </a>
                </div>
                <div className="navbar-subnav d-flex justify-content-around">
                  <img className="badges" src={badge} />
                  <a
                    className=" sub-navbar-clicks"
                    aria-current="page"
                    href="#"
                  >
                    Coding
                  </a>
                </div>
                <div className="navbar-subnav d-flex justify-content-around">
                  <img className="badges" src={badge} />
                  <a
                    className=" sub-navbar-clicks"
                    aria-current="page"
                    href="#"
                  >
                    IoT
                  </a>
                </div>
                <div className="navbar-subnav d-flex justify-content-around">
                  <img className="badges" src={badge} />
                  <a
                    className=" sub-navbar-clicks"
                    aria-current="page"
                    href="#"
                  >
                    Vedic Maths
                  </a>
                </div>
              </div>
            </nav>

            <div className="d-flex justify-content-start mt-5">
              <p className="download-text">You can downlod from here</p>
              <img className="download-icon" src={download} />
            </div>
            <div className="d-flex justify-content-start mt-2 ">
              <img className="img-fluid" src={certificate} />
            </div>
          </div>

          <div className="horizontal-line mb-4"></div>

          <div className="container div-pad">
            <div className="align-middle mt-5 mb-3">
              <form>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label
                      for="inputEmail4"
                      className="d-flex justify-content-left"
                    >
                      Children name
                    </label>
                    <input
                      type="email"
                      className="form-inputs border-0 form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label
                      for="inputPassword4"
                      className="d-flex justify-content-left"
                    >
                      Email address
                    </label>
                    <input
                      type="password"
                      className="form-inputs border-0 form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="form-group col-md-6">
                    <label
                      for="inputEmail4"
                      className="d-flex justify-content-left"
                    >
                      Parents name
                    </label>
                    <input
                      type="email"
                      className="form-inputs border-0 form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label
                      for="inputPassword4"
                      className="d-flex justify-content-left"
                    >
                      Mobile No.
                    </label>
                    <input
                      type="password"
                      className="form-inputs border-0 form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="form-group col-md-6">
                    <label
                      for="inputEmail4"
                      className="d-flex justify-content-left"
                    >
                      Course
                    </label>
                    <input
                      type="email"
                      className="form-inputs border-0 form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label
                      for="inputPassword4"
                      className="d-flex justify-content-left"
                    >
                      Class
                    </label>
                    <input
                      type="password"
                      className="form-inputs border-0 form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="form-group col-md-6">
                    <button
                      type="button"
                      class="btn button-color text-white btn-lg d-flex justify-content-center"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="container div-pad">
            <div className="horizontal-line mb-4"></div>
            <div className="align-middle mt-5 mb-3">
              <form>
                <div className="row">
                  <div className="form-group col-md-4">
                    <label
                      for="inputEmail4"
                      className="d-flex justify-content-left"
                    >
                      Current Password
                    </label>
                    <input
                      type="email"
                      className="form-inputs border-0 form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label
                      for="inputPassword4"
                      className="d-flex justify-content-left"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-inputs border-0 form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label
                      for="inputPassword4"
                      className="d-flex justify-content-left"
                    >
                      Re-type Password
                    </label>
                    <input
                      type="password"
                      className="form-inputs border-0 form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="row mt-4 mb-4">
                  <div className="form-group col-md-4">
                    <button
                      type="button"
                      class="btn text-white btn-lg d-flex justify-content-center"
                      style={{ backgroundColor: "#1B2C87", fontSize: 20 }}
                    >
                      Change Password
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
