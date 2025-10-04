"use client";

import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );
  const [starColor, setStarColor] = useState("white");

  // Détecter le thème et changer la couleur des étoiles
  useEffect(() => {
    const updateStarColor = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setStarColor(isDark ? "white" : "black");
    };

    // Observer les changements de classe sur l'élément HTML
    const observer = new MutationObserver(updateStarColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Initialiser la couleur
    updateStarColor();

    return () => observer.disconnect();
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 10;
  });

  return (
    <group rotation={[0, 0, Math.PI / 8]}>
      <Points ref={ref} positions={sphere} stride={4} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={starColor}
          size={0.002}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC<{}> = () => (
  <div className="w-full h-auto fixed inset-0 -z-[1] ">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
