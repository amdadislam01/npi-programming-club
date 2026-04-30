"use client";

import React, { useState } from "react";
import { 
  Users, 
  UserPlus, 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  Phone, 
  TrendingUp,
  Download,
  CheckCircle2,
  XCircle,
  Clock
} from "lucide-react";
import { motion } from "framer-motion";

const members = [
  { id: 1, name: "Amdad Islam", role: "Full-Stack Developer", email: "amdad@npi.edu.bd", joinDate: "Jan 12, 2026", status: "Active", attendance: "98%" },
  { id: 2, name: "Sakib Ahmed", role: "UI/UX Designer", email: "sakib@npi.edu.bd", joinDate: "Feb 05, 2026", status: "Active", attendance: "92%" },
  { id: 3, name: "Nayeem Hossain", role: "Backend Developer", email: "nayeem@npi.edu.bd", joinDate: "Mar 20, 2026", status: "On Leave", attendance: "85%" },
  { id: 4, name: "Fahim Shahriar", role: "DevOps Engineer", email: "fahim@npi.edu.bd", joinDate: "Apr 01, 2026", status: "Active", attendance: "95%" },
  { id: 5, name: "Tasnim Ara", role: "Frontend Developer", email: "tasnim@npi.edu.bd", joinDate: "Apr 15, 2026", status: "Active", attendance: "100%" },
];

export default function TeamMembersPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <h1 className="text-3xl font-bold text-primary tracking-tight">Team Management</h1>
           <p className="text-slate-500 font-medium mt-1">View, add, and manage all your club members.</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
              <Download size={18} /> Export List
           </button>
           <button className="flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-2xl font-bold hover:bg-tertiary transition-all shadow-xl shadow-secondary/20">
              <UserPlus size={20} /> Add New Member
           </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-[28px] border border-slate-100 shadow-sm flex flex-wrap items-center gap-4">
         <div className="flex-1 min-w-[200px] relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input type="text" placeholder="Search members..." className="w-full bg-slate-50 border-none rounded-xl py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-secondary/20 outline-none" />
         </div>
         <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 text-slate-500 rounded-xl text-xs font-bold hover:bg-slate-100 transition-all">
               <Filter size={16} /> Filter
            </button>
            <select className="bg-slate-50 text-slate-500 rounded-xl text-xs font-bold px-4 py-2.5 outline-none border-none focus:ring-2 focus:ring-secondary/20">
               <option>All Departments</option>
               <option>Engineering</option>
               <option>Design</option>
               <option>Management</option>
            </select>
            <select className="bg-slate-50 text-slate-500 rounded-xl text-xs font-bold px-4 py-2.5 outline-none border-none focus:ring-2 focus:ring-secondary/20">
               <option>Status: All</option>
               <option>Active</option>
               <option>On Leave</option>
               <option>Inactive</option>
            </select>
         </div>
      </div>

      {/* Member Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
         {members.map((member) => (
           <motion.div 
             key={member.id}
             whileHover={{ y: -5 }}
             className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group"
           >
              <div className="flex items-start justify-between mb-6">
                 <div className="relative">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform">
                       <Users size={40} />
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 border-4 border-white rounded-full ${
                      member.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'
                    }`}></div>
                 </div>
                 <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-xl transition-colors">
                    <MoreVertical size={20} />
                 </button>
              </div>

              <div className="space-y-1 mb-8">
                 <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">{member.name}</h3>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{member.role}</p>
              </div>

              <div className="space-y-4 border-t border-slate-50 pt-6">
                 <div className="flex items-center gap-3 text-xs text-slate-500">
                    <Mail size={14} className="text-secondary" />
                    {member.email}
                 </div>
                 <div className="flex items-center gap-3 text-xs text-slate-500">
                    <Clock size={14} className="text-secondary" />
                    Joined {member.joinDate}
                 </div>
                 
                 <div className="flex items-center justify-between pt-4">
                    <div className="space-y-1">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Attendance</p>
                       <p className="text-sm font-bold text-primary">{member.attendance}</p>
                    </div>
                    <div className="flex -space-x-2">
                       {[1, 2, 3].map(i => (
                         <div key={i} className="w-8 h-8 rounded-full bg-slate-50 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-400">
                            +
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                 <button className="py-2.5 bg-slate-50 hover:bg-primary hover:text-white text-primary rounded-xl text-xs font-bold transition-all">Profile</button>
                 <button className="py-2.5 bg-secondary hover:bg-tertiary text-white rounded-xl text-xs font-bold transition-all">Message</button>
              </div>
           </motion.div>
         ))}

         {/* Add New Member Card */}
         <button className="border-4 border-dashed border-slate-100 rounded-[32px] p-8 flex flex-col items-center justify-center gap-4 text-slate-300 hover:border-secondary hover:text-secondary hover:bg-secondary/5 transition-all group">
            <div className="w-20 h-20 rounded-full border-4 border-dashed border-current flex items-center justify-center group-hover:scale-110 transition-transform">
               <UserPlus size={40} />
            </div>
            <span className="font-bold text-sm">Add New Member</span>
         </button>
      </div>
    </div>
  );
}
