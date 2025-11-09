import React from "react";

const internships = [
  {
    title: "MERN Stack Internship",
    description:
      "Build powerful web apps using MongoDB, Express.js, React, and Node.js with real-time project experience.",
    duration: "2 Months",
    mode: "Online / Offline",
    image:
      "https://miro.medium.com/v2/resize:fit:768/1*jyvi6rdhEWdbKbybyuht9w.png",
    syllabusLink: "#",
  },
  {
    title: "AI Internship",
    description:
      "Master the basics of Artificial Intelligence, including ML, deep learning, and data processing with Python.",
    duration: "3 Months",
    mode: "Online",
    image:
      "https://www.fujitsu.com/global/imagesgig5/ai-banner-800x450_tcm100-7204059_tcm100-6286607-32.jpg",
    syllabusLink: "#",
  },
  {
    title: "Flutter Internship",
    description:
      "Learn to build beautiful cross-platform mobile applications using Flutter and Dart.",
    duration: "2 Months",
    mode: "Offline",
    image: "https://via.placeholder.com/600x300?text=Flutter+Internship",
    syllabusLink: "#",
  },
  {
    title: "UI/UX Design Internship",
    description:
      "Design modern, user-friendly interfaces and experiences using Figma, Adobe XD, and design principles.",
    duration: "1.5 Months",
    mode: "Online / Offline",
    image: "https://via.placeholder.com/600x300?text=UI%2FUX+Internship",
    syllabusLink: "#",
  },
  {
    title: "Programming & Competitive Coding Internship",
    description:
      "Improve your problem-solving and coding skills with C, C++, Java, Python, DSA, and participate in coding contests.",
    duration: "2 Months",
    mode: "Online / Offline",
    image: "https://via.placeholder.com/600x300?text=Programming+Internship",
    syllabusLink: "#",
  },
];

const Internship = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">Our Internship Programs</h2>

      {/* 🔷 Integrated Programs Highlight */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10">
          <div className="card border-0 shadow-sm bg-light p-4 rounded-4">
            <h4 className="fw-bold mb-3 text-primary text-center">
              🌐 Integrated & Custom Internship Programs
            </h4>
            <p className="text-center">
              We offer **custom mixed internships** combining powerful
              technologies to help you master full-stack and cross-domain
              skills. You can choose combinations such as:
            </p>
            <ul className="small mb-3">
              <li>✅ React + Python Django</li>
              <li>✅ Python Flask + AI + MySQL</li>
              <li>✅ MERN Stack + DevOps</li>
              <li>✅ Flutter + Firebase + ML</li>
              <li>✅ UI/UX + Frontend + Backend Combo</li>
              <li>✅ Your own custom tech stack</li>
            </ul>
            <p className="text-center fw-semibold text-success">
              📩 Contact our team to design your custom internship path based on
              your career goals!
            </p>
            <div className="text-center">
              <a
                href="https://wa.me/919000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-sm"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Search internships..."
          />
        </div>
      </div>

      {/* Individual Internship Cards */}
      <div className="row g-4">
        {internships.map((internship, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="card h-100 border-0 shadow-sm rounded-3 hover-shadow transition">
              <img
                src={internship.image}
                className="card-img-top rounded-top"
                alt={internship.title}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body p-3">
                <h5 className="card-title fw-semibold">{internship.title}</h5>
                <p className="card-text small">{internship.description}</p>
                <p className="mb-1">
                  <strong>Duration:</strong> {internship.duration}
                </p>
                <p className="mb-2">
                  <strong>Mode:</strong> {internship.mode}
                </p>
                <a
                  href={internship.syllabusLink}
                  className="btn btn-sm btn-primary mb-3"
                >
                  View Syllabus
                </a>

                {/* Contact Box */}
                <div className="bg-light p-2 rounded shadow-sm small">
                  <h6 className="fw-bold mb-2">Contact Details</h6>
                  <a
                    href="https://wa.me/919000000000"
                    className="btn btn-success btn-sm mb-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                  <p className="mb-1">
                    <strong>Phone:</strong> +91 90000 00000
                  </p>
                  <p className="mb-1">
                    <strong>Email:</strong> info@vectorux.com
                  </p>
                  <p className="mb-0">
                    <strong>Website:</strong> www.vectorux.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;
