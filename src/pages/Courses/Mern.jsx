import React, { useState } from "react";
import mern_course from "../../database/courses/mern";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

const MernRoadmap = () => {
  const [activeWeek, setActiveWeek] = useState(null);

  const toggleWeek = (weekId) => {
    setActiveWeek(activeWeek === weekId ? null : weekId);
  };

  return (
    <div
      className="container py-5"
      style={{
        // background:
        //   "linear-gradient(135deg, #f0f4ff 0%, #e3f2fd 25%, #e8eaf6 100%)",
        borderRadius: "20px",
        boxShadow: "0 0 30px rgba(0,0,0,0.05)",
      }}
    >
      <h2 className="text-center mb-5 fw-bold text-primary">
        🚀 MERN Stack Learning Roadmap
      </h2>

      <div className="timeline position-relative">
        {mern_course.map((week, index) => (
          <div
            key={week.id}
            className="mb-5 position-relative animate__animated animate__fadeInUp"
            style={{ transition: "all 0.3s ease-in-out" }}
          >
            {/* Timeline Line */}
            {index !== mern_course.length - 1 && (
              <div
                className="position-absolute bg-primary"
                style={{
                  width: "3px",
                  height: "100%",
                  left: "28px",
                  top: "40px",
                  opacity: "0.3",
                  zIndex: "-1",
                }}
              ></div>
            )}

            {/* Week Header */}
            <div
              className="d-flex align-items-center p-3 rounded-3 shadow-sm"
              style={{
                cursor: "pointer",
                background:
                  activeWeek === week.id
                    ? "linear-gradient(90deg, #1976d2, #42a5f5)"
                    : "#ffffff",
                color: activeWeek === week.id ? "white" : "#212529",
                transition: "0.3s ease",
              }}
              onClick={() => toggleWeek(week.id)}
            >
              <div
                className="rounded-circle d-flex align-items-center justify-content-center me-3"
                style={{
                  width: "45px",
                  height: "45px",
                  background: activeWeek === week.id ? "#fff" : "#1976d2",
                  color: activeWeek === week.id ? "#1976d2" : "#fff",
                  fontWeight: "bold",
                  boxShadow:
                    "0 0 10px rgba(25,118,210,0.3), inset 0 0 5px rgba(255,255,255,0.5)",
                }}
              >
                {week.week}
              </div>
              <h5 className="mb-0 fw-semibold">
                Week {week.week}: {week.title}
              </h5>
            </div>

            {/* Week Details */}
            <div
              className={`overflow-hidden transition-all ${
                activeWeek === week.id
                  ? "mt-3 animate__animated animate__fadeIn"
                  : "collapse"
              }`}
            >
              {activeWeek === week.id && (
                <div
                  className="card mt-3 border-0 shadow-sm rounded-4"
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="card-body">
                    <p className="text-muted">{week.description}</p>

                    {/* Videos */}
                    <h6 className="fw-bold text-primary mt-3">🎥 Videos</h6>
                    <div className="row">
                      {week.videos.map((video, i) => (
                        <div
                          key={i}
                          className="col-md-6 mb-3"
                          style={{
                            transition: "0.3s",
                            transform: "scale(1)",
                          }}
                        >
                          <div className="card border-0 shadow-sm hover-glow">
                            <div className="ratio ratio-16x9">
                              <iframe
                                src={video.url}
                                title={video.title}
                                allowFullScreen
                                style={{ borderRadius: "10px" }}
                              ></iframe>
                            </div>
                            <div className="card-body">
                              <h6>{video.title}</h6>
                              <p className="small text-muted">
                                {video.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Notes */}
                    <h6 className="fw-bold text-success mt-4">📝 Notes</h6>
                    <ul className="list-group mb-3 shadow-sm">
                      {week.notes.map((note, i) => (
                        <li
                          key={i}
                          className="list-group-item d-flex justify-content-between align-items-center border-0"
                          style={{ background: "rgba(240,248,255,0.7)" }}
                        >
                          <div>
                            <strong>{note.title}</strong>
                            <p className="mb-0 small text-muted">
                              {note.description}
                            </p>
                          </div>
                          <a
                            href={note.url}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-sm btn-outline-success"
                          >
                            View
                          </a>
                        </li>
                      ))}
                    </ul>

                    {/* Tasks */}
                    <h6 className="fw-bold text-warning mt-4">🧩 Tasks</h6>
                    <ul className="list-group mb-3 shadow-sm">
                      {week.tasks.map((task, i) => (
                        <li
                          key={i}
                          className="list-group-item d-flex justify-content-between align-items-center border-0"
                          style={{ background: "rgba(255,249,196,0.7)" }}
                        >
                          <div>
                            <strong>{task.title}</strong>
                            <p className="mb-0 small text-muted">
                              {task.description}
                            </p>
                          </div>
                          <a
                            href={task.url}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-sm btn-outline-warning"
                          >
                            Open
                          </a>
                        </li>
                      ))}
                    </ul>

                    {/* Files */}
                    <h6 className="fw-bold text-info mt-4">📦 Files</h6>
                    <ul className="list-group shadow-sm">
                      {week.files.map((file, i) => (
                        <li
                          key={i}
                          className="list-group-item d-flex justify-content-between align-items-center border-0"
                          style={{ background: "rgba(227,242,253,0.7)" }}
                        >
                          <div>
                            <strong>{file.title}</strong>
                            <p className="mb-0 small text-muted">
                              {file.description}
                            </p>
                          </div>
                          <a
                            href={file.url}
                            download
                            className="btn btn-sm btn-outline-info"
                          >
                            Download
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .hover-glow:hover {
          transform: scale(1.02);
          box-shadow: 0 0 20px rgba(33,150,243,0.2);
        }
        .transition-all {
          transition: all 0.4s ease;
        }
      `}</style>
    </div>
  );
};

export default MernRoadmap;
