"use client";

import React from "react";
import { BarChart3, TrendingUp, PieChart, Download, Calendar, ArrowUp, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Performance Reports</h1>
          <p className="text-slate-500">Analyze your activity metrics and club contributions.</p>
        </div>
        <div className="flex gap-3">
           <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
              <Calendar size={18} /> Last 30 Days
           </button>
           <button className="flex items-center gap-2 px-6 py-2.5 bg-secondary text-white rounded-xl text-sm font-bold hover:bg-tertiary transition-all shadow-lg shadow-secondary/20">
              <Download size={18} /> Download Full Report
           </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Productivity", value: "+12.5%", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50", trend: "up" },
          { label: "Tasks Finished", value: "48", icon: BarChart3, color: "text-blue-600", bg: "bg-blue-50", trend: "up" },
          { label: "Attendance", value: "94%", icon: PieChart, color: "text-purple-600", bg: "bg-purple-50", trend: "down" },
          { label: "Total Points", value: "12,500", icon: TrendingUp, color: "text-amber-600", bg: "bg-amber-50", trend: "up" },
        ].map((m, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
             <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 ${m.bg} ${m.color} rounded-xl flex items-center justify-center`}>
                   <m.icon size={20} />
                </div>
                <span className={`text-[10px] font-bold flex items-center gap-0.5 ${m.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
                   {m.trend === 'up' ? <ArrowUp size={10} /> : <ArrowDown size={10} />}
                   {m.trend === 'up' ? 'Increase' : 'Decrease'}
                </span>
             </div>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{m.label}</p>
             <h3 className="text-2xl font-bold text-primary mt-1">{m.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* Monthly Activity Chart Placeholder */}
         <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm h-80 flex flex-col">
            <h3 className="font-bold text-primary mb-8">Activity Breakdown</h3>
            <div className="flex-1 flex items-end justify-between gap-4">
               {[40, 70, 45, 90, 65, 80, 50, 95, 60, 75, 40, 85].map((h, i) => (
                 <div key={i} className="flex-1 space-y-2 group flex flex-col items-center">
                    <div className="w-full bg-slate-50 rounded-t-lg relative overflow-hidden group-hover:bg-secondary/10 transition-all cursor-pointer" style={{ height: `${h}%` }}>
                       <div className="absolute bottom-0 left-0 right-0 bg-secondary group-hover:bg-tertiary transition-all" style={{ height: '0%' }}></div>
                       <motion.div initial={{ height: 0 }} animate={{ height: '100%' }} transition={{ delay: i * 0.05 }} className="bg-secondary/20 h-full w-full"></motion.div>
                    </div>
                    <span className="text-[8px] font-bold text-slate-400 group-hover:text-primary transition-colors">M{i+1}</span>
                 </div>
               ))}
            </div>
         </div>

         {/* Distribution Chart Placeholder */}
         <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
            <h3 className="font-bold text-primary mb-8">Contribution Distribution</h3>
            <div className="flex-1 flex items-center justify-center relative">
               <div className="w-48 h-48 rounded-full border-[12px] border-slate-50 relative">
                  <div className="absolute inset-0 rounded-full border-[12px] border-secondary border-t-transparent border-l-transparent -rotate-45"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <span className="text-3xl font-bold text-primary">74%</span>
                     <span className="text-[10px] font-bold text-slate-400 uppercase">Active</span>
                  </div>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-xs font-bold text-primary">Programming Tasks</span>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                  <span className="text-xs font-bold text-slate-500">Other Activities</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
