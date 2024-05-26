"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-full h-[65px] bg-['#111'] z-[20] px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/">
          <Image
            src="/Logo.png"
            alt="logo"
            width={100}
            height={100}
            sizes="(max-width: 768px) 100vw, 100px"
            className="cursor-pointer"
          />
        </Link>

        <div className="flex flex-row gap-5">
          <div
            onClick={() =>
              window.open("mailto:abdelali.noureddine86@gmail.com")
            }
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5"
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
