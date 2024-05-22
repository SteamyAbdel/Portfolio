"use client";

import React from "react";
import Image from "next/image";
import Bubbletext from "./Bubbletext";

export default function Banner() {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[150px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex mb-6">
          <Image
            alt="NOUREDDINE Abdelali"
            width={300}
            height={300}
            className="rounded-full"
            src="/Me.png"
            sizes="300px"
            priority
          />
        </div>
        <div className="flex flex-col gap-6 mt-6 cursor-pointer animate-bounce tracking-tighter text-7xl text-white max-w-[600px] w-auto h-auto mb-6">
          <Bubbletext />
        </div>
        <div className="flex justify-center">
          <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px] mb-12">
            Je code&nbsp;&&nbsp;
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Je Chill
            </span>{" "}
            &nbsp;🍿
          </p>
        </div>
        <div className="pb-12 text-md flex justify-center gap-8 mb-12">
          <button
            onClick={() => window.open("mailto:ibrahimmemon930@gmail.com")}
            className="shadow-lg shadow-white z-[1] padding-20  hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent "
          >
            Me contacter
          </button>
          <button
            onClick={() => window.open("/CV.pdf", "_blank")}
            className="shadow-lg shadow-white z-[1] padding-20 hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent"
          >
            Télécharger mon CV
          </button>
        </div>
      </div>
    </div>
  );
}
