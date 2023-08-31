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
      <svg
        className="right"
        xmlns="http://www.w3.org/2000/svg"
        width="1087"
        height="626"
        viewBox="0 0 1087 626"
        fill="none"
      >
        <g filter="url(#filter0_f_16_2154)">
          <path
            d="M228.5 128.5C98.8998 125.7 112.5 42.3333 135.5 1V-51L1152.5 -89C1168.67 90.3333 1191.3 436.6 1152.5 387C1104 325 821.5 442.5 687 497.5C552.5 552.5 611.5 318 604.5 242.5C597.5 167 390.5 132 228.5 128.5Z"
            fill="url(#paint0_linear_16_2154)"
            fillOpacity="0.9"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_16_2154"
            x="0.541016"
            y="-209"
            width="1293.38"
            height="834.771"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="60"
              result="effect1_foregroundBlur_16_2154"
            />
          </filter>
          <linearGradient
            id="paint0_linear_16_2154"
            x1="647.232"
            y1="-89"
            x2="647.232"
            y2="505.771"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2F45BC" />
            <stop offset="1" stopColor="#2FBCBC" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
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
