"use client";

import React from "react";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 sticky top-0 z-40 px-8 flex items-center justify-between">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search tasks, events, messages..." 
            className="w-full bg-slate-50 border-none rounded-2xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-secondary/20 transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-slate-500 hover:bg-slate-50 rounded-xl transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="h-8 w-px bg-slate-200 mx-2"></div>

        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="flex flex-col items-end mr-1">
            <span className="text-sm font-semibold text-primary leading-tight">Amdad Islam</span>
            <span className="text-xs font-medium text-secondary">Team Member</span>
          </div>
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-slate-100 border-2 border-slate-200 overflow-hidden flex items-center justify-center group-hover:border-secondary transition-colors">
               <User className="text-slate-400" size={24} />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <ChevronDown size={16} className="text-slate-400 group-hover:text-secondary transition-colors" />
        </div>
      </div>
    </header>
  );
}
