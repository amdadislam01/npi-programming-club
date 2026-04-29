"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    image: "/hero1.png",
    headline: "CODE • DEBUG • DEVELOP • SUCCEED",
    tagline: "Join NPI Programming Club - Where Bug Hunters Thrive",
    description:
      "Learn coding, hunt bugs, develop skills, and succeed in competitive programming. Be part of a vibrant community dedicated to mastering software development and becoming exceptional programmers.",
  },
  {
    image: "/hero2.png",
    headline: "INNOVATE • COLLABORATE • CREATE • EXCEL",
    tagline: "Unleash Your Potential at NPI Programming Club",
    description:
      "Join a group of passionate developers working on real-world projects. From web development to AI, we cover everything that drives the future of technology.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[550px] md:h-[700px] w-full overflow-hidden flex items-center py-16 md:py-0">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[current].image}
            alt="Hero Background"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/40 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-tertiary font-semibold tracking-wider uppercase mb-2 md:mb-4 text-[14px] sm:text-[16px] md:text-[20px]"
              >
                {slides[current].tagline}
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white font-black leading-[1.2] md:leading-[1.1] mb-4 md:mb-6 text-[32px] sm:text-[42px] md:text-[52px] tracking-tight drop-shadow-2xl"
              >
                {slides[current].headline}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-white/90 text-[14px] sm:text-[16px] md:text-[18px] leading-[1.6] mb-8 md:mb-10 max-w-2xl font-medium"
              >
                {slides[current].description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-5"
              >
                <button className="group relative px-6 py-3 md:px-8 md:py-4 bg-secondary text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(13,148,136,0.5)] cursor-pointer text-[14px] md:text-[16px]">
                  <span className="relative z-10">Join Our Club</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
                
                <button className="px-6 py-3 md:px-8 md:py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 backdrop-blur-lg border border-white/20 transition-all duration-300 hover:border-white/40 cursor-pointer text-[14px] md:text-[16px]">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>


      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-tertiary/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
