"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";

const events = [
  {
    title: "National Hackathon 2024",
    description: "Join the ultimate battle of code and creativity. Build solutions for real-world problems in 48 hours.",
    date: "May 15, 2024",
    location: "Main Auditorium, NPI",
    image: "/event_hackathon.png",
    category: "Competition",
    color: "secondary",
  },
  {
    title: "Competitive Programming Workshop",
    description: "Master data structures and algorithms with our intensive training program designed for ACM-ICPC aspirants.",
    date: "June 02, 2024",
    location: "CS Lab 302",
    image: "/event_workshop.png",
    category: "Workshop",
    color: "tertiary",
  },
  {
    title: "Bug Hunting & Security Session",
    description: "A deep dive into security vulnerabilities and responsible disclosure with professional researchers.",
    date: "June 20, 2024",
    location: "Virtual Meeting (Discord)",
    image: "/event_bughunt.png",
    category: "Security",
    color: "accent-blue",
  },
];

const Events = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="events" className="py-32 bg-[#FDFDFD] relative overflow-hidden font-sans">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-black text-[11px] uppercase tracking-[0.3em] mb-4 flex items-center gap-2"
            >
              Upcoming Activities
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[40px] md:text-[56px] font-black text-primary leading-[1.1] tracking-tight"
            >
              Where Code Meets <br />
              <span className="text-secondary">Community.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <button className="group flex items-center gap-3 text-primary font-black text-sm uppercase tracking-wider border-b-2 border-primary pb-1 transition-all hover:text-secondary hover:border-secondary">
              View All Events
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Events Grid/List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-center p-6 md:p-8 rounded-[2.5rem] bg-white border border-neutral-medium hover:border-secondary/20 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-700"
            >
              {/* Image Side */}
              <div className="w-full lg:w-5/12 aspect-[16/10] relative rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-4 py-1.5 rounded-full text-white font-bold text-[10px] uppercase tracking-wider bg-${event.color}`}>
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-7/12 py-4">
                <div className="flex items-center gap-6 mb-6 text-gray-400 font-bold text-xs uppercase tracking-[0.1em]">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-secondary" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-secondary" />
                    {event.location}
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-primary mb-6 group-hover:text-secondary transition-colors leading-tight">
                  {event.title}
                </h3>
                
                <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-2xl">
                  {event.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className={`px-8 py-4 rounded-2xl bg-primary text-white font-black text-sm uppercase tracking-widest hover:bg-secondary transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-secondary/30`}>
                    Register Now
                  </button>
                  <button className="px-8 py-4 rounded-2xl bg-white border border-neutral-medium text-primary font-black text-sm uppercase tracking-widest hover:bg-neutral-medium transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Background Numbering (Optional subtle touch) */}
              <div className="absolute -top-10 -right-10 text-[200px] font-black text-primary/[0.02] pointer-events-none select-none">
                {idx + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
