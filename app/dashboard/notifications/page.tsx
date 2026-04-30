"use client";

import React from "react";
import { Bell, Check, Filter, Trash2, Clock, Info, AlertTriangle, CheckCircle2 } from "lucide-react";

const notifications = [
  { id: 1, title: "New Assignment", desc: "You have been assigned to 'API Documentation' task.", time: "5 mins ago", type: "info", read: false },
  { id: 2, title: "Meeting Reminder", desc: "Team meeting starts in 30 minutes.", time: "25 mins ago", type: "alert", read: false },
  { id: 3, title: "Task Completed", desc: "Amdad, your submission for 'Landing Page' was approved.", time: "2 hours ago", type: "success", read: true },
];

export default function NotificationsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Notifications</h1>
          <p className="text-slate-500">Stay updated with the latest club activities.</p>
        </div>
        <div className="flex gap-3">
           <button className="text-sm font-bold text-secondary hover:underline">Mark all as read</button>
           <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-500 hover:bg-slate-50"><Filter size={20} /></button>
        </div>
      </div>

      <div className="space-y-4">
        {notifications.map((n) => (
          <div key={n.id} className={`p-6 rounded-3xl border transition-all ${n.read ? 'bg-white border-slate-100' : 'bg-secondary/5 border-secondary/10 shadow-sm'}`}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                n.type === 'info' ? 'bg-blue-50 text-blue-600' :
                n.type === 'alert' ? 'bg-amber-50 text-amber-600' :
                'bg-emerald-50 text-emerald-600'
              }`}>
                {n.type === 'info' && <Info size={24} />}
                {n.type === 'alert' && <AlertTriangle size={24} />}
                {n.type === 'success' && <CheckCircle2 size={24} />}
              </div>
              <div className="flex-1">
                 <div className="flex items-center justify-between mb-1">
                    <h3 className={`font-bold ${n.read ? 'text-primary' : 'text-primary'}`}>{n.title}</h3>
                    <span className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                       <Clock size={12} /> {n.time}
                    </span>
                 </div>
                 <p className="text-sm text-slate-500 leading-relaxed">{n.desc}</p>
                 <div className="flex items-center gap-4 mt-4">
                    {!n.read && <button className="text-xs font-bold text-secondary flex items-center gap-1 hover:underline"><Check size={14} /> Mark as read</button>}
                    <button className="text-xs font-bold text-slate-400 flex items-center gap-1 hover:text-red-500 transition-colors"><Trash2 size={14} /> Delete</button>
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
