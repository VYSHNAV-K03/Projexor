import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import Google Fonts dynamically
const loadFonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};
loadFonts();

const Footer = () => {
  return (
    <footer className="footer-custom text-light pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-5 mb-4">
            <h4 className="fw-bold text-white">VECTORUX TECHNOLABS</h4>
            <p className="text-light opacity-75">
              We specialize in software development, tech training, and digital
              services—bringing your ideas to life with innovation and
              precision.
            </p>
            <ul className="list-unstyled small text-light opacity-75">
              <li>
                <i className="bi bi-envelope me-2 text-primary"></i>
                <a href="mailto:mail@vectorux.in" className="footer-link">
                  mail@vectorux.in
                </a>
              </li>
              <li>
                <i className="bi bi-telephone me-2 text-primary"></i>
                <a href="tel:+917025000141" className="footer-link">
                  +91 7025000141
                </a>
              </li>
              <li>
                <i className="bi bi-globe me-2 text-primary"></i>
                <a
                  href="https://www.vectorux.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  www.vectorux.in
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold text-white mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              {[
                { name: "Projects", link: "#section1" },
                { name: "Courses", link: "#section2" },
                { name: "Start Your Idea", link: "#section3" },
                {
                  name: "Privacy Policy",
                  link: "https://vectorux.in/privacy.html",
                },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.link} className="footer-link d-block py-1">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold text-white mb-3">Connect With Us</h6>
            <div className="d-flex gap-3">
              {[
                { icon: "facebook", url: "https://facebook.com" },
                { icon: "instagram", url: "https://instagram.com" },
                { icon: "linkedin", url: "https://linkedin.com" },
                { icon: "youtube", url: "https://youtube.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon"
                >
                  <i className={`bi bi-${social.icon} fs-4`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="text-center text-light small opacity-75">
          © {new Date().getFullYear()} <strong>VECTORUX TECHNOLABS</strong>. All
          Rights Reserved.
        </div>
      </div>

      {/* Custom Footer Styles */}
      <style>{`
        body {
          font-family: 'Poppins', sans-serif;
        }

        .footer-custom {
          background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
          font-family: 'Poppins', sans-serif;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          transition: color 0.3s, transform 0.3s;
        }

        .footer-link:hover {
          color: #0d6efd;
          transform: translateX(5px);
        }

        .footer-icon {
          color: rgba(255, 255, 255, 0.8);
          transition: color 0.3s, transform 0.3s;
        }

        .footer-icon:hover {
          color: #0d6efd;
          transform: scale(1.2);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
