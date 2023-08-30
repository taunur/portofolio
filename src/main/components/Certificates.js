import React from "react";
import Certificate1 from "../../assets/images/certificates/certificate1.jpg";
import Certificate2 from "../../assets/images/certificates/certificate2.jpg";
import Certificate3 from "../../assets/images/certificates/certificate3.jpg";
import Certificate4 from "../../assets/images/certificates/certificate4.jpg";
import Certificate5 from "../../assets/images/certificates/certificate5.jpg";
import Certificate6 from "../../assets/images/certificates/certificate6.jpg";

const certificatesData = [
  {
    imageSrc: Certificate1,
    title: "Full-Stack website Developer",
  },
  {
    imageSrc: Certificate2,
    title: "Complete UI Design",
  },
  {
    imageSrc: Certificate3,
    title: "Frontend React Development",
  },
  {
    imageSrc: Certificate4,
    title: "Software Engineering",
  },
  {
    imageSrc: Certificate5,
    title: "Full-Stack Laravel Flutter",
  },
  {
    imageSrc: Certificate6,
    title: "Responsive Web Design",
  },
];

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
