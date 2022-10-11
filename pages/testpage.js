import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function testpage() {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <header>
        <Navbar />
      </header>

      <div className="flex-grow">testpage</div>

      <footer>
        <Footer />
        <BackToTop />
      </footer>
    </div>
  );
}
