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
import Project12 from "../../assets/images/portofolio/project-12.png";
import Project13 from "../../assets/images/portofolio/project-13.png";
import Project14 from "../../assets/images/portofolio/project-14.png";
import Project15 from "../../assets/images/portofolio/project-15.png";
import Project16 from "../../assets/images/portofolio/project-16.png";
import Project17 from "../../assets/images/portofolio/project-17.png";

const portfolioItems = [
  {
    id: 1,
    imageSrc: Project1,
    title: "FIL.MI",
    category: "Web Streaming",
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
    category: "Desktop Animation",
    date: "6 Jun. 2021",
    urlLink: "https://github.com/taunur/Grafkom-UAS-Java-3D",
  },
  {
    id: 4,
    imageSrc: Project4,
    title: "E-Mon",
    category: "Web Monitoring",
    date: "18 Jun. 2021",
    urlLink: "https://github.com/taunur/E-MON",
  },
  {
    id: 5,
    imageSrc: Project5,
    title: "MU-ON",
    category: "App Music",
    date: "19 Dec. 2021",
    urlLink: "https://github.com/taunur/Flutter_Mu-On_App",
  },
  {
    id: 6,
    imageSrc: Project6,
    title: "Travnur",
    category: "Web Travel",
    date: "22 Dec. 2021",
    urlLink: "https://github.com/taunur/Travnur",
  },
  {
    id: 7,
    imageSrc: Project7,
    title: "Distro 66",
    category: "Web E-commerce",
    date: "27 Jun. 2022",
    urlLink: "https://github.com/taunur/final-project-distro66",
  },
  {
    id: 8,
    imageSrc: Project8,
    title: "HKBP",
    category: "App Ibadah",
    date: "18 May. 2022",
    urlLink: "https://github.com/taunur/hkbp_app_ui",
  },
  {
    id: 9,
    imageSrc: Project9,
    title: "DCS Production",
    category: "App Monitoring",
    date: "23 Dec. 2022",
    urlLink: "https://github.com/taunur/summary-monitoring-app",
  },
  {
    id: 10,
    imageSrc: Project10,
    title: "SPK",
    category: "Web SPK",
    date: "10 Jul. 2023",
    urlLink: "https://github.com/taunur/SPK-Kombinasi-AHP-dan-SAW-Laravel-9",
  },
  {
    id: 11,
    imageSrc: Project11,
    title: "Shamo Web",
    category: "Web E-comerce",
    date: "17 Aug. 2023",
    urlLink: "https://github.com/taunur/shamo-backend",
  },
  {
    id: 12,
    imageSrc: Project12,
    title: "Shamo App",
    category: "App E-comerce",
    date: "20 Aug. 2023",
    urlLink: "https://github.com/taunur/shamo-app",
  },
  {
    id: 13,
    imageSrc: Project13,
    title: "Hotelio",
    category: "App Booking",
    date: "25 Aug. 2023",
    urlLink: "https://github.com/taunur/hotelio-app",
  },
  {
    id: 14,
    imageSrc: Project14,
    title: "Kalkulator UKC",
    category: "App UKC",
    date: "4 Sep. 2023",
    urlLink: "https://github.com/taunur/ukc-ship-calculator",
  },
  {
    id: 15,
    imageSrc: Project15,
    title: "Money Record",
    category: "App Record",
    date: "27 Sep. 2023",
    urlLink: "https://github.com/taunur/money-record-app",
  },
  {
    id: 16,
    imageSrc: Project16,
    title: "Restaurant",
    category: "App Favorite",
    date: "03 Jan. 2024",
    urlLink: "https://github.com/taunur/restaurant_app",
  },
  {
    id: 17,
    imageSrc: Project17,
    title: "Airplane",
    category: "App Booking",
    date: "12 Jan. 2024",
    urlLink: "https://github.com/taunur/airplane-app",
  },
];

portfolioItems.sort((a, b) => new Date(b.date) - new Date(a.date));

export default portfolioItems;
