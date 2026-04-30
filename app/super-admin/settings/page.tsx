"use client";

import React from "react";
import { Settings, Shield, Lock } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 text-primary">
       <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
        <div>
           <h1 className="text-4xl font-black text-primary tracking-tight">Admin Profile</h1>
           <p className="text-slate-500 font-medium mt-2">Manage your super-administrator account and security credentials.</p>
        </div>
      </div>
      <div className="bg-white rounded-[48px] border border-slate-100 p-12 space-y-12 shadow-2xl">
         <div className="flex items-center gap-8">
            <div className="w-32 h-32 rounded-[40px] bg-slate-50 flex items-center justify-center text-secondary border border-slate-100 shadow-xl">
               <Settings size={64} />
            </div>
            <div>
               <h3 className="text-2xl font-black text-primary">Supreme Authority</h3>
               <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Level 10 Admin Access</p>
            </div>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { label: "Two-Factor Auth", status: "Active", icon: Shield },
              { label: "IP Restriction", status: "Enabled", icon: Lock },
            ].map((s, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between group hover:border-secondary transition-all hover:bg-white shadow-sm hover:shadow-lg">
                 <div className="flex items-center gap-4">
                    <s.icon className="text-slate-400 group-hover:text-secondary" size={24} />
                    <span className="text-sm font-bold text-primary">{s.label}</span>
                 </div>
                 <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{s.status}</span>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
