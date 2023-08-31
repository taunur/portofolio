import React from "react";
import Project1 from "../../assets/images/portofolio/project-1.png";
import Project2 from "../../assets/images/portofolio/project-2.png";
import Project3 from "../../assets/images/portofolio/project-3.png";
import Project4 from "../../assets/images/portofolio/project-4.png";
import Project5 from "../../assets/images/portofolio/project-5.png";
import Project6 from "../../assets/images/portofolio/project-6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    id: 1,
    imageSrc: Project1,
    title: "FIL.MI",
    category: "Website Streaming",
    date: "6 Jan. 2021",
    urlLink: "https://github.com/taunur/PlatformStreaming",
  },
  {
    id: 2,
    imageSrc: Project2,
    title: "Jurusan TIf",
    category: "Desktop Publishing",
    date: "21 Apr. 2021",
    urlLink:
      "https://github.com/taunur/Desktop-publishing-application-Jurusan-Teknik-Informatika",
  },
  {
    id: 3,
    imageSrc: Project3,
    title: "3D Animation",
    category: "Desktop Animasi",
    date: "6 Jun. 2021",
    urlLink: "https://github.com/taunur/Grafkom-UAS-Java-3D",
  },
  {
    id: 4,
    imageSrc: Project4,
    title: "E-Mon",
    category: "Website Monitoring",
    date: "18 Jun. 2021",
    urlLink: "https://github.com/taunur/E-MON",
  },
  {
    id: 5,
    imageSrc: Project5,
    title: "Travnur",
    category: "Webiste Travel",
    date: "22 Des. 2021",
    urlLink: "https://github.com/taunur/Travnur",
  },
  {
    id: 6,
    imageSrc: Project6,
    title: "MU-ON",
    category: "Aplikasi Musik",
    date: "18 Des. 2021",
    urlLink: "https://github.com/taunur/Flutter_Mu-On_App",
  },
];

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
          <Link to="/detail" className="see-all fw-normal col text-end">
            See All
            <FontAwesomeIcon icon={faArrowRight} beatFade className="mx-2" />
          </Link>
        </div>
        <div className="row">
          {portfolioItems.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card shadow-sm portofolio-box">
                <a href={item.imageSrc} data-gallery="portfolioGallery">
                  <div className="portofolio-img">
                    <img
                      src={item.imageSrc}
                      alt={`project-${item.id}`}
                      className="img-fluid"
                    />
                  </div>
                </a>
                <div className="portofolio-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="p-title">{item.title}</h2>
                      <div className="p-more">
                        <span className="p-ctegory">{item.category}</span> /
                        <span className="p-date">{item.date}</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="p-like">
                        <Link to={item.urlLink} target="_blank">
                          <FontAwesomeIcon icon={faEye} />
                          <i className="fa-solid fa-eye "></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
