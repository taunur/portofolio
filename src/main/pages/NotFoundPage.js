import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageErrorMessage from "../components/PageErrorMessage";

export default function NotFoundpage() {
  return (
    <>
      <Navbar />
      <PageErrorMessage />
      <Footer />
    </>
  );
}
