import React from "react";
import NavbarN from "../components/NavbarN";
import Footer from "../components/Footer";
import PageErrorMessage from "../components/PageErrorMessage";

export default function NotFoundpage() {
  return (
    <>
      <NavbarN />
      <PageErrorMessage />
      <Footer />
    </>
  );
}
