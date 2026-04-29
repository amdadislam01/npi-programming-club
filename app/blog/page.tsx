"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Calendar, Clock, ChevronRight, 
  ArrowRight, Mail, Tag, User, 
  MessageSquare, Share2, Filter, Zap
} from "lucide-react";
import styles from "./Blog.module.css";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Tutorials", "Tech News", "Events", "Career", "Open Source"];

  const blogPosts = [
    {
      id: 1,
      title: "Mastering Next.js 16: What's New and Why It Matters",
      excerpt: "Deep dive into the latest features of Next.js 16, from partial prerendering to the new streaming API. Learn how to leverage these tools for lightning-fast apps.",
      author: "Ariful Islam",
      date: "May 12, 2026",
      readTime: "8 min read",
      category: "Tutorials",
      image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&auto=format&fit=crop&q=60",
      isFeatured: true
    },
    {
      id: 2,
      title: "The Rise of AI-Driven Development in 2026",
      excerpt: "How AI agents are reshaping the workflow of modern developers and why prompt engineering is the new essential skill.",
      author: "Sarah J.",
      date: "May 10, 2026",
      readTime: "5 min read",
      category: "Tech News",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      title: "Recap: NPI Annual Hackathon Highlights",
      excerpt: "Relive the excitement of our biggest event of the year. From innovative solutions to sleepless nights, here's what happened.",
      author: "Event Team",
      date: "May 05, 2026",
      readTime: "12 min read",
      category: "Events",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 4,
      title: "Building Scalable Microservices with Go",
      excerpt: "Why Go is becoming the industry standard for backend infrastructure and how to build your first service.",
      author: "Mahfuzur R.",
      date: "May 02, 2026",
      readTime: "10 min read",
      category: "Tutorials",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 5,
      title: "Landing Your First Remote Tech Job",
      excerpt: "A comprehensive guide to building a portfolio and interviewing for global remote positions in today's market.",
      author: "Career Coach",
      date: "April 28, 2026",
      readTime: "7 min read",
      category: "Career",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 6,
      title: "Why Open Source is Your Best Teacher",
      excerpt: "The benefits of contributing to open source projects and how it can accelerate your learning curve.",
      author: "Tanvir H.",
      date: "April 25, 2026",
      readTime: "6 min read",
      category: "Open Source",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(p => p.isFeatured);

  return (
    <main className="min-h-screen bg-neutral-light pb-24">
      {/* Hero Section */}
      <section className={`pt-16 pb-16 px-6 ${styles.blogHero}`}>
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-widest mb-6"
          >
            <Zap size={14} className="fill-secondary" />
            The Knowledge Hub
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-primary mb-6 tracking-tighter"
          >
            Insights from the <br /> 
            <span className="text-secondary text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary">Coding Frontier</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-dark/60 font-medium max-w-2xl mx-auto mb-12"
          >
            Explore tutorials, tech trends, and community stories curated by the NPI Programming Club's elite members.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`max-w-xl mx-auto relative group flex items-center p-2 rounded-2xl ${styles.glassInput}`}
          >
            <Search className="ml-4 text-neutral-dark/30" size={20} />
            <input 
              type="text" 
              placeholder="Search articles, tags, or authors..." 
              className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-primary font-medium"
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {!searchTerm && activeCategory === "All" && featuredPost && (
        <section className="container mx-auto px-6 mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`rounded-[48px] overflow-hidden flex flex-col lg:flex-row items-center shadow-2xl ${styles.featuredCard}`}
          >
            <div className="w-full lg:w-1/2 h-[300px] lg:h-[500px] relative">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest">
                Featured Article
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col items-start relative z-10">
              <div className="flex items-center gap-4 text-white/40 font-bold text-xs uppercase tracking-[0.2em] mb-6">
                <span>{featuredPost.category}</span>
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <span>{featuredPost.readTime}</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-white/60 text-lg font-medium leading-relaxed mb-10 line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary font-black">
                    {featuredPost.author[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold">{featuredPost.author}</div>
                    <div className="text-white/40 text-xs">{featuredPost.date}</div>
                  </div>
                </div>
                <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-secondary hover:text-white transition-all flex items-center gap-2 group">
                  READ ARTICLE
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Categories & Filter */}
      <section className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-neutral-dark/5 pb-8">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
                  activeCategory === cat 
                    ? "bg-primary text-white shadow-xl shadow-primary/20" 
                    : "text-neutral-dark/40 hover:text-primary hover:bg-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 text-neutral-dark/40 font-bold text-xs uppercase tracking-widest">
            <Filter size={16} />
            SORT BY: <span className="text-primary cursor-pointer hover:text-secondary">NEWEST FIRST</span>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.05 }}
                className={`bg-white rounded-[40px] overflow-hidden border border-neutral-dark/5 flex flex-col group cursor-pointer ${styles.blogCard}`}
              >
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className={styles.categoryTag}>{post.category}</span>
                  </div>
                </div>
                
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-neutral-dark/40 font-bold text-[10px] uppercase tracking-widest mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="w-1 h-1 rounded-full bg-neutral-dark/10" />
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-primary mb-4 leading-tight group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-neutral-dark/60 font-medium leading-relaxed mb-8 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="pt-8 border-t border-neutral-dark/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-neutral-light flex items-center justify-center text-primary text-[10px] font-black border border-neutral-dark/5">
                        {post.author[0]}
                      </div>
                      <span className="text-sm font-bold text-primary/70">{post.author}</span>
                    </div>
                    <div className="text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-300">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-32 text-center">
            <div className="w-24 h-24 bg-neutral-dark/5 rounded-full flex items-center justify-center mx-auto mb-8 text-neutral-dark/20">
              <Search size={48} />
            </div>
            <h3 className="text-3xl font-black text-primary mb-4">No stories match your search</h3>
            <p className="text-neutral-dark/40 font-medium text-lg">Try adjusting your filters or search keywords.</p>
          </div>
        )}

        {filteredPosts.length > 0 && (
          <div className="mt-20 text-center">
            <button className="bg-white border border-neutral-dark/10 text-primary px-12 py-5 rounded-2xl font-black text-lg hover:border-secondary hover:text-secondary transition-all shadow-sm hover:shadow-xl active:scale-95">
              LOAD MORE STORIES
            </button>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-6">
        <div className={`rounded-[60px] p-12 md:p-24 text-center relative ${styles.newsletterCard}`}>
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl"
            >
              <Mail size={40} className="text-white" />
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              Stay Ahead of the <br /> <span className="text-primary/40 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Technology Curve</span>
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl font-medium mb-12 leading-relaxed">
              Join 1,000+ developers who receive our weekly digest on tech breakthroughs, 
              tutorial releases, and exclusive club announcements.
            </p>

            <form className="flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-md p-2 rounded-3xl border border-white/20 shadow-2xl">
              <input 
                type="email" 
                placeholder="Enter your professional email" 
                className="w-full bg-transparent border-none outline-none px-6 py-4 text-white font-medium placeholder:text-white/40"
              />
              <button className="w-full sm:w-auto bg-white text-secondary px-10 py-5 rounded-2xl font-black text-lg hover:bg-primary hover:text-white transition-all shadow-xl active:scale-95 whitespace-nowrap">
                SUBSCRIBE NOW
              </button>
            </form>
            
            <p className="mt-8 text-white/40 text-sm font-bold tracking-widest uppercase">
              No spam. Just pure technical excellence.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
