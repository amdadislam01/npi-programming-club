"use client";

import React from "react";
import { BarChart3, TrendingUp, PieChart, Download, FileText, Share2, Filter, Zap, ArrowUp, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function LeaderReportsPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <h1 className="text-3xl font-bold text-primary tracking-tight">Analytics & Intelligence</h1>
           <p className="text-slate-500 font-medium mt-1">Deep dive into team performance and club growth metrics.</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
              <Share2 size={18} /> Share Results
           </button>
           <button className="flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-2xl font-bold hover:bg-tertiary transition-all shadow-xl shadow-secondary/20">
              <Download size={20} /> Export Dataset
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {[
           { label: "Overall Performance", value: "94.2%", trend: "+2.4%", color: "text-emerald-600", bg: "bg-emerald-50" },
           { label: "Activity Rate", value: "88%", trend: "+5.1%", color: "text-blue-600", bg: "bg-blue-50" },
           { label: "Goal Success", value: "76/80", trend: "+12", color: "text-purple-600", bg: "bg-purple-50" },
         ].map((stat, i) => (
           <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex items-center justify-between">
              <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
                 <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold ${stat.color} px-3 py-1.5 rounded-xl ${stat.bg}`}>
                 <ArrowUp size={14} /> {stat.trend}
              </div>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm h-96 flex flex-col">
            <div className="flex items-center justify-between mb-10">
               <h3 className="font-bold text-primary text-xl">Efficiency Velocity</h3>
               <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-xl transition-all"><Zap size={20} /></button>
            </div>
            <div className="flex-1 flex items-end justify-between gap-4">
               {[40, 60, 45, 80, 55, 90, 70, 85, 60, 95, 80, 100].map((h, i) => (
                 <div key={i} className="flex-1 flex flex-col items-center gap-3">
                    <div className="w-full bg-slate-50 rounded-xl relative group overflow-hidden" style={{ height: `${h}%` }}>
                       <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/30 transition-all"></div>
                       <motion.div initial={{ height: 0 }} animate={{ height: '100%' }} className="absolute bottom-0 w-full bg-secondary/20"></motion.div>
                    </div>
                    <span className="text-[8px] font-bold text-slate-400">W{i+1}</span>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-primary rounded-[40px] p-10 text-white flex flex-col relative overflow-hidden">
            <div className="relative z-10">
               <h3 className="font-bold text-xl mb-10">Contribution Distribution</h3>
               <div className="flex-1 flex items-center justify-center py-6">
                  <div className="w-48 h-48 rounded-full border-[16px] border-white/5 relative flex items-center justify-center">
                     <div className="absolute inset-0 rounded-full border-[16px] border-secondary border-t-transparent border-l-transparent"></div>
                     <div className="text-center">
                        <span className="text-4xl font-bold">82%</span>
                        <p className="text-[10px] font-black text-slate-400 uppercase mt-1">On Target</p>
                     </div>
                  </div>
               </div>
               <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <span className="text-sm font-bold">Active Projects</span>
                     </div>
                     <span className="text-sm font-bold">64%</span>
                  </div>
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-white/10 rounded-full"></div>
                        <span className="text-sm font-bold text-slate-400">Backlog Items</span>
                     </div>
                     <span className="text-sm font-bold text-slate-400">36%</span>
                  </div>
               </div>
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2"></div>
         </div>
      </div>
    </div>
  );
}
