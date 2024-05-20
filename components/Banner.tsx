"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[150px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="pb-8 justify-center flex ">
          <Image
            priority
            src="/Me.png"
            height={300}
            width={300}
            alt="NOUREDDINE Abdelali"
          />
        </div>

        <div className="pb-8 flex flex-col gap-6 mt-6 cursor-pointer animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Noureddine Abdelali
        </div>
        <p className="pb-8 text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
          Je code &{" "}
          <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
            Je Chill
          </span>{" "}
          🍿
        </p>
        <div className="pb-12 text-md flex justify-center">
          <button
            onClick={() =>
              window.open("mailto:abdelali.noureddine86@gmail.com")
            }
            className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent "
          >
            Me contacter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
