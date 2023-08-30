import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PortofolioD from "../components/PortofolioD";
import NavbarD from "../components/NavbarD";

function Detail() {
  return (
    <main>
      <NavbarD />
      <section className="header">
        <h1 className="title-portofolio text-center">My Portofolio</h1>
        <div className="line-mf"></div>

        <PortofolioD />
        <Contact />
        <Footer />
      </section>
    </main>
  );
}

export default Detail;
