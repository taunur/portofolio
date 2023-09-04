import React from "react";
import MyImg from "../../assets/images/my-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const dataRight = [
  { title: "Years of Experience", value: "1 +" },
  { title: "Complete Project", value: "10 +" },
  { title: "Repositories", value: "60 +" },
];

function Header() {
  return (
    <header id="header" className="header container">
      <div className="row g-0 col-lg-12">
        <div className="col-sm-12 col-md-12 col-lg-4">
          <p className="fsd-text fw-normal">Full-Stack Developer</p>
          <div className="name-text-container">
            <p className="name-text fw-normal">Taufik Nurrahman</p>
          </div>
          <div className="line-height"></div>
          <p className="desc-text mt-3 fw-normal">
            Let me introduce myself, my name is <b>Taufik Nurrahman</b>. Usually
            called <b>Taufik</b>, I am a <b>Full-Stack developer</b> with
            ability in application planning, application design and application
            development. I like to learn something new in my life, especially
            about UI UX designer, website developer and mobile developer.
          </p>
          <div className="mb-3 col">
            <a
              href="CV_Taufik-Nurrahman.pdf"
              target="_blank"
              className="lets-talk"
            >
              Get CV
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                beatFade
                className="ms-2"
              />
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 offset-lg-1 mb-3">
          <img
            className="img-fluid justify-content-center"
            src={MyImg}
            alt="my-img"
          />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-2 offset-lg-1 justify-content-end">
          {dataRight.map((item, index) => (
            <React.Fragment key={index}>
              <p className="header-right fw-normal">{item.title}</p>
              <p className="header-right-bottom fw-semibold">{item.value}</p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
