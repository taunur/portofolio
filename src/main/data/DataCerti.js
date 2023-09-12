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

certificatesData.sort((a, b) => new Date(b.date) - new Date(a.date));

export default certificatesData;
