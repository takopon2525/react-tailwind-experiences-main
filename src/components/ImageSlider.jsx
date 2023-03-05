import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import planImg1 from "../assets/img/plan/plan_img1.jpg";
import planImg2 from "../assets/img/plan/plan_img2.jpg";
import planImg3 from "../assets/img/plan/plan_img3.jpg";
import planImg4 from "../assets/img/plan/plan_img4.jpg";
import planImg5 from "../assets/img/plan/plan_img5.jpg";

const ImageSlider = () => {
  const slides = [
    {
      url: planImg1,
      title: "Lobster",
    },
    {
      url: planImg1,
      title: "Sushi",
    },
    {
      url: planImg1,
      title: "Pasta",
    },
    {
      url: planImg1,
      title: "Salmon",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      >
        <div className="absolute left-20 bottom-12 bg-gray-600 w-1/3 text-slate-50 rounded-xl p-4 leading-8 tracking-wide">
          <div className="text-xl undeline font-bold">第○○七大学総合大会</div>
          <div>団体戦：優勝</div>
          <div>個人戦：○○</div>
          <div>女子：○○</div>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            className="text-2xl cursor-pointer"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
