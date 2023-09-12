import React, { useState, useEffect } from "react";
import LogoTaunur from "../../assets/images/ic-logo.png";
import { handleScroll } from "../helpers/scrollUtils";

function Navbar() {
  const [activeNav, setActiveNav] = useState("home");
  const [navbarFixed, setNavbarFixed] = useState(false);

  useEffect(() => {
    const scrollHandler = handleScroll(setActiveNav, setNavbarFixed);

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [setActiveNav, setNavbarFixed]);

  return (
    <div className={`container-fluid ${navbarFixed ? "fixed-top" : ""}`}>
      <nav
        className={`navbar navbar-expand-lg ${navbarFixed ? "scrolled" : ""}`}
        id="navbar-top"
        data-bs-theme="dark"
      >
        <div className="container">
          <a href="#home" className="navbar-brand ms-0">
            <img src={LogoTaunur} alt="Logo Taunur" />
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li
                className={`nav-item ${activeNav === "home" ? "active" : ""}`}
              >
                <a className="nav-link" href="#header">
                  Home
                </a>
              </li>
              <li
                className={`nav-item ${
                  activeNav === "services" ? "active" : ""
                }`}
              >
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li
                className={`nav-item ${
                  activeNav === "portofolio" ? "active" : ""
                }`}
              >
                <a className="nav-link" href="#portofolio">
                  Portofolio
                </a>
              </li>
              <li
                className={`nav-item ${
                  activeNav === "certificate" ? "active" : ""
                }`}
              >
                <a className="nav-link" href="#certificate">
                  Certificate
                </a>
              </li>
              <li
                className={`nav-item ${
                  activeNav === "contact" ? "active" : ""
                }`}
              >
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
