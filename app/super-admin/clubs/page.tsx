"use client";

import React from "react";
import { Globe, Plus, CheckCircle, ShieldAlert, Users } from "lucide-react";

export default function ClubManagementPage() {
  return (
    <div className="space-y-12 text-primary">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
        <div>
           <h1 className="text-4xl font-black text-primary tracking-tight">Club Moderation</h1>
           <p className="text-slate-500 font-medium mt-2">Manage all registered programming clubs, verify new entities, and monitor club health.</p>
        </div>
        <button className="px-8 py-3.5 bg-secondary text-white rounded-2xl font-black text-sm hover:bg-tertiary transition-all shadow-xl shadow-secondary/20 flex items-center gap-2">
           <Plus size={20} /> Register Global Club
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
         {[
           { label: "Verified Clubs", value: "842", change: "+12", icon: CheckCircle, color: "text-emerald-600", bg: "bg-emerald-50" },
           { label: "Pending Verification", value: "24", change: "+4", icon: Globe, color: "text-amber-600", bg: "bg-amber-50" },
           { label: "Reported Clubs", value: "3", change: "-2", icon: ShieldAlert, color: "text-red-600", bg: "bg-red-50" },
           { label: "Global Reach", value: "48 Countries", change: "+2", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
         ].map((stat, i) => (
           <div key={i} className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-100/50">
              <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                 <stat.icon size={24} />
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-3xl font-black text-primary tracking-tighter">{stat.value}</h3>
           </div>
         ))}
      </div>

      <div className="bg-white rounded-[48px] border border-slate-100 p-12 shadow-2xl flex flex-col items-center justify-center min-h-[400px] text-center space-y-6">
         <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center text-slate-300">
            <Globe size={48} />
         </div>
         <div className="space-y-2">
            <h3 className="text-2xl font-black text-primary">Advanced Club Matrix</h3>
            <p className="text-slate-400 max-w-sm mx-auto">The club moderation engine is currently processing real-time data from 842 entities.</p>
         </div>
         <div className="flex items-center gap-4 pt-4">
            <button className="px-6 py-2.5 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-200 transition-all border border-slate-200 shadow-sm">Refresh Grid</button>
            <button className="px-6 py-2.5 bg-secondary text-white rounded-xl text-xs font-bold hover:bg-tertiary transition-all shadow-lg shadow-secondary/20">Verify All Pending</button>
         </div>
      </div>
    </div>
  );
}
