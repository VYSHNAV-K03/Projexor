import React from "react";
import courses from "../database/courses";

const Courses = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold text-primary">Our Courses</h2>
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-lg border-0">
              <img
                src={course.image}
                className="card-img-top"
                alt={course.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-center text-primary">
                  {course.title}
                </h5>
                <p className="text-muted text-center">
                  Duration: <strong>{course.duration}</strong>
                </p>
                <p className="card-text flex-grow-1 text-secondary">
                  {course.description}
                </p>
                <a className="text-center mt-3" href={course.link}>
                  <button className="btn btn-primary px-4">View Course</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
