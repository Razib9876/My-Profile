"use client";
import React, { useState, useEffect } from "react";

const TechStackVideoEffect = () => {
  const words = [
    "I BUILD EXPERIENCES",
    "FROM IDEA → PRODUCT",
    "CLEAN CODE",
    "SCALABLE SYSTEMS",
    "REAL PROBLEM SOLVER",
    // "TYPESCRIPT",
    // "REACT.JS",
    // "NEXT.JS",
    // "NODE.JS",
    // "MONGODB",
    "FULL STACK DEVELOPER",
    "THIS IS JUST THE BEGINNING",
  ];

  const animations = [
    "animate-slide-up",
    "animate-zoom-in",
    "animate-blur-in",
    "animate-slide-right",
    "animate-flip-x",
    "animate-tracking-expand",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Duration set to 4 seconds (4000ms) for maximum readability
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 900);

    return () => clearInterval(interval);
  }, [words.length]);

  const currentAnim = animations[index % animations.length];

  return (
    // Removed background color and border to blend into Hero section
    <div className="w-full h-[200px] md:h-[300px] flex items-center justify-center bg-transparent overflow-hidden relative">
      <div className="text-center px-4">
        {/* <h2 className="text-[10px] md:text-xs text-primary font-bold uppercase tracking-[0.6em] mb-8 opacity-50">
          Sequence // 0{index + 1}
        </h2> */}

        <div className="h-24 flex items-center justify-center">
          <h1
            key={index}
            // text-base-content automatically handles light/dark mode based on your theme
            className={`text-3xl md:text-6xl font-black text-base-content leading-tight ${currentAnim}`}
          >
            {words[index]}
          </h1>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes slideUp {
            0% { opacity: 0; transform: translateY(30px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-30px); }
          }
          @keyframes zoomIn {
            0% { opacity: 0; transform: scale(0.8); }
            10% { opacity: 1; transform: scale(1); }
            90% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(1.1); }
          }
          @keyframes blurIn {
            0% { opacity: 0; filter: blur(15px); }
            10% { opacity: 1; filter: blur(0); }
            90% { opacity: 1; filter: blur(0); }
            100% { opacity: 0; filter: blur(10px); }
          }
          @keyframes slideRight {
            0% { opacity: 0; transform: translateX(-30px); }
            10% { opacity: 1; transform: translateX(0); }
            90% { opacity: 1; transform: translateX(0); }
            100% { opacity: 0; transform: translateX(30px); }
          }
          @keyframes flipX {
            0% { opacity: 0; transform: rotateX(80deg); }
            10% { opacity: 1; transform: rotateX(0deg); }
            90% { opacity: 1; transform: rotateX(0deg); }
            100% { opacity: 0; transform: rotateX(-80deg); }
          }
          @keyframes tracking {
            0% { opacity: 0; letter-spacing: -0.2em; }
            10% { opacity: 1; letter-spacing: normal; }
            90% { opacity: 1; letter-spacing: normal; }
            100% { opacity: 0; letter-spacing: 0.2em; }
          }

          /* All animations set to 4s to match the interval */
          .animate-slide-up { animation: slideUp 4s ease-in-out forwards; }
          .animate-zoom-in { animation: zoomIn 4s ease-in-out forwards; }
          .animate-blur-in { animation: blurIn 4s ease-in-out forwards; }
          .animate-slide-right { animation: slideRight 4s ease-in-out forwards; }
          .animate-flip-x { animation: flipX 4s ease-in-out forwards; }
          .animate-tracking-expand { animation: tracking 4s ease-in-out forwards; }
        `,
        }}
      />
    </div>
  );
};

export default TechStackVideoEffect;
