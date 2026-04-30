"use client";

import React from "react";
import { Layers, Plus } from "lucide-react";

export default function TeamOversightPage() {
  return (
    <div className="space-y-12 text-primary">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
        <div>
           <h1 className="text-4xl font-black text-primary tracking-tight">Team Oversight</h1>
           <p className="text-slate-500 font-medium mt-2">Global monitoring of all functional teams and cross-club units.</p>
        </div>
        <button className="px-8 py-3.5 bg-secondary text-white rounded-2xl font-black text-sm hover:bg-tertiary transition-all shadow-xl shadow-secondary/20 flex items-center gap-2">
           <Plus size={20} /> Deploy Global Team
        </button>
      </div>

      <div className="bg-white rounded-[48px] border border-slate-100 p-12 min-h-[500px] flex flex-col items-center justify-center text-center shadow-2xl">
         <div className="w-24 h-24 rounded-[32px] bg-secondary/10 flex items-center justify-center text-secondary mb-8 shadow-xl">
            <Layers size={48} />
         </div>
         <h2 className="text-2xl font-black text-primary mb-4">Team Integrity Engine</h2>
         <p className="text-slate-400 max-w-md mx-auto leading-relaxed">The global team management terminal is currently synchronizing metadata from all 842 clusters.</p>
         <div className="mt-10 flex gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 text-xs font-bold text-slate-400">
               <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
               Syncing 2,408 Members
            </div>
         </div>
      </div>
    </div>
  );
}
