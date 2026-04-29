"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Book, FileText, Video, Layout, 
  Download, ExternalLink, Search, 
  Filter, Star, Globe, Shield, 
  Cpu, Rocket, ArrowRight
} from "lucide-react";
import styles from "./Resources.module.css";

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const categories = [
    { name: "All", icon: Globe },
    { name: "Guides", icon: Book },
    { name: "Tools", icon: Cpu },
    { name: "Videos", icon: Video },
    { name: "Templates", icon: Layout }
  ];

  const resources = [
    {
      title: "Frontend Development Roadmap 2026",
      category: "Guides",
      type: "PDF Guide",
      author: "Club Mentors",
      description: "A comprehensive path to becoming a professional frontend engineer with the latest tech.",
      isPopular: true
    },
    {
      title: "Clean Code Architecture Patterns",
      category: "Guides",
      type: "Documentation",
      author: "John Anderson",
      description: "Learn how to structure your applications for maximum scalability and maintainability.",
      isPopular: false
    },
    {
      title: "DevOps Toolchain Collection",
      category: "Tools",
      type: "Tool List",
      author: "Technical Team",
      description: "Curated list of essential tools for CI/CD, monitoring, and cloud infrastructure.",
      isPopular: true
    },
    {
      title: "React Performance Optimization",
      category: "Videos",
      type: "Masterclass",
      author: "Sarah Khan",
      description: "Deep dive into profiling, memoization, and advanced rendering techniques in React.",
      isPopular: false
    },
    {
      title: "Portfolio Starter Template",
      category: "Templates",
      type: "Source Code",
      author: "Design Lead",
      description: "A premium Next.js template to kickstart your professional developer portfolio.",
      isPopular: true
    },
    {
      title: "Cyber Security Fundamentals",
      category: "Guides",
      type: "Whitepaper",
      author: "Shield Team",
      description: "Essential security practices every developer must follow in modern web apps.",
      isPopular: false
    }
  ];

  const filteredResources = resources.filter(res => {
    const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "All" || res.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <main className="min-h-screen bg-neutral-light pb-24">
      {/* Hero Section */}
      <section className={`pt-24 pb-20 px-6 ${styles.resourceHero}`}>
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary font-black text-[10px] tracking-[0.2em] uppercase mb-8"
          >
            <Star size={14} className="fill-primary" />
            Exclusive Member Resources
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-primary mb-8 tracking-tighter"
          >
            Expand Your <br /> 
            <span className="text-secondary">Technical Horizon</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-dark/60 font-medium max-w-2xl mx-auto mb-12"
          >
            Curated learning paths, industry-standard templates, and exclusive tools designed to help you build world-class software.
          </motion.p>

          {/* Search Hub */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`max-w-3xl mx-auto bg-white p-3 rounded-[32px] flex flex-col md:flex-row items-center gap-4 ${styles.searchWrapper}`}
          >
            <div className="flex-1 flex items-center gap-4 px-6 w-full">
              <Search className="text-neutral-dark/30" />
              <input 
                type="text" 
                placeholder="Search for roadmap, tool, or guide..." 
                className="w-full bg-transparent border-none outline-none text-primary font-semibold placeholder:text-neutral-dark/30 py-3"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar px-2">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveTab(cat.name)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-xs whitespace-nowrap transition-all ${
                    activeTab === cat.name 
                      ? "bg-secondary text-white shadow-lg" 
                      : "text-neutral-dark/40 hover:bg-neutral-light hover:text-primary"
                  }`}
                >
                  <cat.icon size={16} />
                  {cat.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-black text-primary tracking-tight">
            {activeTab} <span className="text-secondary/40 font-bold ml-2">{filteredResources.length} Found</span>
          </h2>
          <button className="flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase hover:text-secondary transition-colors">
            Recently Added
            <Filter size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredResources.map((res, idx) => (
              <motion.div
                key={res.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.05 }}
                className={`bg-white p-10 rounded-[48px] border border-neutral-dark/5 flex flex-col items-start relative group overflow-hidden ${styles.resourceCard}`}
              >
                {res.isPopular && (
                  <div className={`absolute top-0 right-10 px-4 py-2 rounded-b-2xl text-[10px] font-black text-white uppercase tracking-widest ${styles.popularBadge}`}>
                    Popular
                  </div>
                )}
                
                <div className="w-16 h-16 rounded-3xl bg-neutral-light flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {res.category === "Guides" && <FileText className="text-secondary" size={32} />}
                  {res.category === "Tools" && <Cpu className="text-secondary" size={32} />}
                  {res.category === "Videos" && <Video className="text-secondary" size={32} />}
                  {res.category === "Templates" && <Layout className="text-secondary" size={32} />}
                </div>

                <div className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] mb-4">
                  {res.type}
                </div>

                <h3 className="text-2xl font-black text-primary mb-4 group-hover:text-secondary transition-colors leading-tight">
                  {res.title}
                </h3>

                <p className="text-neutral-dark/60 font-medium leading-relaxed mb-8 flex-1">
                  {res.description}
                </p>

                <div className="w-full pt-8 border-t border-neutral-dark/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px] font-black">
                      {res.author[0]}
                    </div>
                    <span className="text-[11px] font-bold text-neutral-dark/40">{res.author}</span>
                  </div>
                  <button className="flex items-center gap-2 bg-primary text-white p-3 rounded-xl hover:bg-secondary transition-all shadow-lg shadow-primary/10">
                    <Download size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredResources.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="py-24 text-center"
          >
            <div className="w-20 h-20 bg-neutral-dark/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-neutral-dark/20" />
            </div>
            <h3 className="text-2xl font-black text-primary mb-2">No resources found</h3>
            <p className="text-neutral-dark/40 font-medium">Try adjusting your search or filter categories.</p>
          </motion.div>
        )}
      </section>

      {/* Contribution Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="bg-primary rounded-[60px] p-12 md:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary/20 rounded-full blur-[100px]" />
          
          <div className="relative z-10 flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-secondary font-black tracking-widest uppercase text-sm mb-6"
            >
              <Rocket size={18} className="fill-secondary" />
              Community Driven
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              Share Your Knowledge <br /> 
              <span className="text-secondary">With the World</span>
            </h2>
            <p className="text-white/60 text-lg font-medium leading-relaxed mb-12 max-w-xl">
              Found a great tool or wrote an amazing guide? Contribute it to the club library and help your fellow members grow.
            </p>
            <button className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg hover:bg-secondary hover:text-white transition-all shadow-2xl active:scale-95 flex items-center gap-3 mx-auto lg:mx-0">
              SUBMIT RESOURCE
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative z-10 w-full lg:w-1/3 grid grid-cols-2 gap-4">
            {[Book, FileText, Globe, Shield].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] flex items-center justify-center"
              >
                <Icon size={40} className="text-secondary/40" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResourcesPage;
