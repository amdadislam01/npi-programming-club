"use client";

import React from "react";
import { Search, Bell, User, ChevronDown, Command, Activity, Database, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function SuperAdminHeader() {
  return (
    <header className="h-28 bg-white border-b border-slate-100 sticky top-0 z-40 px-12 flex items-center justify-between text-primary">
      <div className="flex items-center gap-12 flex-1">
        <div className="flex flex-col">
           <h2 className="text-2xl font-black tracking-tight text-primary flex items-center gap-2">
             <Command className="text-secondary" size={24} />
             Supreme Terminal
           </h2>
           <p className="text-xs text-slate-400 font-bold tracking-[0.2em] uppercase">Enterprise Management System</p>
        </div>

        <div className="flex-1 max-w-2xl hidden xl:block">
          <div className="relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search users, clubs, logs, or system entities... (Ctrl + K)" 
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-14 pr-4 text-sm focus:ring-4 focus:ring-secondary/5 focus:bg-white focus:border-secondary/40 transition-all outline-none text-primary placeholder:text-slate-400 font-medium"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden lg:flex items-center gap-6 pr-8 border-r border-slate-100">
           <div className="flex flex-col items-end">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Network Traffic</span>
              <span className="text-sm font-bold text-emerald-600 flex items-center gap-2">
                 <Activity size={14} /> 1.2 GB/s
              </span>
           </div>
           <div className="flex flex-col items-end">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Storage</span>
              <span className="text-sm font-bold text-blue-600 flex items-center gap-2">
                 <Database size={14} /> 84% Full
              </span>
           </div>
        </div>

        <div className="flex items-center gap-3">
           <button className="relative p-3.5 bg-slate-50 hover:bg-slate-100 rounded-[20px] border border-slate-100 text-slate-500 hover:text-primary transition-all">
             <Bell size={22} />
             <span className="absolute top-3.5 right-3.5 w-2.5 h-2.5 bg-secondary rounded-full border-2 border-white"></span>
           </button>
           <button className="p-3.5 bg-slate-50 hover:bg-slate-100 rounded-[20px] border border-slate-100 text-slate-500 hover:text-primary transition-all">
             <Shield size={22} />
           </button>
        </div>

        <div className="flex items-center gap-5 cursor-pointer group pl-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-secondary to-primary p-[1px] shadow-2xl">
               <div className="w-full h-full rounded-[15px] bg-white flex items-center justify-center overflow-hidden">
                  <User className="text-secondary" size={32} />
               </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-4 border-white rounded-full"></div>
          </div>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-[15px] font-black text-primary leading-none">Super Admin</span>
            <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] mt-1">Platform Owner</span>
          </div>
          <ChevronDown size={16} className="text-slate-400 group-hover:text-secondary transition-colors" />
        </div>
      </div>
    </header>
  );
}
