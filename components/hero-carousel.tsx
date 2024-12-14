"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6",
    title: "Premium Laptops",
    description: "Discover our range of high-performance laptops",
  },
  {
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b",
    title: "Custom PCs",
    description: "Build your dream gaming or workstation PC",
  },
  {
    image: "https://images.unsplash.com/photo-1600940262447-6bcd1147cf99",
    title: "Tech Accessories",
    description: "Complete your setup with premium accessories",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">{slide.title}</h1>
              <p className="text-lg sm:text-xl mb-4 sm:mb-8">{slide.description}</p>
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="/products">Shop Now</a>
              </Button>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
      >
        <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
      >
        <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
      </Button>
    </div>
  );
}