"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Check, Users, Trophy, Rocket, Target, Lightbulb, Code2 } from "lucide-react";

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 bg-[#F8FAFC] relative overflow-hidden font-sans">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#629FAD]/5 rounded-full blur-[100px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0C2C55]/5 rounded-full blur-[80px] -ml-48 -mb-48 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#629FAD] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Our Story</span>
          <h2 className="text-[36px] md:text-[48px] font-black text-[#0C2C55] mb-6 leading-tight">
            About <br className="hidden md:block" /> NPI <span className="text-secondary">Programming</span> Club
          </h2>
          <div className="w-[80px] h-[5px] bg-[#629FAD] mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* COLUMN 1 - VISUAL CONTENT */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12"
          >
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#629FAD] rounded-tl-2xl z-0" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#0C2C55] rounded-br-2xl z-0" />
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(12,44,85,0.15)] bg-white p-3"
              >
                <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                  <Image
                    src="/about.png"
                    alt="NPI Programming Club Members Collaborating"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C2C55]/40 to-transparent" />
                </div>
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 md:-left-12 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:flex items-center gap-4 border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#629FAD]/10 rounded-full flex items-center justify-center">
                  <Trophy className="text-[#629FAD]" size={24} />
                </div>
                <div>
                  <div className="text-[#0C2C55] font-bold text-xl">Top Ranked</div>
                  <div className="text-gray-500 text-sm">Programming Club</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* COLUMN 2 - TEXT CONTENT */}
          <div className="w-full lg:w-7/12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p variants={itemVariants} className="text-[18px] text-[#2C3E50] leading-[1.8] mb-10 font-normal">
                NPI Programming Club is more than just a code-hub—it&apos;s a vibrant ecosystem where <span className="text-[#0C2C55] font-bold underline decoration-[#629FAD]/30 decoration-4 underline-offset-4">innovation meets execution</span>. 
                Founded on the principles of collaborative excellence, we provide the ultimate launchpad for aspiring developers.
              </motion.p>

              {/* FEATURES GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    icon: Users,
                    title: "Expert Mentorship",
                    desc: "Direct guidance from industry veterans."
                  },
                  {
                    icon: Trophy,
                    title: "Elite Contests",
                    desc: "High-stakes programming challenges."
                  },
                  {
                    icon: Rocket,
                    title: "Project Labs",
                    desc: "Incubating real-world software solutions."
                  },
                  {
                    icon: Code2,
                    title: "Skill Sprints",
                    desc: "Intensive modern technology workshops."
                  }
                ].map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="flex gap-4 p-4 rounded-xl bg-white border border-transparent hover:border-[#629FAD]/20 hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 bg-[#F1F5F9] group-hover:bg-[#629FAD]/10 rounded-lg flex items-center justify-center transition-colors">
                      <feature.icon size={22} className="text-[#0C2C55] group-hover:text-[#629FAD]" />
                    </div>
                    <div>
                      <h4 className="text-[16px] font-bold text-[#0C2C55] mb-1">{feature.title}</h4>
                      <p className="text-[14px] text-gray-500 leading-tight">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* STATS STRIP */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 md:gap-8 bg-[#0C2C55] p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden"
              >
                {/* Background Pattern for Stats */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                
                {[
                  { num: "500+", label: "Members", icon: Users },
                  { num: "50+", label: "Events", icon: Target },
                  { num: "100+", label: "Projects", icon: Lightbulb }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center border-r last:border-r-0 border-white/10 px-2">
                    <div className="text-white font-black text-[24px] md:text-[36px] mb-1 leading-none tracking-tight">
                      {stat.num}
                    </div>
                    <div className="text-[#629FAD] text-[10px] md:text-[13px] font-bold uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
