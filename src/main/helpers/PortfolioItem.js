import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function PortfolioItem({ item, showAll }) {
  return (
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
                <Link to={item.urlLink} target="blank">
                  <FontAwesomeIcon icon={faEye} />
                  <i className="fa-solid fa-eye"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
