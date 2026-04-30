"use client";

import React from "react";
import { 
  Users, 
  ShieldAlert, 
  Activity, 
  BarChart, 
  Cpu, 
  Globe, 
  Server, 
  Zap,
  ArrowUpRight,
  TrendingUp,
  AlertTriangle,
  ChevronRight,
  RefreshCcw,
  Box
} from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
  { label: "Active Users", value: "142,508", change: "+12.4%", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Active Clubs", value: "842", change: "+5.2%", icon: Globe, color: "text-secondary", bg: "bg-teal-50" },
  { label: "Revenue (MTD)", value: "$42,850", change: "+24.1%", icon: BarChart, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "System Load", value: "24%", change: "-2.1%", icon: Cpu, color: "text-purple-600", bg: "bg-purple-50" },
];

const systemLogs = [
  { id: 1, event: "New Club 'Tech Titans' Verified", time: "2 mins ago", level: "info" },
  { id: 2, event: "Unusual Login Attempt - IP 192.168.1.1", time: "15 mins ago", level: "warning" },
  { id: 3, event: "Database Backup Completed", time: "1 hour ago", level: "success" },
  { id: 4, event: "Policy Update Propagated", time: "2 hours ago", level: "info" },
];

export default function SuperAdminHome() {
  return (
    <div className="space-y-12 pb-20 text-primary">
      {/* Platform Status Hero */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">
         <div className="xl:col-span-3 bg-white rounded-[48px] p-12 border border-slate-100 relative overflow-hidden group shadow-xl">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
               <div className="space-y-4">
                  <span className="px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-secondary/20">System Live</span>
                  <h1 className="text-5xl font-black text-primary tracking-tighter">Global Control Center</h1>
                  <p className="text-slate-500 max-w-md font-medium leading-relaxed">Everything is operational. We've seen a 15% increase in cross-club collaboration this week.</p>
                  <div className="flex items-center gap-6 pt-4">
                     <button className="px-8 py-4 bg-primary text-white rounded-2xl font-black text-sm hover:bg-slate-800 transition-all shadow-xl shadow-primary/20 flex items-center gap-2">
                        System Audit <ArrowUpRight size={20} />
                     </button>
                     <button className="px-8 py-4 bg-slate-50 text-primary rounded-2xl font-black text-sm hover:bg-slate-100 transition-all border border-slate-100">
                        View Network
                     </button>
                  </div>
               </div>
               <div className="flex flex-col items-center gap-2 bg-slate-50 p-8 rounded-[40px] border border-slate-100 shadow-sm">
                  <div className="w-24 h-24 rounded-full border-8 border-secondary border-t-transparent animate-spin-slow flex items-center justify-center relative">
                     <span className="text-2xl font-black text-primary">99.9</span>
                  </div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-4">Uptime Index</p>
               </div>
            </div>
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] translate-y-1/2"></div>
         </div>

         <div className="bg-white rounded-[48px] p-10 border border-slate-100 flex flex-col justify-between shadow-xl">
            <div>
               <h3 className="text-xl font-bold text-primary mb-2">Cluster Status</h3>
               <p className="text-xs text-slate-400 mb-8 font-medium">Monitoring 4 regions</p>
               
               <div className="space-y-6">
                  {['US-East', 'EU-West', 'AP-South', 'SA-East'].map((region, i) => (
                    <div key={i} className="flex items-center justify-between">
                       <span className="text-sm font-bold text-slate-500">{region}</span>
                       <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Active</span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <button className="w-full mt-10 py-4 bg-slate-50 hover:bg-slate-100 rounded-[20px] text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-all border border-slate-100">
               Platform Logs <RefreshCcw size={14} className="inline ml-2" />
            </button>
         </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
         {metrics.map((m, i) => (
           <motion.div 
             key={i}
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: i * 0.1 }}
             className="bg-white p-8 rounded-[40px] border border-slate-100 hover:border-secondary/30 transition-all group cursor-default shadow-lg"
           >
              <div className="flex items-center justify-between mb-8">
                 <div className={`w-14 h-14 ${m.bg} ${m.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <m.icon size={28} />
                 </div>
                 <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 rounded-full text-[10px] font-bold text-emerald-600">
                    <TrendingUp size={12} /> {m.change}
                 </div>
              </div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">{m.label}</p>
              <h3 className="text-4xl font-black text-primary mt-2 tracking-tighter">{m.value}</h3>
           </motion.div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Live Platform Activity */}
         <div className="lg:col-span-2 bg-white rounded-[48px] border border-slate-100 p-12 shadow-2xl">
            <div className="flex items-center justify-between mb-12">
               <h2 className="text-3xl font-black text-primary tracking-tight">System Events</h2>
               <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl text-[10px] font-bold text-slate-400">
                     <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                     Live Feed
                  </div>
                  <button className="text-secondary text-sm font-black hover:underline flex items-center gap-1">All Logs <ChevronRight size={18} /></button>
               </div>
            </div>

            <div className="space-y-6">
               {systemLogs.map((log) => (
                 <div key={log.id} className="flex items-center justify-between p-6 bg-slate-50/50 hover:bg-slate-100 rounded-[32px] border border-transparent hover:border-slate-200 transition-all group">
                    <div className="flex items-center gap-6">
                       <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                         log.level === 'warning' ? 'bg-amber-50 text-amber-600' :
                         log.level === 'success' ? 'bg-emerald-50 text-emerald-600' :
                         'bg-secondary/10 text-secondary'
                       }`}>
                          {log.level === 'warning' ? <AlertTriangle size={24} /> : <Zap size={24} />}
                       </div>
                       <div>
                          <h4 className="text-base font-bold text-primary group-hover:text-secondary transition-colors">{log.event}</h4>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{log.time}</p>
                       </div>
                    </div>
                    <button className="p-3 bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-all text-slate-400 hover:text-primary shadow-sm">
                       <ArrowUpRight size={20} />
                    </button>
                 </div>
               ))}
            </div>
         </div>

         {/* Distribution & Performance */}
         <div className="space-y-10">
            <div className="bg-secondary rounded-[48px] p-10 text-white shadow-2xl shadow-secondary/20 relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-6 flex items-center gap-2 text-white">
                     <Box size={24} />
                     Asset Index
                  </h3>
                  <div className="space-y-8 mt-10">
                     {[
                       { label: "Content Scrutiny", value: 94 },
                       { label: "User Retention", value: 82 },
                       { label: "Revenue Growth", value: 68 },
                     ].map((g, i) => (
                       <div key={i} className="space-y-3">
                          <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em]">
                             <span className="text-white/70">{g.label}</span>
                             <span>{g.value}%</span>
                          </div>
                          <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                             <motion.div 
                               initial={{ width: 0 }} 
                               animate={{ width: `${g.value}%` }} 
                               transition={{ duration: 1, delay: i * 0.2 }}
                               className="h-full bg-white"
                             ></motion.div>
                          </div>
                       </div>
                     ))}
                  </div>
                  <button className="w-full mt-12 py-5 bg-white text-secondary rounded-3xl font-black text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl">
                     Optimize Platform
                  </button>
               </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            </div>

            <div className="bg-white rounded-[48px] border border-slate-100 p-10 flex flex-col shadow-xl">
               <div className="flex items-center justify-between mb-10">
                  <h3 className="text-xl font-bold text-primary">Engagement Curve</h3>
                  <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_#10B981]"></div>
               </div>
               <div className="flex-1 flex items-end justify-between h-40 gap-3">
                  {[30, 45, 25, 60, 40, 80, 50, 95, 70, 85].map((h, i) => (
                    <div key={i} className="flex-1 bg-slate-50 rounded-xl relative group">
                       <motion.div 
                         initial={{ height: 0 }} 
                         animate={{ height: `${h}%` }} 
                         className="absolute bottom-0 w-full bg-secondary/30 group-hover:bg-secondary transition-all rounded-xl shadow-lg"
                       ></motion.div>
                    </div>
                  ))}
               </div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-8 text-center">Velocity Monitoring</p>
            </div>
         </div>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
