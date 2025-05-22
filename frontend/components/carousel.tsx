"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import cimage1 from "../public/cimage1.jpg"
import cimage2 from "../public/cimage2.jpg"
import cimage3 from "../public/cimage3.jpg"

interface CarouselItem {
  title: string
  description: string
  image: any
}

const carouselItems: CarouselItem[] = [
  {
    title: "AI Book Generator",
    description: "Generate personalized books tailored to your learning level and interests.",
    image: cimage1,
  },
  {
    title: "AI Counselor",
    description: "Get personalized guidance and motivation to achieve your academic goals.",
    image: cimage2,
  },
  {
    title: "AI Doubt Solver",
    description: "Instantly solve your academic doubts with our intelligent AI assistant.",
    image: cimage3,
  },
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length)
  }

  useEffect(() => {
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-lg shadow-md">
      <div className="relative h-[400px] md:h-[800px]">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-blue-900/70 z-10" />
            <Image src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{item.title}</h2>
              <p className="text-lg md:text-xl text-white max-w-2xl mb-8">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-2 rounded-full z-30 hover:bg-white/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-2 rounded-full z-30 hover:bg-white/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
