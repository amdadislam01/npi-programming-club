"use client";

import React, { useState } from "react";
import { 
  Settings2, 
  ToggleRight, 
  Lock, 
  ShieldCheck, 
  Database, 
  Globe, 
  Zap, 
  Bell, 
  Mail, 
  CreditCard,
  Plus,
  Save,
  RefreshCw,
  Cpu,
  Smartphone
} from "lucide-react";
import { motion } from "framer-motion";

export default function SystemConfigPage() {
  const [toggles, setToggles] = useState({
    reg: true,
    maintenance: false,
    api: true,
    social: true,
    debug: false,
    ai: true
  });

  return (
    <div className="space-y-12 pb-20 text-primary">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
        <div>
           <h1 className="text-4xl font-black text-primary tracking-tight">Platform Configuration</h1>
           <p className="text-slate-500 font-medium mt-2">Modify global system parameters, toggles, and security protocols.</p>
        </div>
        <div className="flex items-center gap-4">
           <button className="px-6 py-3.5 bg-white border border-slate-200 text-primary rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
              <RefreshCw size={18} /> Reset Defaults
           </button>
           <button className="px-8 py-3.5 bg-secondary text-white rounded-2xl font-black text-sm hover:bg-tertiary transition-all shadow-xl shadow-secondary/20 flex items-center gap-2">
              <Save size={20} /> Deploy Changes
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
         {/* System Toggles */}
         <div className="xl:col-span-1 space-y-10">
            <div className="bg-white rounded-[48px] border border-slate-100 p-10 shadow-xl space-y-8">
               <div>
                  <h2 className="text-xl font-bold text-primary mb-2">Feature Toggles</h2>
                  <p className="text-xs text-slate-400 font-medium">Instantly enable or disable core platform features.</p>
               </div>
               
               <div className="space-y-6">
                  {[
                    { label: "New User Registration", key: "reg", desc: "Allow new accounts to be created" },
                    { label: "Maintenance Mode", key: "maintenance", desc: "Lock the platform for updates" },
                    { label: "Public API Access", key: "api", desc: "Allow external developers to connect" },
                    { label: "Social Integrations", key: "social", desc: "Enable OAuth and social sharing" },
                    { label: "Predictive Analytics", key: "ai", desc: "Use ML models for forecasting" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-5 bg-slate-50/50 rounded-[28px] border border-slate-100 transition-colors hover:bg-slate-50">
                       <div className="max-w-[70%]">
                          <h4 className="text-sm font-bold text-primary">{item.label}</h4>
                          <p className="text-[10px] text-slate-400 mt-0.5">{item.desc}</p>
                       </div>
                       <button 
                         onClick={() => setToggles({...toggles, [item.key]: !toggles[item.key as keyof typeof toggles]})}
                         className={`w-14 h-8 rounded-full transition-all relative ${toggles[item.key as keyof typeof toggles] ? 'bg-secondary shadow-[0_0_15px_#0D9488]' : 'bg-slate-200'}`}
                       >
                          <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-all ${toggles[item.key as keyof typeof toggles] ? 'left-7' : 'left-1'}`}></div>
                       </button>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-[48px] p-10 border border-red-400 relative overflow-hidden shadow-2xl">
               <h3 className="text-xl font-bold text-white mb-4">Supreme Override</h3>
               <p className="text-sm text-white/80 leading-relaxed mb-10">Emergency system lockdown protocol. This will disconnect all active sessions across the platform.</p>
               <button className="w-full py-4 bg-white text-red-600 rounded-2xl font-black text-sm hover:bg-slate-50 transition-all shadow-xl shadow-red-900/10">
                  SYSTEM LOCKDOWN
               </button>
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </div>
         </div>

         {/* Detailed Config Sections */}
         <div className="xl:col-span-2 space-y-10">
            {/* Global Settings */}
            <div className="bg-white rounded-[48px] border border-slate-100 p-12 shadow-2xl space-y-12">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Platform Name</label>
                     <div className="relative">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input type="text" defaultValue="NPI Programming Club" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 pl-12 text-sm focus:ring-4 focus:ring-secondary/5 outline-none text-primary font-bold" />
                     </div>
                  </div>
                  <div className="space-y-4">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Primary Support Email</label>
                     <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input type="email" defaultValue="supreme-support@npi.edu.bd" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 pl-12 text-sm focus:ring-4 focus:ring-secondary/5 outline-none text-primary font-bold" />
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { label: "API Rate Limit", value: "10k/min", icon: Zap },
                    { label: "Max Storage/Club", value: "50 GB", icon: Database },
                    { label: "Active Sessions", value: "Unlimited", icon: Smartphone },
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-slate-50/50 rounded-3xl border border-slate-100 flex flex-col gap-4">
                       <item.icon className="text-secondary" size={24} />
                       <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                          <input type="text" defaultValue={item.value} className="bg-transparent border-none p-0 text-lg font-bold text-primary outline-none w-full" />
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Infrastructure Matrix */}
            <div className="bg-white rounded-[48px] border border-slate-100 p-12 shadow-2xl">
               <div className="flex items-center justify-between mb-10">
                  <h3 className="text-2xl font-black text-primary">Security Infrastructure</h3>
                  <button className="p-3 bg-secondary/10 rounded-2xl text-secondary border border-secondary/20 hover:bg-secondary hover:text-white transition-all shadow-sm">
                     <ShieldCheck size={24} />
                  </button>
               </div>
               
               <div className="space-y-6">
                  {[
                    { label: "SSL Certificate", status: "Active", expiry: "242 Days Left", icon: Lock },
                    { label: "Encryption Standard", status: "AES-256", expiry: "Enterprise Grade", icon: ShieldCheck },
                    { label: "Threat Detection", status: "Enabled", expiry: "99.9% Coverage", icon: Cpu },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-slate-50/50 rounded-[32px] border border-slate-100 group hover:border-secondary/30 transition-all hover:bg-white shadow-sm hover:shadow-lg">
                       <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-secondary shadow-sm">
                             <s.icon size={24} />
                          </div>
                          <div>
                             <h4 className="text-sm font-bold text-primary">{s.label}</h4>
                             <p className="text-xs text-slate-400 font-medium">{s.expiry}</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_#10B981]"></span>
                          <span className="text-xs font-black text-emerald-500 uppercase tracking-widest">{s.status}</span>
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
