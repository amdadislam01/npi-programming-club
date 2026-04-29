"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Quote, ArrowRight, Globe, Link2, Mail } from "lucide-react";

const stories = [
  {
    name: "Mahfuzur Rahman",
    role: "Software Engineer",
    company: "Google",
    quote: "NPI Programming Club was where I wrote my first line of complex code. The mentorship and collaborative environment here are truly world-class.",
    image: "/success_mahfuz.png",
    color: "secondary",
  },
  {
    name: "Sarah Islam",
    role: "Data Scientist",
    company: "Microsoft",
    quote: "The competitive programming sessions gave me the deep logic and problem-solving skills I needed to land my dream role at Microsoft.",
    image: "/success_sarah.png",
    color: "tertiary",
  },
  {
    name: "Tanvir Ahmed",
    role: "Full Stack Developer",
    company: "Vercel",
    quote: "Working on real-world projects within the club was better than any internship. It prepared me for the pace of top-tier tech companies.",
    image: "/success_tanvir.png",
    color: "accent-blue",
  },
];

const SuccessStories = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="success" className="py-32 bg-[#F8FAFC] relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-black text-[11px] uppercase tracking-[0.3em] mb-4"
          >
            Alumni Success
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[52px] font-black text-primary leading-[1.1] tracking-tight mb-6"
          >
            Our Members <br />
            <span className="text-secondary">Succeed Globally.</span>
          </motion.h2>
        </div>

        {/* Success Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white p-10 rounded-[2.5rem] border border-neutral-medium hover:border-secondary/20 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute top-10 right-10 text-neutral-medium group-hover:text-secondary/10 transition-colors duration-500">
                <Quote size={80} strokeWidth={1} />
              </div>

              <div className="relative z-10">
                {/* Profile Header */}
                <div className="flex items-center gap-5 mb-8">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-neutral-medium group-hover:border-secondary transition-colors duration-500">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-primary mb-1">
                      {story.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">{story.role} @</span>
                      <span className={`text-${story.color} text-xs font-black uppercase tracking-wider`}>{story.company}</span>
                    </div>
                  </div>
                </div>

                {/* Quote Content */}
                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  &ldquo;{story.quote}&rdquo;
                </p>

                {/* Social/Link Footer */}
                <div className="flex items-center justify-between border-t border-neutral-medium pt-8">
                  <div className="flex items-center gap-4 text-gray-300">
                    <Globe size={18} className="hover:text-primary transition-colors cursor-pointer" />
                    <Link2 size={18} className="hover:text-primary transition-colors cursor-pointer" />
                    <Mail size={18} className="hover:text-primary transition-colors cursor-pointer" />
                  </div>
                  <button className="flex items-center gap-2 text-primary font-black text-[11px] uppercase tracking-widest group-hover:text-secondary transition-colors">
                    Read Story
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;
