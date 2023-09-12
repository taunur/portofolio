import React from "react";
import certificatesData from "../data/DataCerti";

function Certificates() {
  return (
    <section id="certificate" className="certificate container-fluid">
      <div className="container">
        <div className="title-contact text-center">
          <h3 className="title-certificate">Certificate</h3>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="line-mf"></div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 justify-content-center">
          {certificatesData.map((certificate, index) => (
            <div className="col" key={index}>
              <div className="shadow-sm cert-box">
                <a
                  href={certificate.imageSrc}
                  data-gallery="certificateGallery"
                >
                  <div className="cert-img">
                    <img
                      src={certificate.imageSrc}
                      className="card-img-top"
                      alt={`certificate${index + 1}`}
                    />
                  </div>
                </a>
                <div className="card-inner">
                  <h5 className="p-title">{certificate.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
