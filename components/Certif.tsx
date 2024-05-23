"use client";

import React from "react";
import SwipeCarousel from "./main/Caroussel";

export default function Certif() {
  return (
    <section
      id="certifications"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] mb-12"
    >
      <div className="max-w-[900px] w-full">
        <h1 className="text-5xl font-bold text-white mb-8 text-center">
          CERTIFICATIONS
        </h1>
        <SwipeCarousel />
      </div>
    </section>
  );
}
