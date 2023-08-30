import React from "react";
import imgContact from "../../assets/images/img-contact.png";

function Contact() {
  return (
    <section id="contact" className="contact container-fluid">
      <svg
        className="left2"
        xmlns="http://www.w3.org/2000/svg"
        width="485"
        height="662"
        viewBox="0 0 485 662"
        fill="none"
      >
        <g filter="url(#filter0_f_16_2150)">
          <path
            d="M107.5 179C117.5 113 6.3334 116.5 -50.4999 126.5C-58.8333 330.333 -70.4999 754 -50.4999 818C-25.4999 898 288 730.5 348 705.5C408 680.5 285.5 582.5 315.5 542.5C345.5 502.5 152.5 344.5 180 276.5C207.5 208.5 95.0001 261.5 107.5 179Z"
            fill="#2F45BC"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_16_2150"
            x="-181.543"
            y="0.950684"
            width="666.324"
            height="958.52"
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
              result="effect1_foregroundBlur_16_2150"
            />
          </filter>
        </defs>
      </svg>
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-6">
            <h1 className="title-contact">
              Want to make awesome and impactful Product?
            </h1>
            <a href="https://wa.me/6281355538777" className="contact-me">
              <span className="span-underline">Contact Me</span>
              <i className="fa-solid fa-angles-right fa-beat-fade mx-2"></i>
            </a>
          </div>

          <div className="col-lg-6 z-2">
            <img
              className="img-fluid img-contact"
              src={imgContact}
              alt="img-contact"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
