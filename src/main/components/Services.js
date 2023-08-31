import React from "react";
import Services1 from "../../assets/images/services1.png";
import Services2 from "../../assets/images/services2.png";
import Services3 from "../../assets/images/services3.png";

function ServiceCard({ imageSrc, title, projectCount }) {
  return (
    <div className="card-service mt-3">
      <div className="row g-0 d-flex align-items-center">
        <div className="col-md-2">
          <img
            src={imageSrc}
            className="img-fluid rounded"
            alt={title}
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div className="col-md-10">
          <div className="card-body-custom px-lg-2">
            <h5 className="card-title">{title}</h5>
            <p className="card-text fw-normal">{projectCount}+ Project</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const serviceData = [
    {
      imageSrc: Services1,
      title: "Website Developer",
      projectCount: 5,
    },
    {
      imageSrc: Services2,
      title: "Mobile App Developer",
      projectCount: 5,
    },
    {
      imageSrc: Services3,
      title: "UI/UX Design",
      projectCount: 5,
    },
  ];

  return (
    <section className="services container">
      <div className="row justify-content-between">
        <div className="col-lg-4">
          <h1 className="title-services fw-normal">My Awesome Service</h1>
          <p className="desc-text fw-normal">
            I can produce responsive websites, creative mobile applications, and
            engaging user interfaces, ensuring holistic and innovative
            technological solutions for clients. With a focus on these three
            aspects, my goal is to deliver an excellent user experience.
          </p>
        </div>
        <div className="col-lg-7 offset-lg-1">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              projectCount={service.projectCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
