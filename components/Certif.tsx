"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = ["/me.png", "/FirstProject.png"];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export default function SwipeCarousel() {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  //   useEffect(() => {
  //     const intervalRef = setInterval(() => {
  //       const x = dragX.get();
  //       console.log(x);

  //       if (x === 0) {
  //         setImgIndex((pv) => {
  //           if (pv === imgs.length - 1) {
  //             return 0;
  //           }
  //           return pv + 1;
  //         });
  //       }
  //     }, AUTO_DELAY);

  //     return () => clearInterval(intervalRef);
  //   }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    console.log(x);

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <section
      id="certifications"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] mb-12"
    >
      <div className="max-w-[900px] w-full">
        <h1 className="text-5xl font-bold text-white mb-8 text-center">
          CERTIFICATIONS
        </h1>
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${imgIndex * 100}%`,
          }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          onClick={() => console.log("test")}
          onDoubleClick={() => console.log("tetetetet")}
          className="flex cursor-grab items-center active:cursor-grabbing relative overflow-hidden bg-neutral-950 py-8 w-full md:w-3/4 lg:w-1/2 h-full mx-auto"
        >
          <Images imgIndex={imgIndex} />
        </motion.div>

        <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
        <GradientEdges />
      </div>
    </section>
  );
}

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {imgs.map((imgSrc, index) => {
        return (
          <motion.div
            key={index}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === index ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-full h-full shrink-0 rounded-xl bg-neutral-800 object-cover"
          />
        );
      })}
    </>
  );
};

const Dots = ({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number;
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, index) => {
        return (
          <button
            key={index}
            onClick={() => setImgIndex(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};
