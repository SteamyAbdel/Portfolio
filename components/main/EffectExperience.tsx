import React, { useRef, useEffect } from "react";

export const useGlowEffect = () => {
  // Votre code d'effet ici
  const EffectExperience: React.FC<{}> = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const container = containerRef.current;

      const handleMouseMove = (event: MouseEvent) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        if (container) {
          const containerRect = container.getBoundingClientRect();
          const containerCenterX = containerRect.left + containerRect.width / 2;
          const containerCenterY = containerRect.top + containerRect.height / 2;

          const distanceX = mouseX - containerCenterX;
          const distanceY = mouseY - containerCenterY;

          const maxDistance = Math.sqrt(
            Math.pow(containerRect.width / 2, 2) +
              Math.pow(containerRect.height / 2, 2)
          );

          const normalizedDistance = Math.sqrt(
            Math.pow(distanceX, 2) + Math.pow(distanceY, 2)
          );

          const glowSize = (normalizedDistance / maxDistance) * 20;

          container.style.boxShadow = `0 0 ${glowSize}px rgba(255, 255, 255, 0.5)`;
        }
      };

      container?.addEventListener("mousemove", handleMouseMove);

      return () => {
        container?.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    return (
      <section id="experience">
        {/* Rest of the component code */}
        <div
          ref={containerRef}
          className=" container mx-auto 2xl "
          style={{ position: "relative" }}
        >
          {/* Rest of the component code */}
        </div>
        {/* Rest of the component code */}
      </section>
    );
  };
};
