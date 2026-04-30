"use client";

import React from "react";
import { Search, Bell, User, ChevronDown, Plus, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";

export default function LeaderHeader() {
  return (
    <header className="h-24 bg-white border-b border-slate-100 sticky top-0 z-40 px-10 flex items-center justify-between">
      <div className="flex items-center gap-8 flex-1">
        <div className="flex flex-col">
           <h2 className="text-xl font-bold text-primary tracking-tight">Leader Workspace</h2>
           <p className="text-xs text-slate-400 font-medium tracking-wide">Managing NPI Programming Club Team</p>
        </div>

        <div className="flex-1 max-w-md hidden lg:block">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search team members, reports, or tasks..." 
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-4 focus:ring-secondary/5 focus:bg-white focus:border-secondary/30 transition-all outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="hidden sm:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
           <Plus size={18} /> Quick Action
        </button>

        <div className="flex items-center gap-2">
           <button className="relative p-3 text-slate-500 hover:bg-slate-50 rounded-2xl transition-colors">
             <Bell size={22} />
             <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
           </button>
           <button className="p-3 text-slate-500 hover:bg-slate-50 rounded-2xl transition-colors">
             <LayoutGrid size={22} />
           </button>
        </div>

        <div className="h-10 w-px bg-slate-100 mx-2"></div>

        <div className="flex items-center gap-4 cursor-pointer group">
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-tertiary p-0.5 shadow-md group-hover:scale-105 transition-transform">
               <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center overflow-hidden">
                  <User className="text-secondary" size={28} />
               </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-sm font-bold text-primary leading-tight">Admin Leader</span>
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Master Admin</span>
          </div>
          <ChevronDown size={16} className="text-slate-400 group-hover:text-secondary transition-colors" />
        </div>
      </div>
    </header>
  );
}
