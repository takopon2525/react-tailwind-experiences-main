import React from "react";
import bannerImg from "../assets/img/banner.jpg";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={bannerImg}
        alt="/"
      />
      {/* ↓画面に背景色を掛ける */}
      {/* <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" /> */}
      <div className="absolute top-32 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            相撲部で掴む熱い4年間
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            一緒に新しい挑戦、思い出、そして仲間を手に入れよう！
          </p>
          <button className="bg-white text-black font-bold underline">新歓ぺージへ</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
