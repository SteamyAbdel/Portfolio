"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Bubbletext from "./Bubbletext";

export default function Banner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)",
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div 
      className="flex flex-row items-center justify-center px-4 md:px-20 mt-[100px] md:mt-[150px] z-[20] min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col justify-center text-center max-w-4xl mx-auto">
        <motion.div 
          className="justify-center flex mb-6"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              alt="NOUREDDINE Abdelali"
              width={300}
              height={300}
              className="rounded-full border-4 border-white/20 shadow-2xl"
              src="/Me.png"
              sizes="300px"
              priority
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col gap-6 mt-6 cursor-pointer tracking-tighter text-4xl md:text-7xl text-white max-w-[600px] w-auto h-auto mb-6 mx-auto"
          variants={itemVariants}
        >
          <Bubbletext />
        </motion.div>
        
        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
        >
          <p className="text-lg md:text-2xl font-medium tracking-tighter text-gray-300 max-w-[600px] mb-12 px-4">
            Je code&nbsp;&&nbsp;
            <span className="text-white font-semibold">
              Je Chill
            </span>{" "}
            &nbsp;🍿
          </p>
        </motion.div>
        
        <motion.div 
          className="pb-12 text-md flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-12 px-4"
          variants={itemVariants}
        >
          <motion.a
            href="mailto:abdelali.noureddine86@gmail.com"
            className="bg-white text-black hover:bg-gray-200 font-semibold py-3 px-8 rounded-full transition-all duration-200 shadow-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Me contacter
          </motion.a>
          <motion.a
            href="/CV.pdf"
            download
            className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-3 px-8 rounded-full border-2 border-white hover:border-transparent transition-all duration-200 shadow-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Télécharger mon CV
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}
