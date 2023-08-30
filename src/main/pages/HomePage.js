import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Services from "../components/Services";
import Portofolio from "../components/Portofolio";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Slider />
        <Services />
        <Portofolio />
        <Certificates />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default HomePage;
