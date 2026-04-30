"use client";

import React from "react";
import { Megaphone, Plus, Search, Filter, MoreVertical, Send, Eye, BarChart2, Bell } from "lucide-react";

const announcements = [
  { id: 1, title: "Upcoming National Hackathon", target: "All Members", date: "Today", views: 85, status: "Active" },
  { id: 2, title: "System Maintenance Alert", target: "Technical Team", date: "Yesterday", views: 42, status: "Sent" },
  { id: 3, title: "New Learning Resources Available", target: "All Members", date: "Apr 25, 2026", views: 124, status: "Sent" },
];

export default function AnnouncementsPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <h1 className="text-3xl font-bold text-primary tracking-tight">Broadcast Center</h1>
           <p className="text-slate-500 font-medium mt-1">Send announcements and manage team communication.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-2xl font-bold hover:bg-tertiary transition-all shadow-xl shadow-secondary/20">
           <Plus size={20} /> Create Announcement
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Announcement List */}
         <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center justify-between">
               <div className="flex items-center gap-4 flex-1">
                  <div className="relative flex-1 max-w-xs">
                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                     <input type="text" placeholder="Search history..." className="w-full bg-slate-50 border-none rounded-xl py-2 pl-10 pr-4 text-xs focus:ring-2 focus:ring-secondary/20 outline-none" />
                  </div>
               </div>
               <button className="p-2.5 bg-slate-50 text-slate-500 rounded-xl hover:bg-slate-100"><Filter size={18} /></button>
            </div>

            <div className="space-y-4">
               {announcements.map((a) => (
                 <div key={a.id} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                    <div className="flex items-start justify-between mb-6">
                       <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${a.status === 'Active' ? 'bg-secondary text-white shadow-lg shadow-secondary/20' : 'bg-slate-50 text-slate-400'}`}>
                             <Megaphone size={24} />
                          </div>
                          <div>
                             <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">{a.title}</h3>
                             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">To: {a.target}</p>
                          </div>
                       </div>
                       <button className="p-2 text-slate-300 hover:bg-slate-50 hover:text-primary rounded-xl transition-all"><MoreVertical size={20} /></button>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                       <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                             <Eye size={14} className="text-secondary" /> {a.views} Views
                          </div>
                          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                             <BarChart2 size={14} className="text-secondary" /> Engagement: 92%
                          </div>
                       </div>
                       <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{a.date}</span>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Templates & Analytics */}
         <div className="space-y-10">
            <div className="bg-primary rounded-[40px] p-10 text-white shadow-2xl">
               <h3 className="text-xl font-bold mb-6">Quick Templates</h3>
               <div className="space-y-3">
                  {["Meeting Reminder", "Deadline Alert", "New Resource", "Event Invite"].map((t, i) => (
                    <button key={i} className="w-full p-4 bg-white/5 hover:bg-white/10 rounded-2xl text-left transition-all flex items-center justify-between group">
                       <span className="text-sm font-bold">{t}</span>
                       <Plus size={16} className="text-secondary opacity-0 group-hover:opacity-100 transition-all" />
                    </button>
                  ))}
               </div>
            </div>

            <div className="bg-white rounded-[40px] border border-slate-100 p-8 shadow-sm">
               <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                  <Bell size={20} className="text-secondary" />
                  Notifications
               </h3>
               <div className="space-y-6">
                  {[
                    { text: "Your announcement was delivered to 112 members.", time: "10m ago" },
                    { text: "System broadcast for 'Hackathon' received 45 views.", time: "1h ago" },
                  ].map((n, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></div>
                       <div>
                          <p className="text-xs text-slate-600 leading-relaxed font-medium">{n.text}</p>
                          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{n.time}</span>
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
