"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const HeroSection = () => {
  const slides = [
    {
      image: "/images/1.png",
     
    },
    {
      image: "/images/2.png",
      title: "Minutos: Freshness Delivered, Fast and Local.",
      subtitle: "From your local stores to your doorstep in minutes.",
    },
    {
      image: "/images/3.png",
      title: "Minutos: The Fastest Way to Your Fresh Groceries.",
      subtitle: "Experience the fastest way to get fresh groceries right from your local kirana.",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[30rem] xl:h-[80rem]">
      {/* Slides Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlideIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
                className="object-contain sm:object-cover object-center"
                priority={index === 0}
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-start p-4 sm:px-8 md:px-16 lg:px-24">
              <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl">
                <h1 className="text-white text-xl sm:text-md  md:text-2xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-2">
                  {slide.title}
                </h1>
                <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sliding Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlideIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              index === currentSlideIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;