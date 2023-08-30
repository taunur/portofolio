import React from "react";
import Project1 from "../../assets/images/portofolio/project-1.png";
import Project2 from "../../assets/images/portofolio/project-2.png";
import Project3 from "../../assets/images/portofolio/project-3.png";
import Project4 from "../../assets/images/portofolio/project-4.png";
import Project5 from "../../assets/images/portofolio/project-5.png";
import Project6 from "../../assets/images/portofolio/project-6.png";
import Project7 from "../../assets/images/portofolio/project-7.png";
import Project8 from "../../assets/images/portofolio/project-8.png";
import Project9 from "../../assets/images/portofolio/project-9.png";
import Project10 from "../../assets/images/portofolio/project-10.png";
import Project11 from "../../assets/images/portofolio/project-11.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    id: 1,
    imageSrc: Project1,
    title: "FIL.MI",
    category: "Website Streaming",
    date: "18 Jan. 2019",
  },
  {
    id: 2,
    imageSrc: Project2,
    title: "Travnur",
    category: "Webiste Travel",
    date: "18 Des. 2019",
  },
  {
    id: 3,
    imageSrc: Project3,
    title: "E-Mon",
    category: "Website Monitoring",
    date: "18 Sep. 2020",
  },
  {
    id: 4,
    imageSrc: Project4,
    title: "MU-ON",
    category: "Aplikasi Musik",
    date: "18 Des. 2021",
  },
  {
    id: 5,
    imageSrc: Project5,
    title: "Distro 66",
    category: "Website E-commerce",
    date: "27 Jun. 2022",
  },
  {
    id: 6,
    imageSrc: Project6,
    title: "HKBP",
    category: "Aplikasi Ibadah",
    date: "18 Sep. 2022",
  },
  {
    id: 7,
    imageSrc: Project7,
    title: "DCS Production",
    category: "Aplikasi Monitoring",
    date: "23 Des. 2022",
  },
  {
    id: 8,
    imageSrc: Project8,
    title: "SPK",
    category: "Website SPK",
    date: "10 Jul. 2023",
  },
  {
    id: 9,
    imageSrc: Project9,
    title: "Shamo Web",
    category: "Website E-comerce",
    date: "19 Aug. 2023",
  },
  {
    id: 10,
    imageSrc: Project10,
    title: "Shamo App",
    category: "Aplikasi E-comerce",
    date: "19 Aug. 2023",
  },
  {
    id: 11,
    imageSrc: Project11,
    title: "Hotelio",
    category: "Aplikasi Booking",
    date: "25 Aug. 2023",
  },
];

export default function PortofolioD() {
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
        <div className="row">
          {portfolioItems.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card shadow-sm portofolio-box">
                <Link href={item.imageSrc} data-gallery="portfolioGallery">
                  <div className="portofolio-img">
                    <img
                      src={item.imageSrc}
                      alt={`project-${item.id}`}
                      className="img-fluid"
                    />
                  </div>
                </Link>
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
                        <Link href="#">
                          <FontAwesomeIcon icon={faEye} />
                          <i className="fa-solid fa-eye"></i>
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
