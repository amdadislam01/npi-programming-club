"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { BookOpen, FileText, PlayCircle, Download, ExternalLink } from "lucide-react";

const resources = [
  {
    title: "Programming Library",
    description: "Access a curated collection of technical e-books, research papers, and documentation.",
    count: "120+ Books",
    image: "/resource_library.png",
    icon: BookOpen,
    color: "secondary",
  },
  {
    title: "Algorithm Cheat Sheets",
    description: "High-density references for data structures, algorithms, and complex problem-solving.",
    count: "50+ Sheets",
    image: "/resource_cheatsheets.png",
    icon: FileText,
    color: "tertiary",
  },
  {
    title: "Video Tutorials",
    description: "Recorded workshops and deep-dive coding sessions from our expert mentors.",
    count: "200+ Videos",
    image: "/resource_videos.png",
    icon: PlayCircle,
    color: "accent-blue",
  },
];

const Resources = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="resources" className="py-32 bg-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-black text-[11px] uppercase tracking-[0.3em] mb-4"
          >
            Learning Hub
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[52px] font-black text-primary leading-[1.1] tracking-tight mb-6"
          >
            Premium Learning <br />
            <span className="text-secondary">Resources.</span>
          </motion.h2>
        </div>

        {/* Clean Resources Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {resources.map((res, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-white transition-all duration-400"
            >
              {/* Simplified Image Container */}
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <Image
                  src={res.image}
                  alt={res.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-primary font-bold text-[9px] uppercase tracking-wider shadow-sm border border-white/20`}>
                    {res.count}
                  </span>
                </div>
              </div>

              {/* Minimalist Content */}
              <div className="px-2">
                <div className="flex items-center gap-3 mb-3">
                  <res.icon size={18} className={`text-${res.color}`} />
                  <h3 className="text-xl font-black text-primary tracking-tight">
                    {res.title}
                  </h3>
                </div>
                <p className="text-gray-500 leading-relaxed mb-6 text-[14px]">
                  {res.description}
                </p>

                <div className="inline-flex items-center gap-2 text-[12px] font-black text-primary/40 group-hover:text-secondary transition-colors cursor-pointer uppercase tracking-widest">
                  <span>Get Access</span>
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
