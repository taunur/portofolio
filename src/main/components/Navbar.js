import React, { useState, useEffect } from "react";
import LogoTaunur from "../../assets/images/ic-logo.png";

function Navbar() {
  const [activeNav, setActiveNav] = useState("home");
  const [navbarFixed, setNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const navbar = document.getElementById("navbar-top");
      const navLinks = document.querySelectorAll(".nav-link");

      // Loop through each section and update active link
      document.querySelectorAll(".section").forEach((section) => {
        const sectionTop = section.offsetTop - 70;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute("id");
        const navLink = document.querySelector(
          `a.nav-link[href="#${sectionId}"]`
        );

        if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
          navLinks.forEach((link) => link.classList.remove("active"));
          navLink.classList.add("active");
          setActiveNav(sectionId);
        }
      });

      if (currentPosition > 50) {
        setNavbarFixed(true);
        navbar.classList.add("fixed-top");
        navbar.style.backgroundColor = "rgba(9, 20, 39, 0.80)";
        document.body.style.paddingTop = `${navbar.offsetHeight}px`;
      } else {
        setNavbarFixed(false);
        navbar.classList.remove("fixed-top");
        navbar.style.backgroundColor = "transparent";
        document.body.style.paddingTop = "0";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
