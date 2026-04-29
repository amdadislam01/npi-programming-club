"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, User, Menu, X, Home, Info, Compass, Calendar, FolderOpen, Newspaper } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about", icon: Info },
    { name: "Explore", href: "/explore", icon: Compass },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Resources", href: "/resources", icon: FolderOpen },
    { name: "Blog", href: "/blog", icon: Newspaper },
  ];

  return (
    <nav className="bg-neutral-light/95 backdrop-blur-md w-full h-[80px] flex items-center px-6 md:px-12 fixed top-0 z-50 shadow-sm border-b border-neutral-dark/5">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side: Logo & Club Name */}
        <Link href="/" className="flex items-center gap-2 md:gap-4 group">
          <div className="relative w-[40px] h-[40px] md:w-[50px] md:h-[50px] transition-all duration-500 group-hover:rotate-[360deg]">
            <Image
              src="/logo.png"
              alt="NPI Programming Club Logo"
              fill
              className="object-contain p-1 mix-blend-multiply"
              priority
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-neutral-dark text-[15px] md:text-[18px] font-[800] whitespace-nowrap tracking-tighter leading-tight group-hover:text-secondary transition-colors">
              NPI <span className="text-secondary">Programming</span> Club
            </h1>
            <span className="text-[10px] text-secondary/70 font-bold tracking-tight">(Bug Hunters)</span>
          </div>
        </Link>

        {/* Center: Navigation Links (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-[14px] font-semibold transition-all duration-300 ${
                  isActive 
                    ? "text-secondary bg-secondary/5" 
                    : "text-neutral-dark/70 hover:text-secondary hover:bg-secondary/5"
                }`}
              >
                <link.icon size={18} className={isActive ? "text-secondary" : "text-neutral-dark/40"} />
                {link.name}
                
                {/* Active State Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Side: Search, Avatar, Join Button */}
        <div className="flex items-center gap-3 md:gap-6">

          <Link href="/login" className="hidden sm:flex items-center justify-center w-[40px] h-[40px] rounded-xl bg-white border border-neutral-dark/10 hover:border-secondary cursor-pointer transition-all duration-300 group overflow-hidden shadow-sm">
            <User className="text-neutral-dark group-hover:text-secondary group-hover:scale-110 transition-transform" size={22} />
          </Link>

          <Link href="/register">
            <button className="hidden sm:flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-[24px] py-[10px] rounded-xl font-bold text-[14px] transition-all duration-300 shadow-[0_4px_14px_0_rgba(13,148,136,0.2)] hover:shadow-[0_6px_20px_rgba(13,148,136,0.15)] active:scale-95">
              Join Now
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-neutral-dark p-2 hover:bg-secondary/5 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-neutral-dark/5 flex flex-col items-center py-8 lg:hidden shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col w-full">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-4 text-[16px] py-4 w-full px-8 transition-all ${
                        isActive ? "text-secondary font-extrabold bg-secondary/5 border-l-4 border-secondary" : "text-neutral-dark/70 hover:text-secondary hover:bg-secondary/5"
                      }`}
                    >
                      <link.icon size={20} className={isActive ? "text-secondary" : "text-neutral-dark/40"} />
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="mt-8 flex flex-col items-center gap-4 w-full px-8">
              <Link href="/register" className="w-full">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-secondary text-white w-full py-4 rounded-2xl font-bold text-[16px] shadow-xl shadow-secondary/20 active:scale-95 transition-all"
                >
                  Join the Community
                </button>
              </Link>
              <div className="flex items-center gap-4 py-4 px-6 bg-neutral-medium/30 rounded-2xl w-full border border-neutral-dark/5">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  <User className="text-neutral-dark" size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-neutral-dark/40 uppercase tracking-widest">Profile Status</span>
                  <span className="text-sm font-black text-neutral-dark">Guest Member</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
