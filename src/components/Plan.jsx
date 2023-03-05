import React from "react";
import planImg1 from "../assets/img/plan/plan_img1.jpg";
import planImg2 from "../assets/img/plan/plan_img2.jpg";
import planImg3 from "../assets/img/plan/plan_img3.jpg";
import planImg4 from "../assets/img/plan/plan_img4.jpg";
import planImg5 from "../assets/img/plan/plan_img5.jpg";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-6 object-cover w-full h-full p-2"
          src={planImg2}
          alt="/"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src={planImg1}
          alt="/"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src={planImg4}
          alt="/"
        />
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-6xl md:text-5xl font-bold">相撲部で作る4年間の思い出</h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam?
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptates nostrum dolorum reprehenderit error! Doloribus est illo
          eius saepe? Molestias sapiente perspiciatis doloribus consectetur
          nihil facilis aliquid eaque vel quisquam.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            北大相撲部の歴史を知る
          </button>
          <button className="bg-black text-white border-black hover:shadow-xl">
            新歓特設ぺージへ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
