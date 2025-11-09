import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

const Home = () => {
  return (
    <div
      className="bg-body-tertiary"
      style={{ fontFamily: "'Segoe UI', sans-serif" }}
    >
      {/* Hero Section */}
      <section className="bg-light py-5" style={{ minHeight: "80vh" }}>
        <div className="container py-5 d-flex flex-column flex-md-row align-items-center justify-content-between gap-4 h-100">
          <div className="text-center text-md-start">
            <h1 className="display-4 fw-bold text-primary">
              Launch Your Dream Project Today
            </h1>
            <p className="lead text-muted mt-3">
              Find innovative projects, learn with curated courses, or bring
              your own idea to life — we guide you every step.
            </p>
            <a
              href="#section1"
              className="btn btn-primary mt-3 px-4 py-2 shadow rounded-pill"
            >
              Explore Services
            </a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hero"
            className="img-fluid rounded-4 shadow-lg animate__animated animate__fadeInRight"
            style={{ maxWidth: "450px" }}
          />
        </div>
      </section>

      {/* Section 1 - Discover Projects */}
      <section
        id="section1"
        className="py-5 bg-white text-dark"
        style={{ minHeight: "80vh" }}
      >
        <div className="container py-5 d-flex flex-column flex-md-row align-items-center justify-content-between gap-4 h-100">
          <img
            src="https://images.unsplash.com/photo-1493119508027-2b584f234d6c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="projects"
            className="img-fluid rounded-4 shadow-lg animate__animated animate__fadeInLeft"
            style={{ maxWidth: "450px" }}
          />
          <div className="text-center text-md-start">
            <h2 className="fw-bold text-dark">Discover Ready-Made Projects</h2>
            <p className="mt-3 text-muted">
              Explore a wide variety of innovative projects with documentation,
              source code, and implementation support.
            </p>
            <a
              href="/projects"
              className="btn btn-outline-primary mt-3 px-4 py-2 shadow rounded-pill"
            >
              Browse Projects
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 - Explore Courses */}
      <section
        id="section2"
        className="py-5 bg-light text-dark"
        style={{ minHeight: "80vh" }}
      >
        <div className="container py-5 d-flex flex-column-reverse flex-md-row align-items-center justify-content-between gap-4 h-100">
          <div className="text-center text-md-start">
            <h2 className="fw-bold text-dark">Learn with Curated Courses</h2>
            <p className="mt-3 text-muted">
              Pick from handpicked online courses and build the skills needed
              for real-world project development.
            </p>
            <a
              href="/internship"
              className="btn btn-outline-success mt-3 px-4 py-2 shadow rounded-pill"
            >
              Explore Courses
            </a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="courses"
            className="img-fluid rounded-4 shadow-lg animate__animated animate__fadeInRight"
            style={{ maxWidth: "450px" }}
          />
        </div>
      </section>

      {/* Section 3 - Build Your Own */}
      <section
        id="section3"
        className="py-5 bg-secondary text-white"
        style={{ minHeight: "80vh" }}
      >
        <div className="container py-5 d-flex flex-column flex-md-row align-items-center justify-content-between gap-4 h-100">
          <img
            src="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="idea"
            className="img-fluid rounded-4 shadow-lg animate__animated animate__fadeInLeft"
            style={{ maxWidth: "450px" }}
          />
          <div className="text-center text-md-start">
            <h2 className="fw-bold text-white">Create Your Own Project</h2>
            <p className="mt-3 text-light">
              Share your idea and we'll help plan, structure, and develop your
              project from scratch.
            </p>
            <a
              href="#idea"
              className="btn btn-light mt-3 px-4 py-2 shadow rounded-pill"
            >
              Start Your Idea
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
