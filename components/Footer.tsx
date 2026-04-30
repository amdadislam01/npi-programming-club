"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Globe, MapPin, Send, ArrowUpRight, Home, Info, Compass, Calendar, FolderOpen, Newspaper } from "lucide-react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about", icon: Info },
    { name: "Explore", href: "/explore", icon: Compass },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Resources", href: "/resources", icon: FolderOpen },
    { name: "Blog", href: "/blog", icon: Newspaper },
  ];

  return (
    <footer className="bg-neutral-light border-t border-neutral-dark/5 pt-16 pb-10 relative overflow-hidden font-sans">
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column - Matching Navbar Style */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 group mb-8">
              <div className="relative w-[50px] h-[50px] transition-all duration-500 group-hover:rotate-[360deg]">
                <Image
                  src="/logo.png"
                  alt="NPI Programming Club Logo"
                  fill
                  className="object-contain p-1.5 mix-blend-multiply"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-neutral-dark text-[18px] md:text-[20px] font-[800] whitespace-nowrap tracking-tighter leading-tight group-hover:text-secondary transition-colors">
                  NPI <span className="text-secondary">Programming</span> Club
                </h2>
                <span className="text-[10px] text-neutral-dark/50 uppercase tracking-[0.2em] font-bold">Innovation & Excellence</span>
              </div>
            </Link>
            <p className="text-neutral-dark/60 text-lg leading-relaxed mb-10 max-w-xs font-medium">
              Bridging the gap between academic theory and industry expertise for the next generation.
            </p>
            <div className="flex items-center gap-4">
              {[Globe, Mail, Send].map((Icon, i) => (
                <div key={i} className="w-11 h-11 rounded-xl bg-white border border-neutral-dark/10 flex items-center justify-center hover:border-secondary hover:text-secondary transition-all cursor-pointer group shadow-sm">
                  <Icon size={20} className="text-neutral-dark/40 group-hover:text-secondary transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Ecosystem - Matching Navbar Links */}
          <div>
            <h4 className="text-neutral-dark text-sm uppercase tracking-[0.2em] font-black mb-10">Ecosystem</h4>
            <ul className="space-y-5">
              {navLinks.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-neutral-dark/60 hover:text-secondary font-semibold text-[15px] transition-all flex items-center gap-3 group">
                    <item.icon size={16} className="text-neutral-dark/20 group-hover:text-secondary transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-neutral-dark text-sm uppercase tracking-[0.2em] font-black mb-10">Resources</h4>
            <ul className="space-y-5">
              {navLinks.slice(4).concat([{ name: "Success Stories", href: "#", icon: Compass }]).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-neutral-dark/60 hover:text-secondary font-semibold text-[15px] transition-all flex items-center gap-3 group">
                    <item.icon size={16} className="text-neutral-dark/20 group-hover:text-secondary transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-neutral-dark text-sm uppercase tracking-[0.2em] font-black mb-10">Stay Connected</h4>
            <p className="text-neutral-dark/60 mb-8 font-medium">Receive weekly updates on hackathons and workshops.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white border border-neutral-dark/10 rounded-2xl py-4.5 px-6 text-neutral-dark placeholder:text-neutral-dark/30 focus:outline-none focus:border-secondary transition-all shadow-sm group-hover:shadow-md"
              />
              <button className="absolute right-2 top-2 bottom-2 px-5 bg-secondary text-white rounded-xl hover:bg-secondary/90 transition-all shadow-[0_4px_12px_rgba(13,148,136,0.2)] active:scale-95">
                <ArrowUpRight size={22} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-dark/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-neutral-dark/40 text-[13px] font-bold tracking-tight">
            © {currentYear} NPI PROGRAMMING CLUB. <span className="hidden sm:inline">DEVELOPED WITH PASSION.</span>
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            <Link href="#" className="text-neutral-dark/40 hover:text-secondary text-[13px] font-bold transition-colors">PRIVACY</Link>
            <Link href="#" className="text-neutral-dark/40 hover:text-secondary text-[13px] font-bold transition-colors">TERMS</Link>
            <div className="flex items-center gap-2 text-neutral-dark/40 font-bold text-[13px]">
              <MapPin size={16} className="text-secondary/50" />
              <span>NPI CAMPUS, DHAKA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
