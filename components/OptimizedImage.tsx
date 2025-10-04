"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  sizes?: string;
  quality?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 300,
  height = 200,
  className = "",
  priority = false,
  placeholder = "blur",
  blurDataURL,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 75
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px"
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Générer un blur placeholder simple
  const generateBlurDataURL = () => {
    if (blurDataURL) return blurDataURL;
    
    // Créer un SVG blur simple
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f3f4f6"/>
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-size="14">
          Chargement...
        </text>
      </svg>
    `;
    
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {isInView ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            placeholder={placeholder}
            blurDataURL={generateBlurDataURL()}
            sizes={sizes}
            quality={quality}
            className="transition-all duration-300 hover:scale-105"
            onLoad={() => setIsLoaded(true)}
            loading={priority ? "eager" : "lazy"}
          />
        </motion.div>
      ) : (
        <div 
          className="bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <span className="text-gray-400 text-sm">Chargement...</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
