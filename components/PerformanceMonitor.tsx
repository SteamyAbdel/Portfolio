"use client";

import React, { useState, useEffect } from "react";
import NoSSR from "./NoSSR";

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Seulement en mode développement
    if (process.env.NODE_ENV !== "development") return;

    const measurePerformance = () => {
      if (typeof window === "undefined" || !("performance" in window)) return;

      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType("paint");
      
      const fcp = paint.find(entry => entry.name === "first-contentful-paint")?.startTime || 0;
      const lcp = performance.getEntriesByType("largest-contentful-paint")[0]?.startTime || 0;
      
      // Observer pour CLS
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "layout-shift" && !(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
      });
      observer.observe({ entryTypes: ["layout-shift"] });

      // Observer pour FID
      let fidValue = 0;
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          fidValue = (entry as any).processingStart - (entry as any).startTime;
        }
      });
      fidObserver.observe({ entryTypes: ["first-input"] });

      setTimeout(() => {
        setMetrics({
          fcp: Math.round(fcp),
          lcp: Math.round(lcp),
          fid: Math.round(fidValue),
          cls: Math.round(clsValue * 1000) / 1000,
          ttfb: Math.round(navigation.responseStart - navigation.requestStart)
        });
        observer.disconnect();
        fidObserver.disconnect();
      }, 3000);
    };

    // Mesurer après le chargement complet
    if (document.readyState === "complete") {
      measurePerformance();
    } else {
      window.addEventListener("load", measurePerformance);
    }

    return () => {
      window.removeEventListener("load", measurePerformance);
    };
  }, []);

  if (!metrics || process.env.NODE_ENV !== "development") return null;

  const getScore = (value: number, thresholds: [number, number]) => {
    if (value <= thresholds[0]) return "🟢 Excellent";
    if (value <= thresholds[1]) return "🟡 Bon";
    return "🔴 À améliorer";
  };

  if (process.env.NODE_ENV !== "development") return null;

  return (
    <NoSSR>
      <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg text-xs z-50 max-w-xs">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-white hover:text-gray-300 mb-2"
        >
          {isVisible ? "📊 Masquer" : "📊 Performance"}
        </button>
        
        {isVisible && metrics && (
          <div className="space-y-2">
            <h3 className="font-bold text-sm mb-2">Métriques Core Web Vitals</h3>
            
            <div className="space-y-1">
              <div className="flex justify-between">
                <span>FCP:</span>
                <span>{metrics.fcp}ms {getScore(metrics.fcp, [1800, 3000])}</span>
              </div>
              
              <div className="flex justify-between">
                <span>LCP:</span>
                <span>{metrics.lcp}ms {getScore(metrics.lcp, [2500, 4000])}</span>
              </div>
              
              <div className="flex justify-between">
                <span>FID:</span>
                <span>{metrics.fid}ms {getScore(metrics.fid, [100, 300])}</span>
              </div>
              
              <div className="flex justify-between">
                <span>CLS:</span>
                <span>{metrics.cls} {getScore(metrics.cls, [0.1, 0.25])}</span>
              </div>
              
              <div className="flex justify-between">
                <span>TTFB:</span>
                <span>{metrics.ttfb}ms {getScore(metrics.ttfb, [800, 1800])}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </NoSSR>
  );
};

export default PerformanceMonitor;
