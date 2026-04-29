"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Compass, ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-neutral-light px-6 py-12">
      <div className="container max-w-4xl mx-auto text-center">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.1 
          }}
          className="w-24 h-24 bg-secondary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner"
        >
          <Terminal size={48} className="text-secondary" />
        </motion.div>

        {/* 404 Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-primary/10 select-none relative"
        >
          404
          <span className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl text-primary font-black tracking-normal">
            PAGE NOT FOUND
          </span>
        </motion.h1>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-lg mx-auto"
        >
          <p className="text-lg md:text-xl text-neutral-dark/60 mb-12">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let&apos;s get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-secondary/20 hover:scale-105 active:scale-95"
            >
              <Home size={20} />
              Return Home
            </Link>
            
            <Link 
              href="/explore"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-neutral-dark/10 hover:border-secondary text-primary px-8 py-4 rounded-2xl font-bold transition-all hover:bg-secondary/5 hover:scale-105 active:scale-95"
            >
              <Compass size={20} />
              Explore Club
            </Link>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="mt-20 flex items-center justify-center gap-8 opacity-20">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent to-primary rounded-full" />
          <div className="w-2 h-2 bg-primary rounded-full" />
          <div className="w-32 h-1 bg-gradient-to-l from-transparent to-primary rounded-full" />
        </div>
      </div>
    </div>
  );
}
