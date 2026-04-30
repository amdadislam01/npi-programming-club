"use client";

import React, { useState } from "react";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  XCircle, 
  Download,
  Filter,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  BarChart2
} from "lucide-react";
import { motion } from "framer-motion";

const history = [
  { date: "2026-04-29", time: "09:15 AM", status: "Present", type: "On-site" },
  { date: "2026-04-28", time: "09:05 AM", status: "Present", type: "Remote" },
  { date: "2026-04-27", time: "09:20 AM", status: "Present", type: "On-site" },
  { date: "2026-04-26", time: "-", status: "Absent", type: "-" },
  { date: "2026-04-25", time: "09:10 AM", status: "Present", type: "On-site" },
];

export default function AttendancePage() {
  const [marked, setMarked] = useState(false);

  return (
    <div className="space-y-8">
      {/* Attendance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6">
          <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
            <TrendingUp size={28} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-400">Total Presence</p>
            <h3 className="text-2xl font-bold text-primary">94.5%</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
            <CheckCircle2 size={28} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-400">Days Present</p>
            <h3 className="text-2xl font-bold text-primary">22 Days</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6">
          <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600">
            <XCircle size={28} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-400">Days Absent</p>
            <h3 className="text-2xl font-bold text-primary">1 Day</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Mark Attendance Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-xl font-bold text-primary mb-2">Mark Attendance</h2>
               <p className="text-sm text-slate-500 mb-8">Ready to start your day? Click the button below to mark your presence.</p>
               
               <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Calendar size={18} className="text-secondary" />
                    <span>April 29, 2026 (Wednesday)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Clock size={18} className="text-secondary" />
                    <span>Current Time: 09:45 AM</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <MapPin size={18} className="text-secondary" />
                    <span>Location: NPI Main Campus</span>
                  </div>
               </div>

               <button 
                 onClick={() => setMarked(true)}
                 disabled={marked}
                 className={`w-full py-4 rounded-2xl font-bold text-lg transition-all shadow-lg ${
                   marked 
                    ? 'bg-emerald-500 text-white cursor-not-allowed shadow-emerald-200' 
                    : 'bg-primary text-white hover:bg-slate-800 shadow-slate-200 active:scale-95'
                 }`}
               >
                 {marked ? 'Attendance Marked!' : 'Mark Present'}
               </button>
             </div>
             <div className="absolute right-0 bottom-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"></div>
          </div>

          <div className="bg-primary p-8 rounded-3xl text-white">
             <h3 className="font-bold mb-4 flex items-center gap-2">
                <BarChart2 size={20} className="text-secondary" />
                Monthly Goal
             </h3>
             <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                   <span>Attendance Goal</span>
                   <span className="font-bold">95%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                   <div className="w-[94.5%] h-full bg-secondary"></div>
                </div>
                <p className="text-[10px] text-slate-400">You're only 0.5% away from your goal! Keep it up!</p>
             </div>
          </div>
        </div>

        {/* Attendance History */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
           <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-primary">Attendance History</h2>
              <div className="flex items-center gap-3">
                 <button className="p-2.5 bg-slate-50 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors">
                    <Filter size={18} />
                 </button>
                 <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-xl text-sm font-bold hover:bg-tertiary transition-all">
                    <Download size={18} /> Export
                 </button>
              </div>
           </div>

           <div className="overflow-x-auto">
              <table className="w-full">
                 <thead>
                    <tr className="text-left border-b border-slate-100">
                       <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                       <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Clock In</th>
                       <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                       <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Type</th>
                       <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Action</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50">
                    {history.map((row, i) => (
                      <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                         <td className="py-4 text-sm font-semibold text-primary">{row.date}</td>
                         <td className="py-4 text-sm text-slate-600">{row.time}</td>
                         <td className="py-4">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                               row.status === 'Present' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                            }`}>
                               {row.status}
                            </span>
                         </td>
                         <td className="py-4 text-sm text-slate-500">{row.type}</td>
                         <td className="py-4">
                            <button className="text-xs font-bold text-secondary hover:underline">Details</button>
                         </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>

           <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
              <p className="text-xs text-slate-400 font-medium">Showing 1 to 5 of 22 entries</p>
              <div className="flex items-center gap-2">
                 <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50"><ChevronLeft size={16} /></button>
                 {[1, 2, 3, 4].map(p => (
                   <button key={p} className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${p === 1 ? 'bg-secondary text-white' : 'text-slate-500 hover:bg-slate-50'}`}>{p}</button>
                 ))}
                 <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50"><ChevronRight size={16} /></button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
