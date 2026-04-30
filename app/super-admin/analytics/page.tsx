"use client";

import React from "react";
import { BarChart, TrendingUp, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function AnalyticsPage() {
  return (
    <div className="space-y-12 pb-20 text-primary">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
        <div>
           <h1 className="text-4xl font-black text-primary tracking-tight">Global Analytics</h1>
           <p className="text-slate-500 font-medium mt-2">Deep dive into platform-wide metrics, user behavior, and growth forecasting.</p>
        </div>
        <button className="px-8 py-3.5 bg-secondary text-white rounded-2xl font-black text-sm hover:bg-tertiary transition-all shadow-xl shadow-secondary/20">
           Run Predictive Analysis
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-white rounded-[48px] border border-slate-100 p-12 h-96 flex flex-col shadow-2xl">
            <div className="flex items-center justify-between mb-12">
               <h3 className="text-xl font-bold text-primary flex items-center gap-3">
                  <Activity className="text-secondary" />
                  Real-time Traffic
               </h3>
               <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-lg">High Velocity</span>
            </div>
            <div className="flex-1 flex items-end justify-between gap-3">
               {[40, 70, 30, 90, 60, 100, 45, 80, 55, 95, 40, 85, 60, 75, 40].map((h, i) => (
                 <div key={i} className="flex-1 bg-slate-50 rounded-xl relative group">
                    <motion.div initial={{ height: 0 }} animate={{ height: `${h}%` }} className="absolute bottom-0 w-full bg-secondary/30 group-hover:bg-secondary transition-all rounded-xl shadow-sm"></motion.div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-primary rounded-[48px] p-12 flex flex-col shadow-2xl relative overflow-hidden text-white">
            <h3 className="text-xl font-bold mb-12 text-white">Growth Distribution</h3>
            <div className="flex-1 flex items-center justify-center">
               <div className="w-56 h-56 rounded-full border-[20px] border-white/5 relative flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[20px] border-secondary border-t-transparent border-l-transparent"></div>
                  <div className="text-center text-white">
                     <span className="text-5xl font-black">84%</span>
                     <p className="text-[10px] font-black text-white/50 uppercase mt-2 tracking-widest">Efficiency</p>
                  </div>
               </div>
            </div>
            <div className="absolute bottom-10 left-10 right-10 flex justify-between gap-4">
               <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-secondary rounded-full"></div>
                  <span className="text-xs font-bold text-white/70">Organic Growth</span>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-white/20 rounded-full"></div>
                  <span className="text-xs font-bold text-white/70">Referral Base</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
