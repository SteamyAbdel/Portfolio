"use client";

import React from "react";
import Image from "next/image";
import Bubbletext from "./Bubbletext";

export default function Banner() {
  return (
    <div 
      className="flex flex-row items-center justify-center px-4 md:px-20 mt-[100px] md:mt-[150px] z-[20] min-h-screen"
      style={{
        opacity: 0,
        animation: 'fadeInUp 0.8s ease-out 0.2s forwards'
      }}
    >
      <div className="flex flex-col justify-center text-center max-w-4xl mx-auto">
        <div 
          className="justify-center flex mb-6"
          style={{
            opacity: 0,
            transform: 'translateY(50px)',
            animation: 'fadeInUp 0.8s ease-out 0.5s forwards'
          }}
        >
          <div className="hover:scale-105 transition-transform duration-200">
            <Image
              alt="NOUREDDINE Abdelali"
              width={300}
              height={300}
              className="rounded-full border-4 border-white/20 shadow-2xl"
              src="/Me.png"
              sizes="300px"
              priority
            />
          </div>
        </div>
        
        <div 
          className="flex flex-col gap-6 mt-6 cursor-pointer tracking-tighter text-4xl md:text-7xl text-white max-w-[600px] w-auto h-auto mb-6 mx-auto"
          style={{
            opacity: 0,
            transform: 'translateY(50px)',
            animation: 'fadeInUp 0.8s ease-out 0.8s forwards'
          }}
        >
          <Bubbletext />
        </div>
        
        <div 
          className="flex justify-center"
          style={{
            opacity: 0,
            transform: 'translateY(50px)',
            animation: 'fadeInUp 0.8s ease-out 1.1s forwards'
          }}
        >
          <p className="text-lg md:text-2xl font-medium tracking-tighter text-gray-300 max-w-[600px] mb-12 px-4">
            Je code&nbsp;&&nbsp;
            <span className="text-white font-semibold">
              Je Chill
            </span>{" "}
            &nbsp;🍿
          </p>
        </div>
        
        <div 
          className="pb-12 text-md flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-12 px-4"
          style={{
            opacity: 0,
            transform: 'translateY(50px)',
            animation: 'fadeInUp 0.8s ease-out 1.4s forwards'
          }}
        >
          <a
            href="mailto:abdelali.noureddine86@gmail.com"
            className="bg-white text-black hover:bg-gray-200 font-semibold py-3 px-8 rounded-full transition-all duration-200 shadow-lg hover:scale-105 hover:shadow-xl active:scale-95"
          >
            Me contacter
          </a>
          <a
            href="/CV.pdf"
            download
            className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-3 px-8 rounded-full border-2 border-white hover:border-transparent transition-all duration-200 shadow-lg hover:scale-105 hover:shadow-xl active:scale-95"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </div>
  );
}
