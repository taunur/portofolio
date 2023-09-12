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
    <header id="header" className="header container-fluid">
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
      <div className="container">
        <div className="row g-0 col-lg-12">
          <div className="col-sm-12 col-md-12 col-lg-4">
            <p className="fsd-text fw-normal">Full-Stack Developer</p>
            <div className="name-text-container">
              <p className="name-text fw-normal">Taufik Nurrahman</p>
            </div>
            <div className="line-height"></div>
            <p className="desc-text mt-3 fw-normal">
              Let me introduce myself, my name is <b>Taufik Nurrahman</b>.
              Usually called <b>Taufik</b>, I am a <b>Full-Stack developer</b>{" "}
              with ability in application planning, application design and
              application development. I like to learn something new in my life,
              especially about UI UX designer, website developer and mobile
              developer.
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
      </div>
    </header>
  );
}

export default Header;
