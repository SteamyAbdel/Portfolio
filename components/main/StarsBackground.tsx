"use client";

import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() => {
    try {
      return random.inSphere(new Float32Array(5000), { radius: 1.2 });
    } catch (error) {
      console.warn('Error creating sphere:', error);
      return new Float32Array(5000);
    }
  });
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
    try {
      if (ref.current) {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 10;
      }
    } catch (error) {
      console.warn('Error in useFrame:', error);
    }
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

const StarsCanvas: React.FC<{}> = () => {
  const [webglSupported, setWebglSupported] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Vérifier le support WebGL
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      setWebglSupported(false);
      return;
    }

    // Test de création de contexte WebGL
    try {
      const testCanvas = document.createElement('canvas');
      const testGl = testCanvas.getContext('webgl');
      if (!testGl) {
        throw new Error('WebGL context creation failed');
      }
    } catch (err) {
      setWebglSupported(false);
      setError(err instanceof Error ? err.message : 'WebGL error');
    }
  }, []);

  if (!webglSupported) {
    // Fallback CSS pour les navigateurs sans WebGL
    return (
      <div className="w-full h-auto fixed inset-0 -z-[1]">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] opacity-20"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-auto fixed inset-0 -z-[1]">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        onCreated={({ gl }) => {
          // Configuration WebGL pour éviter les erreurs
          gl.setSize(window.innerWidth, window.innerHeight);
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }}
        onError={(error) => {
          console.warn('Three.js error:', error);
          setError('WebGL rendering error');
        }}
      >
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
