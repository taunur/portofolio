import React, { useEffect, useState } from "react";
import LogoTaunur from "../../assets/images/ic-logo.png";
import { Link } from "react-router-dom";

function NavbarN() {
  const [navbarFixed, setNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const navbar = document.getElementById("navbar-top");

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
        className={`navbar ${navbarFixed ? "scrolled" : ""}`}
        id="navbar-top"
        data-bs-theme="dark"
      >
        <div className="container">
          <Link
            to="/"
            onClick={() => {
              window.location.href = "/";
            }}
            className="navbar-brand ms-0"
          >
            <img src={LogoTaunur} alt="Logo Taunur" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavbarN;
