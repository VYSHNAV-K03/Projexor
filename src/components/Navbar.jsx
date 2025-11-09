import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top animate__animated animate__fadeInDown"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="container">
        <a
          className="navbar-brand fw-bold"
          href="/"
          style={{
            color: "#0056b3",
            fontSize: "1.5rem",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          Projexor
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link text-dark fw-semibold"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold" href="/projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold" href="/courses">
                Course
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold" href="/internship">
                Internship
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold" href="#">
                Custom Projects
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link text-dark fw-semibold" href="#">
                Sell Projects
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link text-dark fw-semibold" href="#">
                Collaborations
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
