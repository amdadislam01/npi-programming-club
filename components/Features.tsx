"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Code2, Bug, Trophy, Users2, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Learn to Code",
    description: "Master modern programming paradigms from Python to Rust with intensive hands-on implementation.",
    icon: Code2,
    accent: "text-secondary",
    bg: "bg-secondary/5",
  },
  {
    title: "Bug Hunting",
    description: "Deep-level debugging and security auditing to fix complex issues like a professional engineer.",
    icon: Bug,
    accent: "text-tertiary",
    bg: "bg-tertiary/5",
  },
  {
    title: "Competitions",
    description: "Participate in national and international programming contests. Sharpen your skills under pressure.",
    icon: Trophy,
    accent: "text-accent-blue",
    bg: "bg-accent-blue/5",
  },
  {
    title: "Mentorship",
    description: "Bridge the gap between theory and industry with guidance from senior engineers at top tech firms.",
    icon: Users2,
    accent: "text-primary",
    bg: "bg-primary/5",
  },
];

const Features = () => {
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
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="features" className="py-32 bg-white relative overflow-hidden font-sans border-t border-neutral-medium">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Professional Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-black text-[11px] uppercase tracking-[0.3em] mb-4"
          >
            Core Expertise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[52px] font-black text-primary leading-[1.1] tracking-tight"
          >
            Engineered for <span className="text-secondary">Excellence.</span>
          </motion.h2>
        </div>

        {/* Professional Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group flex gap-8 p-10 rounded-[2rem] bg-[#FDFDFD] border border-neutral-medium hover:border-secondary/20 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500"
            >
              <div className={`flex-shrink-0 w-20 h-20 rounded-3xl ${feature.bg} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <feature.icon size={36} className={feature.accent} strokeWidth={1.5} />
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-black text-primary mb-3 transition-colors group-hover:text-secondary">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-[16px] leading-[1.7] mb-6 max-w-md">
                  {feature.description}
                </p>
                
                <div className="inline-flex items-center gap-2 text-[13px] font-black text-primary uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 cursor-pointer">
                  <span>Explore Pathway</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-medium/30 to-transparent pointer-events-none" />
    </section>
  );
};

export default Features;
