"use client";

import React from "react";
import { 
  Calendar, 
  Filter, 
  Download, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  FileText,
  Search,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Users
} from "lucide-react";
import { motion } from "framer-motion";

const attendanceData = [
  { id: 1, name: "Amdad Islam", time: "09:15 AM", status: "Present", method: "Biometric" },
  { id: 2, name: "Sakib Ahmed", time: "09:30 AM", status: "Late", method: "Manual" },
  { id: 3, name: "Nayeem Hossain", time: "-", status: "Absent", method: "-" },
  { id: 4, name: "Fahim Shahriar", time: "09:05 AM", status: "Present", method: "Biometric" },
  { id: 5, name: "Tasnim Ara", time: "09:00 AM", status: "Present", method: "Biometric" },
];

export default function LeaderAttendancePage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <h1 className="text-3xl font-bold text-primary tracking-tight">Attendance Oversight</h1>
           <p className="text-slate-500 font-medium mt-1">Monitor and manage daily team presence and leave requests.</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
              <Download size={18} /> Daily Report
           </button>
           <button className="flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-2xl font-bold hover:bg-tertiary transition-all shadow-xl shadow-secondary/20">
              <Calendar size={20} /> Mark Manually
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         {/* Stats */}
         {[
           { label: "Present Today", value: "112/124", icon: Users, color: "text-emerald-600", bg: "bg-emerald-50" },
           { label: "On Leave", value: "8", icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
           { label: "Late Arrivals", value: "4", icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
           { label: "Attendance Rate", value: "92%", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50" },
         ].map((stat, i) => (
           <div key={i} className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-5">
              <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center shrink-0`}>
                 <stat.icon size={24} />
              </div>
              <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{stat.label}</p>
                 <h3 className="text-xl font-bold text-primary">{stat.value}</h3>
              </div>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Attendance Log */}
         <div className="lg:col-span-2 bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm">
            <div className="flex items-center justify-between mb-10">
               <h2 className="text-2xl font-bold text-primary">Daily Entry Log</h2>
               <div className="flex items-center gap-3">
                  <div className="relative">
                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                     <input type="text" placeholder="Search entry..." className="bg-slate-50 border-none rounded-xl py-2 pl-10 pr-4 text-xs focus:ring-2 focus:ring-secondary/20 outline-none w-48" />
                  </div>
                  <button className="p-2.5 bg-slate-50 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors"><Filter size={18} /></button>
               </div>
            </div>

            <div className="overflow-x-auto">
               <table className="w-full">
                  <thead>
                     <tr className="text-left border-b border-slate-50">
                        <th className="pb-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Member</th>
                        <th className="pb-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Clock In</th>
                        <th className="pb-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Status</th>
                        <th className="pb-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Method</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                     {attendanceData.map((row) => (
                       <tr key={row.id} className="group hover:bg-slate-50/50 transition-colors">
                          <td className="py-6">
                             <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">
                                   {row.name[0]}
                                </div>
                                <span className="text-sm font-bold text-primary">{row.name}</span>
                             </div>
                          </td>
                          <td className="py-6 text-sm font-medium text-slate-500">{row.time}</td>
                          <td className="py-6">
                             <span className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                                row.status === 'Present' ? 'bg-emerald-50 text-emerald-600' :
                                row.status === 'Late' ? 'bg-amber-50 text-amber-600' :
                                'bg-red-50 text-red-600'
                             }`}>
                                {row.status}
                             </span>
                          </td>
                          <td className="py-6 text-sm font-medium text-slate-400 italic">{row.method}</td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>

            <div className="mt-10 flex items-center justify-between pt-8 border-t border-slate-50">
               <p className="text-xs text-slate-400 font-bold">Updated as of 09:45 AM Today</p>
               <div className="flex items-center gap-2">
                  <button className="p-2 border border-slate-100 rounded-xl text-slate-400 hover:bg-slate-50"><ChevronLeft size={18} /></button>
                  <button className="p-2 border border-slate-100 rounded-xl text-slate-400 hover:bg-slate-50"><ChevronRight size={18} /></button>
               </div>
            </div>
         </div>

         {/* Calendar/Leave Requests */}
         <div className="space-y-10">
            <div className="bg-white rounded-[40px] border border-slate-100 p-8 shadow-sm">
               <h3 className="text-lg font-bold text-primary mb-6">Leave Requests</h3>
               <div className="space-y-4">
                  {[
                    { name: "Sakib Ahmed", reason: "Medical Checkup", duration: "1 Day" },
                    { name: "Nayeem Hossain", reason: "University Exam", duration: "3 Days" },
                  ].map((req, i) => (
                    <div key={i} className="p-5 bg-slate-50 rounded-[24px] space-y-3">
                       <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-primary">{req.name}</h4>
                          <span className="text-[10px] font-bold text-secondary bg-white px-2 py-1 rounded-md shadow-sm">{req.duration}</span>
                       </div>
                       <p className="text-xs text-slate-500">{req.reason}</p>
                       <div className="grid grid-cols-2 gap-2 pt-2">
                          <button className="py-2 bg-emerald-500 text-white rounded-xl text-[10px] font-bold hover:bg-emerald-600 transition-all">Approve</button>
                          <button className="py-2 bg-white text-slate-400 border border-slate-100 rounded-xl text-[10px] font-bold hover:bg-red-50 hover:text-red-500 transition-all">Reject</button>
                       </div>
                    </div>
                  ))}
               </div>
               <button className="w-full mt-6 text-xs font-bold text-secondary hover:underline">View All Requests</button>
            </div>

            <div className="bg-gradient-to-br from-primary to-slate-800 rounded-[40px] p-8 text-white">
               <h3 className="font-bold mb-4">Attendance Quality</h3>
               <div className="flex items-end gap-3 h-32 mb-4">
                  {[30, 45, 60, 40, 80, 55, 90].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/10 rounded-t-lg relative group">
                       <motion.div 
                         initial={{ height: 0 }}
                         animate={{ height: `${h}%` }}
                         className="absolute bottom-0 left-0 right-0 bg-secondary rounded-t-lg group-hover:bg-white transition-colors"
                       ></motion.div>
                    </div>
                  ))}
               </div>
               <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Efficiency Index: High</p>
            </div>
         </div>
      </div>
    </div>
  );
}
