"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, MapPin, Clock, ArrowRight, 
  Search, Filter, ChevronRight, Video, 
  Users, Trophy, Zap, Radio
} from "lucide-react";
import styles from "./Events.module.css";

const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Workshops", "Hackathons", "Meetups", "Seminars"];

  const events = [
    {
      id: 1,
      type: "Hackathons",
      title: "NPI Code-Sprint 2026",
      status: "Upcoming",
      date: "MAY 15-17",
      time: "09:00 AM",
      location: "Main Auditorium / Online",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60",
      attendees: "250+ Registered"
    },
    {
      id: 2,
      type: "Workshops",
      title: "Mastering Next.js 16 & Tailwind 4",
      status: "Live",
      date: "TODAY",
      time: "03:00 PM",
      location: "Room 402, CS Dept",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=60",
      attendees: "45 Live"
    },
    {
      id: 3,
      type: "Meetups",
      title: "Monthly Dev-Sync: AI Edition",
      status: "Upcoming",
      date: "JUN 05",
      time: "05:30 PM",
      location: "Club Lounge",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=60",
      attendees: "80+ Expected"
    },
    {
      id: 4,
      type: "Seminars",
      title: "Career in Big Tech: Expert Talk",
      status: "Upcoming",
      date: "JUN 12",
      time: "11:00 AM",
      location: "Online via Zoom",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=60",
      attendees: "150+ Spots Left"
    }
  ];

  const filteredEvents = activeFilter === "All" 
    ? events 
    : events.filter(e => e.type === activeFilter);

  return (
    <main className="min-h-screen bg-neutral-light pb-24">
      {/* Hero Section */}
      <section className={`pt-24 pb-16 px-6 ${styles.eventHero}`}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-secondary font-black tracking-widest uppercase text-sm mb-6"
              >
                <Zap size={18} className="fill-secondary" />
                Never Miss a Beat
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-primary mb-8 tracking-tighter"
              >
                Experience the <br /> 
                <span className="text-secondary">Club Energy</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-neutral-dark/60 font-medium mb-10 leading-relaxed"
              >
                From massive hackathons to intimate skill-building workshops, we host events that transform students into professional engineers.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all active:scale-95 shadow-xl shadow-primary/10">
                  <Calendar size={20} />
                  Sync Calendar
                </button>
                <button className="bg-white text-primary border border-neutral-dark/10 px-8 py-4 rounded-2xl font-bold hover:bg-neutral-light transition-all">
                  Request Event
                </button>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative hidden lg:block"
            >
              <div className="w-80 h-80 rounded-[40px] bg-secondary/10 absolute -top-8 -right-8 animate-pulse" />
              <div className="w-80 h-80 rounded-[60px] bg-primary p-12 flex flex-col justify-center items-center text-center relative z-10 shadow-2xl">
                <div className="text-white/60 text-sm font-black tracking-widest uppercase mb-4">Next Big Event</div>
                <div className="text-white text-4xl font-black mb-2">CODE-SPRINT</div>
                <div className="text-secondary text-5xl font-black mb-6 tracking-tighter">MAY 15</div>
                <button className="bg-white text-primary px-6 py-3 rounded-xl font-bold text-sm hover:bg-secondary hover:text-white transition-all">
                  GET DETAILS
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-white p-4 rounded-3xl border border-neutral-dark/5 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${
                  activeFilter === f 
                    ? styles.filterTabActive 
                    : "text-neutral-dark/50 hover:bg-neutral-light hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4 w-full lg:w-auto px-4 border-l border-neutral-dark/10">
            <Search className="text-neutral-dark/30" size={20} />
            <input 
              type="text" 
              placeholder="Search by name..." 
              className="w-full lg:w-64 bg-transparent outline-none font-medium placeholder:text-neutral-dark/30"
            />
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`group bg-white rounded-[40px] overflow-hidden border border-neutral-dark/5 shadow-sm flex flex-col sm:flex-row h-full ${styles.eventCard}`}
              >
                {/* Image Section */}
                <div className="relative w-full sm:w-2/5 min-h-[240px]">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 left-4 px-4 py-3 rounded-2xl ${styles.dateBadge} text-center shadow-lg`}>
                    <div className="text-[10px] font-black text-secondary uppercase tracking-tighter">
                      {event.date.split(' ')[0]}
                    </div>
                    <div className="text-xl font-black text-primary tracking-tighter">
                      {event.date.split(' ')[1]}
                    </div>
                  </div>
                  {event.status === "Live" && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-black uppercase tracking-widest shadow-lg">
                      <div className={`w-2 h-2 bg-white rounded-full ${styles.statusLive}`} />
                      LIVE NOW
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em]">
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-primary mb-6 group-hover:text-secondary transition-colors leading-tight">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3 text-neutral-dark/60 text-sm font-semibold">
                        <Clock size={16} className="text-secondary" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-3 text-neutral-dark/60 text-sm font-semibold">
                        <MapPin size={16} className="text-secondary" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-3 text-neutral-dark/60 text-sm font-semibold">
                        <Users size={16} className="text-secondary" />
                        {event.attendees}
                      </div>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-between bg-neutral-light group-hover:bg-secondary group-hover:text-white px-6 py-4 rounded-2xl font-black text-xs transition-all tracking-widest">
                    {event.status === "Upcoming" ? "REGISTER NOW" : "JOIN LIVE SESSION"}
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Stats / Proof of Energy */}
      <section className="container mx-auto px-6 py-24">
        <div className="bg-primary rounded-[60px] p-12 md:p-24 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
              Hosted over <span className="text-secondary">50+ Global Events</span> this year alone.
            </h2>
            <p className="text-white/60 font-medium text-lg leading-relaxed">
              We don't just teach code; we build the platform for you to showcase it to the world.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 relative z-10">
            {[
              { val: "10k+", label: "Attendees" },
              { val: "25+", label: "Partners" },
              { val: "100%", label: "Free Access" },
              { val: "12", label: "Countries" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-secondary text-4xl font-black mb-1">{stat.val}</div>
                <div className="text-white/40 text-[10px] font-black uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventsPage;
