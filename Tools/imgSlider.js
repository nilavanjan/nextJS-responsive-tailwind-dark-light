import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";

function ImgSlider({ SliderData }) {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  // functions for next and prev image
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // auto change
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  });

  // moving the dot
  const moveDot = (index) => {
    setCurrent(index);
  };

  // checking if the isArray and is not empty
  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <div className="grid">
      {/* image carosul, hidden on small screens */}
      <div className="flex">
        <BsArrowBarLeft
          className="text-red-600 absolute text-3xl mt-32 lg:mt-48 ml-10 z-10 "
          onClick={prevSlide}
        />

        <BsArrowBarRight
          className="text-red-600 absolute text-3xl mt-32 lg:mt-48 mr-10 z-10 right-0 "
          onClick={nextSlide}
        />

        {/* mapping the carosul images */}
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  key={slide.name}
                  src={slide.image}
                  alt="banners"
                 className="h-96 w-[1920px]"
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-2 flex place-content-center ">
        {Array.from({ length: length  }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index )}
            className={current === index  ? "dot active" : "dot"}
          ></div>
        ))}
      </div>

      <div className="text-red-500">text here</div>
    </div>
  );
}

export default ImgSlider;
