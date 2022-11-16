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

  return (
    <div>
      {toTop && (
        <BsArrowUpCircleFill
          className="h-9 w-9 md:h-11  md:w-11 rounded-full  bottom-4 right-4 fixed text-red-500 hover:shadow-lg 
          hover:cursor-pointer hover:shadow-red-600 "
          onClick={scroolUp}
        />
      )}
    </div>
  );
}
