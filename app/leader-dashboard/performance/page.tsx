"use client";

import React from "react";
import { Trophy, Medal, Target, TrendingUp, Star, Users, ArrowUpRight, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const leaderboard = [
  { rank: 1, name: "Amdad Islam", points: 2450, accuracy: "98%", tasks: 42, color: "text-amber-500" },
  { rank: 2, name: "Sakib Ahmed", points: 2120, accuracy: "94%", tasks: 38, color: "text-slate-400" },
  { rank: 3, name: "Tasnim Ara", points: 1980, accuracy: "96%", tasks: 35, color: "text-amber-700" },
];

export default function PerformancePage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <h1 className="text-3xl font-bold text-primary tracking-tight">Team Excellence</h1>
           <p className="text-slate-500 font-medium mt-1">Track achievements, rankings, and individual growth metrics.</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-2xl font-bold hover:bg-tertiary transition-all shadow-xl shadow-secondary/20">
              <Star size={20} /> Reward Points
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Leaderboard */}
         <div className="lg:col-span-2 bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm">
            <div className="flex items-center justify-between mb-10">
               <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
                  <Trophy className="text-amber-500" size={32} />
                  Top Performers
               </h2>
               <button className="text-secondary text-sm font-bold hover:underline">Full Leaderboard</button>
            </div>
            
            <div className="space-y-6">
               {leaderboard.map((m) => (
                 <div key={m.rank} className="flex items-center justify-between p-6 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:scale-[1.02] transition-all rounded-[32px] border border-transparent hover:border-slate-100 group">
                    <div className="flex items-center gap-6">
                       <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl ${m.color}`}>
                          #{m.rank}
                       </div>
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 font-bold">
                             {m.name[0]}
                          </div>
                          <div>
                             <h4 className="text-sm font-bold text-primary">{m.name}</h4>
                             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{m.tasks} Tasks Completed</p>
                          </div>
                       </div>
                    </div>
                    <div className="flex items-center gap-8">
                       <div className="text-right">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Accuracy</p>
                          <p className="text-sm font-bold text-emerald-500">{m.accuracy}</p>
                       </div>
                       <div className="text-right min-w-[80px]">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Points</p>
                          <p className="text-lg font-black text-primary">{m.points}</p>
                       </div>
                       <button className="p-2.5 bg-white text-slate-300 hover:text-secondary rounded-xl transition-all shadow-sm">
                          <ArrowUpRight size={18} />
                       </button>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Goals & Metrics */}
         <div className="space-y-10">
            <div className="bg-gradient-to-br from-primary to-slate-900 rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                     <Target className="text-secondary" size={24} />
                     Team Goals
                  </h3>
                  <div className="space-y-6">
                     {[
                       { label: "Quarterly Target", value: 85 },
                       { label: "Resource Mastery", value: 62 },
                     ].map((g, i) => (
                       <div key={i} className="space-y-3">
                          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest">
                             <span className="text-slate-400">{g.label}</span>
                             <span>{g.value}%</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                             <motion.div initial={{ width: 0 }} animate={{ width: `${g.value}%` }} className="h-full bg-secondary"></motion.div>
                          </div>
                       </div>
                     ))}
                  </div>
                  <button className="w-full mt-10 py-4 bg-white/5 hover:bg-white/10 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all">Adjust Strategy</button>
               </div>
               <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            </div>

            <div className="bg-white rounded-[40px] border border-slate-100 p-8 shadow-sm">
               <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                  <TrendingUp size={20} className="text-secondary" />
                  Growth Matrix
               </h3>
               <div className="flex items-end justify-between h-32 gap-2">
                  {[40, 70, 50, 90, 60, 85].map((h, i) => (
                    <div key={i} className="flex-1 bg-slate-50 rounded-xl relative group">
                       <motion.div 
                         initial={{ height: 0 }}
                         animate={{ height: `${h}%` }}
                         className="absolute bottom-0 left-0 right-0 bg-secondary/20 group-hover:bg-secondary transition-all rounded-xl"
                       ></motion.div>
                    </div>
                  ))}
               </div>
               <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-6 text-center">Monthly Efficiency Curve</p>
            </div>
         </div>
      </div>
    </div>
  );
}
