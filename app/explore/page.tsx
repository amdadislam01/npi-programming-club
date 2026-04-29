"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Search, Code, Terminal, Cpu, Rocket, 
  Users, Trophy, Calendar, BookOpen, 
  ArrowRight, Sparkles, Globe, Zap
} from "lucide-react";
import styles from "./Explore.module.css";

const ExplorePage = () => {
  const categories = [
    {
      title: "Workshops",
      count: "12+ Active",
      icon: BookOpen,
      color: "bg-blue-500/10 text-blue-600",
      description: "Hands-on sessions on modern tech stacks and industry best practices."
    },
    {
      title: "Hackathons",
      count: "3 Upcoming",
      icon: Trophy,
      color: "bg-amber-500/10 text-amber-600",
      description: "Intense coding competitions to solve real-world problems and win prizes."
    },
    {
      title: "Open Source",
      count: "45 Projects",
      icon: Code,
      color: "bg-emerald-500/10 text-emerald-600",
      description: "Collaborate on community projects and build your GitHub profile."
    },
    {
      title: "Tech Talks",
      count: "Weekly",
      icon: Terminal,
      color: "bg-purple-500/10 text-purple-600",
      description: "Insights from industry experts and senior club members."
    }
  ];

  const trending = [
    {
      tag: "Hackathon",
      title: "NPI Code-Sprint 2026",
      date: "May 15-17",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60"
    },
    {
      tag: "Workshop",
      title: "Next.js 16 Mastery",
      date: "Starts Tomorrow",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-light pb-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className={`py-24 px-6 ${styles.exploreHero}`}>
        <div className="container mx-auto text-center relative">
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -left-4 opacity-10 hidden lg:block"
          >
            <Cpu size={120} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-24 -right-12 opacity-10 hidden lg:block"
          >
            <Terminal size={140} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-8"
          >
            DISCOVER THE ECOSYSTEM
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-primary mb-8 tracking-tighter"
          >
            Explore the Future <br /> 
            <span className="text-secondary">of Programming</span>
          </motion.h1>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto relative group"
          >
            <div className={`flex items-center gap-4 p-2 rounded-3xl ${styles.glassInput} shadow-2xl`}>
              <div className="flex-1 flex items-center gap-4 px-4">
                <Search className="text-neutral-dark/30" />
                <input 
                  type="text" 
                  placeholder="Search workshops, projects, or events..." 
                  className="w-full bg-transparent border-none outline-none text-primary font-medium placeholder:text-neutral-dark/30"
                />
              </div>
              <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all active:scale-95">
                Explore
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white p-8 rounded-[40px] border border-neutral-dark/5 flex flex-col items-start ${styles.categoryCard}`}
            >
              <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mb-6`}>
                <cat.icon size={28} />
              </div>
              <div className="text-sm font-bold text-secondary mb-2">{cat.count}</div>
              <h3 className="text-2xl font-black text-primary mb-4">{cat.title}</h3>
              <p className="text-neutral-dark/60 font-medium leading-relaxed mb-8 flex-1">
                {cat.description}
              </p>
              <button className="flex items-center gap-2 font-black text-primary group">
                LEARN MORE
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-secondary" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-secondary font-black tracking-widest uppercase text-sm mb-4 block"
            >
              Whats Happening
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter">Trending Now</h2>
          </div>
          <button className="flex items-center gap-3 font-bold text-primary px-8 py-4 rounded-2xl border border-neutral-dark/10 hover:bg-white hover:shadow-xl transition-all">
            View All Feed
            <Zap size={18} className="text-secondary fill-secondary" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {trending.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="group relative h-[400px] rounded-[48px] overflow-hidden cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent p-12 flex flex-col justify-end">
                <span className="bg-secondary/20 backdrop-blur-md border border-secondary/30 text-white px-4 py-2 rounded-full text-xs font-bold w-fit mb-4">
                  {item.tag}
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-4 text-white/60 font-medium">
                  <Calendar size={18} />
                  {item.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global Community */}
      <section className="bg-primary py-24 mx-6 rounded-[60px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Ready to <span className="text-secondary">Join the Evolution?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12">
            Join 500+ developers worldwide and start your journey today. Access exclusive resources, 
            participate in global hackathons, and find your dream tech job.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-secondary text-white px-12 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-secondary/30 hover:scale-105 active:scale-95 transition-all">
              JOIN THE CLUB
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all">
              MEET THE TEAM
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExplorePage;
