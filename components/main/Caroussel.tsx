"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";

const imgs = ["/certif/pix.png", "/certif/mooc.png", "/certif/classroom.png"];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 8;

const Modal = ({
  imgSrc,
  onClose,
}: {
  imgSrc: string;
  onClose: () => void;
}) => {
  useEffect(() => {
    // Ajouter la classe overflow-hidden sur le body quand le modal est ouvert
    document.body.classList.add("overflow-hidden");

    // Retirer la classe overflow-hidden quand le modal est fermé
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Empêcher la propagation des clics
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg p-4"
        onClick={handleModalClick}
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-black">
          X
        </button>
        <Image 
          src={imgSrc} 
          alt="Certification en grand format" 
          width={800} 
          height={600} 
          className="max-w-full max-h-screen" 
          priority={true}
          quality={90}
        />
      </div>
    </div>
  );
};

export default function SwipeCarousel() {
  const [imgIndex, setImgIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setImgIndex((pv) => {
        if (pv === imgs.length - 1) {
          return 0;
        }
        return pv + 1;
      });
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const openModal = (imgSrc: string) => {
    setSelectedImg(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImg(null);
    setIsModalOpen(false);
  };

  return (
    <div className="relative overflow-hidden bg-neutral-950 py-8 w-3/4 mx-auto z-10">
      <div
        className="flex cursor-grab items-center active:cursor-grabbing"
        style={{
          transform: `translateX(-${imgIndex * 100}%)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <Images imgIndex={imgIndex} openModal={openModal} />
      </div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />

      {isModalOpen && selectedImg && (
        <Modal imgSrc={selectedImg} onClose={closeModal} />
      )}
    </div>
  );
}

const Images = ({
  imgIndex,
  openModal,
}: {
  imgIndex: number;
  openModal: (imgSrc: string) => void;
}) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: `scale(${imgIndex === idx ? 0.95 : 0.85})`,
              transition: 'transform 0.3s ease-out'
            }}
            className="aspect-video w-full shrink-0 rounded-xl bg-neutral-800 object-cover"
            onClick={() => openModal(imgSrc)}
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
  setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-2 w-2 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
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
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[5vw] max-w-[50px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[5vw] max-w-[50px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};
