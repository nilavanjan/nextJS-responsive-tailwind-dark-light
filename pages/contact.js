import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import BackToTop from "../Tools/backToTop";

export default function contact() {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <header>
        <Navbar/>
      </header>

      <div className="flex-grow">contact</div>

      <footer>
        <Footer />
        <BackToTop/>
      </footer>
    </div>
  );
}
