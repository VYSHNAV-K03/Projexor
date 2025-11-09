import React from "react";

const Custom = () => {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 text-center text-lg-start">
          <h2 className="fw-bold text-primary mb-3">
            Build Your Own Custom Project
          </h2>
          <p className="text-muted mb-4">
            Got a unique idea? We’ll turn it into a working project and deliver
            within <strong>7 days</strong>. Let’s bring your vision to life!
          </p>
          <a
            href="#share-idea"
            className="btn btn-primary btn-lg px-4 fw-semibold"
          >
            🚀 Share Your Idea
          </a>
        </div>
        <div className="col-lg-6 text-center">
          <img
            src="/images/custom.svg"
            alt="Custom Project Illustration"
            className="img-fluid"
            style={{ maxHeight: "300px" }}
          />
        </div>
      </div>

      {/* Instant Contact Card */}
      <div
        className="card bg-light border-0 shadow-sm p-4 mb-5 mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <h5 className="mb-3 fw-bold text-center text-dark">
          📞 Contact Us Instantly
        </h5>
        <div className="d-grid gap-2 mb-3">
          <a
            href="https://wa.me/919000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success fw-semibold"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
        <div className="text-center small">
          <p className="mb-1">
            <strong>Phone:</strong> +91 90000 00000
          </p>
          <p className="mb-1">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@vectorux.com">info@vectorux.com</a>
          </p>
          <p className="mb-0">
            <strong>Website:</strong>{" "}
            <a href="https://www.vectorux.com">www.vectorux.com</a>
          </p>
        </div>
      </div>

      {/* Share Your Idea Form */}
      <div className="row mb-5" id="share-idea">
        <div className="col-lg-8 mx-auto">
          <div className="card border-0 shadow-sm p-4">
            <h5 className="mb-4 fw-semibold text-center text-secondary">
              💡 Share Your Project Idea
            </h5>
            <form>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Project Idea</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Describe your idea, preferred technologies, goals..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary px-4 fw-semibold"
                >
                  🚀 Submit Idea
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="mb-5">
        <h4 className="text-center mb-5 fw-bold text-primary">
          💬 What Our Clients Say
        </h4>
        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Testimonial 1 */}
            <div className="carousel-item active">
              <div
                className="card border-0 shadow-sm p-4 mx-auto"
                style={{ maxWidth: "600px" }}
              >
                <div className="card-body text-center">
                  <i className="bi bi-chat-left-quote-fill text-primary fs-1 mb-3"></i>
                  <p className="card-text fst-italic mb-3">
                    “I shared my idea and got a working project in just 6 days.
                    Super professional!”
                  </p>
                  <h6 className="card-subtitle text-muted">— Arun P.</h6>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="carousel-item">
              <div
                className="card border-0 shadow-sm p-4 mx-auto"
                style={{ maxWidth: "600px" }}
              >
                <div className="card-body text-center">
                  <i className="bi bi-chat-left-quote-fill text-success fs-1 mb-3"></i>
                  <p className="card-text fst-italic mb-3">
                    “Affordable, fast, and exactly what I imagined. Highly
                    recommended!”
                  </p>
                  <h6 className="card-subtitle text-muted">— Divya S.</h6>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="carousel-item">
              <div
                className="card border-0 shadow-sm p-4 mx-auto"
                style={{ maxWidth: "600px" }}
              >
                <div className="card-body text-center">
                  <i className="bi bi-chat-left-quote-fill text-warning fs-1 mb-3"></i>
                  <p className="card-text fst-italic mb-3">
                    “Their team even suggested improvements to my idea.
                    Delivered before deadline!”
                  </p>
                  <h6 className="card-subtitle text-muted">— Ramesh K.</h6>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-4 bg-light rounded shadow-sm">
        <p className="fw-semibold fs-5 text-dark mb-3">
          Looking for ready-made projects instead?
        </p>
        <a href="/projects" className="btn btn-outline-primary btn-lg px-4">
          📁 Browse Ready-made Projects
        </a>
      </div>
      </div>
  );
};

export default Custom;
