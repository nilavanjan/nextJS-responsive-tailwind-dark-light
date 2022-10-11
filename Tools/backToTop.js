import React, { useState, useEffect } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

export default function BackToTop() {
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setToTop(true);
      } else {
        setToTop(false);
      }
    });
  }, []);

  const scroolUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <div>{toTop && (<BsArrowUpCircleFill className="totop" onClick={scroolUp} />)}</div>;
}