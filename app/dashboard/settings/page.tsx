"use client";

import React, { useState } from "react";
import { 
  User, 
  Lock, 
  Bell, 
  Shield, 
  Eye, 
  Globe, 
  Moon, 
  Trash2,
  ChevronRight,
  Smartphone,
  Mail,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    browser: false,
    mobile: true,
    mentions: true
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="flex items-center justify-between">
         <h1 className="text-3xl font-bold text-primary">Account Settings</h1>
         <button className="bg-secondary text-white px-6 py-2.5 rounded-xl font-bold hover:bg-tertiary transition-all">Save Changes</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Navigation Tabs */}
        <div className="space-y-1">
           {[
             { label: "General", icon: User, active: true },
             { label: "Security", icon: Lock, active: false },
             { label: "Notifications", icon: Bell, active: false },
             { label: "Privacy", icon: Shield, active: false },
             { label: "Devices", icon: Smartphone, active: false },
             { label: "Integrations", icon: Zap, active: false },
           ].map((tab, i) => (
             <button 
               key={i} 
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                 tab.active ? 'bg-white text-secondary shadow-sm' : 'text-slate-500 hover:bg-slate-100'
               }`}
             >
               <tab.icon size={18} />
               {tab.label}
             </button>
           ))}
        </div>

        {/* Content Area */}
        <div className="md:col-span-3 space-y-8">
           {/* General Settings */}
           <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm space-y-8">
              <div>
                 <h3 className="text-lg font-bold text-primary mb-1">General Information</h3>
                 <p className="text-sm text-slate-400">Update your basic account information.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Full Name</label>
                    <input type="text" defaultValue="Amdad Islam" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Email Address</label>
                    <input type="email" defaultValue="amdad@npi.edu.bd" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Biography</label>
                 <textarea className="w-full h-32 bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none" defaultValue="Passionate developer and team member." />
              </div>
           </div>

           {/* Notification Preferences */}
           <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm space-y-6">
              <div>
                 <h3 className="text-lg font-bold text-primary mb-1">Notifications</h3>
                 <p className="text-sm text-slate-400">Manage how you receive updates and alerts.</p>
              </div>

              <div className="space-y-4">
                 {[
                   { label: "Email Notifications", desc: "Receive updates via your registered email", key: "email" },
                   { label: "Browser Notifications", desc: "Show desktop alerts when you're active", key: "browser" },
                   { label: "Mobile Push", desc: "Get notifications on your connected devices", key: "mobile" },
                 ].map((item, i) => (
                   <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                      <div>
                         <h4 className="text-sm font-bold text-primary">{item.label}</h4>
                         <p className="text-xs text-slate-500">{item.desc}</p>
                      </div>
                      <button 
                        onClick={() => setNotifications({...notifications, [item.key]: !notifications[item.key as keyof typeof notifications]})}
                        className={`w-12 h-6 rounded-full transition-all relative ${notifications[item.key as keyof typeof notifications] ? 'bg-secondary' : 'bg-slate-300'}`}
                      >
                         <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${notifications[item.key as keyof typeof notifications] ? 'left-7' : 'left-1'}`}></div>
                      </button>
                   </div>
                 ))}
              </div>
           </div>

           {/* Danger Zone */}
           <div className="bg-red-50 rounded-3xl border border-red-100 p-8 space-y-6">
              <div>
                 <h3 className="text-lg font-bold text-red-900 mb-1">Danger Zone</h3>
                 <p className="text-sm text-red-600/70">Actions that cannot be undone.</p>
              </div>
              
              <div className="flex items-center justify-between">
                 <div>
                    <h4 className="text-sm font-bold text-red-900">Deactivate Account</h4>
                    <p className="text-xs text-red-600/70">Temporarily disable your club membership profile.</p>
                 </div>
                 <button className="px-6 py-2.5 bg-red-100 text-red-700 rounded-xl text-sm font-bold hover:bg-red-200 transition-all">Deactivate</button>
              </div>

              <div className="h-px bg-red-200/50"></div>

              <div className="flex items-center justify-between">
                 <div>
                    <h4 className="text-sm font-bold text-red-900">Delete Account</h4>
                    <p className="text-xs text-red-600/70">Permanently remove all your data from the club database.</p>
                 </div>
                 <button className="px-6 py-2.5 bg-red-600 text-white rounded-xl text-sm font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-200">Delete Permanently</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
