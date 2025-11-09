import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import dummyProjects from "../database/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  // ✅ Get all unique technologies (since now it's an array)
  const allTechnologies = Array.from(
    new Set(dummyProjects.flatMap((project) => project.technologies))
  );

  // ✅ Filter logic (AND condition)
  const filteredProjects =
    selectedTechnologies.length > 0
      ? dummyProjects.filter((project) =>
          selectedTechnologies.every((tech) =>
            project.technologies.includes(tech)
          )
        )
      : dummyProjects;

  // ✅ Handle selecting a tech
  const handleTechClick = (tech) => {
    if (selectedTechnologies.includes(tech)) return;
    setSelectedTechnologies([...selectedTechnologies, tech]);
  };

  // ✅ Remove selected tech
  const removeTech = (tech) => {
    setSelectedTechnologies(selectedTechnologies.filter((t) => t !== tech));
  };

  // ✅ Modal logic
  const openModal = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
    setShowModal(true);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  // ✅ Auto-slide images every 3s
  useEffect(() => {
    if (showModal) {
      const interval = setInterval(() => {
        setActiveImageIndex((prev) =>
          prev === selectedProject.images.length - 1 ? 0 : prev + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showModal, selectedProject]);

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center fw-bold text-primary">Projects</h2>

      {/* 🔹 Filter Buttons */}
      <div className="mb-4 d-flex flex-wrap gap-2 justify-content-center">
        <button
          className={`btn btn-sm rounded-pill px-3 py-1 fw-semibold shadow-sm ${
            selectedTechnologies.length === 0
              ? "btn-primary"
              : "btn-outline-primary"
          }`}
          onClick={() => setSelectedTechnologies([])}
        >
          🔄 All
        </button>

        {allTechnologies.map((tech) => (
          <button
            key={tech}
            className={`btn btn-sm rounded-pill px-3 py-1 fw-semibold shadow-sm ${
              selectedTechnologies.includes(tech)
                ? "btn-primary text-white"
                : "btn-outline-primary"
            }`}
            onClick={() => handleTechClick(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* 🔹 Selected Tech Tags */}
      {selectedTechnologies.length > 0 && (
        <div className="mb-4 d-flex flex-wrap gap-2 justify-content-center">
          {selectedTechnologies.map((tech) => (
            <span
              key={tech}
              className="badge bg-primary d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
              style={{ fontSize: "0.9rem" }}
            >
              {tech}
              <button
                type="button"
                className="btn-close btn-close-white btn-sm"
                onClick={() => removeTech(tech)}
                aria-label="Remove"
              ></button>
            </span>
          ))}
        </div>
      )}

      {/* 🔹 Projects List */}
      <div className="row">
        {filteredProjects.map((project) => (
          <div
            className="col-md-4 mb-4 animate__animated animate__fadeInUp"
            key={project.id}
          >
            <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden project-card">
              <img
                src={project.images[0]}
                className="card-img-top"
                alt={project.title}
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-primary fw-semibold">
                  {project.title}
                </h5>
                <p className="card-text text-muted small mb-3">
                  {project.shortDesc}
                </p>
                <button
                  className="btn btn-outline-primary mt-auto rounded-pill fw-semibold"
                  onClick={() => openModal(project)}
                >
                  🔍 Know More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Modal */}
      {selectedProject && (
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          size="xl"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="fw-bold text-primary">
              {selectedProject.title}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="row">
              <div className="col-md-5 mb-4 mb-md-0">
                <div
                  className="position-relative rounded shadow"
                  style={{ width: "100%", height: "320px", overflow: "hidden" }}
                >
                  <img
                    src={selectedProject.images[activeImageIndex]}
                    alt="Slide"
                    className="w-100 h-100"
                    style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                  />
                  <button
                    className="btn btn-dark position-absolute top-50 start-0 translate-middle-y"
                    onClick={handlePrev}
                    style={{ zIndex: 2 }}
                  >
                    &#8592;
                  </button>
                  <button
                    className="btn btn-dark position-absolute top-50 end-0 translate-middle-y"
                    onClick={handleNext}
                    style={{ zIndex: 2 }}
                  >
                    &#8594;
                  </button>
                </div>
              </div>

              <div className="col-md-7">
                <div className="mb-3">
                  <h5 className="text-secondary mb-2">📘 Description</h5>
                  <p>{selectedProject.fullDesc}</p>
                </div>

                <div className="mb-4 d-flex flex-wrap gap-2">
                  <a
                    href={selectedProject.abstractLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary px-4 fw-semibold"
                  >
                    📄 View Abstract
                  </a>
                  <a
                    href={`https://wa.me/${
                      selectedProject.whatsapp
                    }?text=${encodeURIComponent(
                      "Hello, I'm interested in your project!"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success px-4 fw-semibold"
                  >
                    💬 Chat on WhatsApp
                  </a>
                </div>

                <div className="card bg-light border-0 shadow-sm p-3">
                  <div className="row">
                    <div className="col-6 mb-2">
                      <strong>📞 Contact:</strong>
                      <div>{selectedProject.contactNumber}</div>
                    </div>
                    <div className="col-6 mb-2">
                      <strong>📧 Email:</strong>
                      <div>
                        <a href={`mailto:${selectedProject.email}`}>
                          {selectedProject.email}
                        </a>
                      </div>
                    </div>
                    <div className="col-6 mb-2">
                      <strong>🌐 Domain:</strong>
                      <div>{selectedProject.domain}</div>
                    </div>
                    <div className="col-6 mb-2">
                      <strong>⚙️ Technologies:</strong>
                      <div>{selectedProject.technologies.join(", ")}</div>
                    </div>
                    <div className="col-12">
                      <strong>📚 Internship:</strong>{" "}
                      <a
                        href={selectedProject.courseLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Course
                      </a>
                      <div
                        className="text-muted mt-1"
                        style={{ fontSize: "0.9rem" }}
                      >
                        🏅 Internship with certificate available on request.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-muted">
                  <small>
                    📌 For documentation and other details, please contact us
                    through the above contact methods.
                  </small>
                </div>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="outline-secondary"
              onClick={() => setShowModal(false)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Projects;
