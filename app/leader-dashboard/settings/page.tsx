"use client";

import React from "react";
import { 
  Settings, 
  Shield, 
  Bell, 
  Users, 
  Database, 
  Globe, 
  Zap, 
  Lock,
  ChevronRight,
  Plus
} from "lucide-react";

export default function LeaderSettingsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <h1 className="text-3xl font-bold text-primary tracking-tight">Control Center</h1>
           <p className="text-slate-500 font-medium mt-1">Configure workspace parameters and security protocols.</p>
        </div>
        <button className="px-6 py-3 bg-secondary text-white rounded-2xl font-bold hover:bg-tertiary transition-all shadow-xl shadow-secondary/20">
           Save All Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
         {/* Navigation */}
         <div className="space-y-2">
            {[
              { label: "Workspace", icon: Globe, active: true },
              { label: "Team Permissions", icon: Shield, active: false },
              { label: "Notifications", icon: Bell, active: false },
              { label: "Integrations", icon: Zap, active: false },
              { label: "Data Backup", icon: Database, active: false },
              { label: "Security", icon: Lock, active: false },
            ].map((item, i) => (
              <button 
                key={i}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-[20px] transition-all ${
                  item.active ? 'bg-white text-secondary shadow-lg shadow-slate-100 font-bold' : 'text-slate-500 hover:bg-slate-100 font-semibold'
                }`}
              >
                 <div className="flex items-center gap-4">
                    <item.icon size={20} />
                    <span className="text-sm">{item.label}</span>
                 </div>
                 {item.active && <ChevronRight size={16} />}
              </button>
            ))}
         </div>

         {/* Content Area */}
         <div className="lg:col-span-3 space-y-10">
            {/* Workspace Settings */}
            <div className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm space-y-10">
               <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Workspace Identity</h3>
                  <p className="text-sm text-slate-400">Public profile and branding for the NPI Programming Club leader interface.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Club Name</label>
                     <input type="text" defaultValue="NPI Programming Club" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-4 focus:ring-secondary/5 outline-none font-bold text-primary" />
                  </div>
                  <div className="space-y-3">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Workspace ID</label>
                     <input type="text" defaultValue="npi-pc-2026-leader" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-4 focus:ring-secondary/5 outline-none font-bold text-slate-400" readOnly />
                  </div>
               </div>

               <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Leadership Statement</label>
                  <textarea className="w-full h-32 bg-slate-50 border-none rounded-3xl py-4 px-6 text-sm focus:ring-4 focus:ring-secondary/5 outline-none resize-none font-medium text-slate-600" defaultValue="Fostering innovation and building the future of technology at NPI." />
               </div>
            </div>

            {/* Team Roles */}
            <div className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm">
               <div className="flex items-center justify-between mb-10">
                  <div>
                     <h3 className="text-xl font-bold text-primary mb-2">Team Roles & Permissions</h3>
                     <p className="text-sm text-slate-400">Define access levels for different team departments.</p>
                  </div>
                  <button className="p-3 bg-secondary/10 text-secondary rounded-2xl hover:bg-secondary hover:text-white transition-all">
                     <Plus size={24} />
                  </button>
               </div>

               <div className="space-y-4">
                  {[
                    { role: "Developer", members: 84, level: "Standard" },
                    { role: "Designer", members: 22, level: "Limited" },
                    { role: "Executive", members: 6, level: "Admin" },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-[28px] group hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
                       <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-slate-400 group-hover:text-secondary">
                             <Users size={24} />
                          </div>
                          <div>
                             <h4 className="text-sm font-bold text-primary">{r.role}</h4>
                             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{r.members} Members Assigned</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-10">
                          <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg ${
                            r.level === 'Admin' ? 'bg-purple-50 text-purple-600' : 
                            r.level === 'Standard' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500'
                          }`}>{r.level} Access</span>
                          <button className="p-2 text-slate-300 hover:text-primary transition-all"><ChevronRight size={20} /></button>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
