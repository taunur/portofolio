import React from "react";
import PortfolioItem from "../helpers/PortfolioItem";
import portfolioItems from "../data/DataPorto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Portofolio() {
  return (
    <section id="portofolio" className="my-portofolio container-fluid">
      {/* bg Right */}
      <svg
        className="right2"
        xmlns="http://www.w3.org/2000/svg"
        width="1019"
        height="1617"
        viewBox="0 0 1019 1617"
        fill="none"
      >
        <g filter="url(#filter0_f_16_2152)">
          <path
            d="M698.049 694.483C887.978 701.265 1013.29 314.32 1052.21 120L1152 1351.78C1061.34 1239.62 602.823 1463.94 438.461 1493.93C274.099 1523.93 188.005 1325.7 131.913 1252.01C75.8217 1178.33 231.052 1057.69 321.712 958.576C412.372 859.46 460.637 686.006 698.049 694.483Z"
            fill="url(#paint0_linear_16_2152)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_16_2152"
            x="0"
            y="0"
            width="1272"
            height="1617"
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
              result="effect1_foregroundBlur_16_2152"
            />
          </filter>
          <linearGradient
            id="paint0_linear_16_2152"
            x1="1066.56"
            y1="353.445"
            x2="11.4956"
            y2="1428.97"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8B3D4C" />
            <stop offset="1" stopColor="#4F349F" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="container">
        <div className="row g-0 align-items-center mb-3">
          <h1 className="title-portofolio col">My Portofolio</h1>
          <Link
            to="/detail"
            onClick={() => {
              window.location.href = "/detail";
            }}
            className="see-all fw-normal col text-end"
          >
            See All
            <FontAwesomeIcon icon={faArrowRight} beatFade className="mx-2" />
          </Link>
        </div>
        <div className="row">
          {portfolioItems.slice(0, 6).map((item) => (
            <PortfolioItem key={item.id} item={item} showAll={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
