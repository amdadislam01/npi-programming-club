"use client";

import React from "react";
import { 
  Users, 
  Search, 
  Filter, 
  MoreVertical, 
  ShieldCheck, 
  ShieldAlert, 
  Ban, 
  UserPlus, 
  Download, 
  Mail,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Activity
} from "lucide-react";
import { motion } from "framer-motion";

const users = [
  { id: 1, name: "Amdad Islam", email: "amdad@npi.edu.bd", role: "Super Admin", status: "Active", joinDate: "2026-01-12", reports: 0 },
  { id: 2, name: "Sakib Ahmed", email: "sakib@npi.edu.bd", role: "Leader", status: "Active", joinDate: "2026-02-05", reports: 0 },
  { id: 3, name: "Nayeem Hossain", email: "nayeem@npi.edu.bd", role: "Member", status: "Banned", joinDate: "2026-03-20", reports: 5 },
  { id: 4, name: "Fahim Shahriar", email: "fahim@npi.edu.bd", role: "Moderator", status: "Active", joinDate: "2026-04-01", reports: 1 },
  { id: 5, name: "Tasnim Ara", email: "tasnim@npi.edu.bd", role: "Member", status: "Pending", joinDate: "2026-04-15", reports: 0 },
];

export default function UserManagementPage() {
  return (
    <div className="space-y-12 text-primary">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
        <div>
           <h1 className="text-4xl font-black text-primary tracking-tight">User Directory</h1>
           <p className="text-slate-500 font-medium mt-2">Oversee all platform participants, manage roles, and enforce security policies.</p>
        </div>
        <div className="flex items-center gap-4">
           <button className="px-6 py-3.5 bg-white border border-slate-200 text-primary rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
              <Download size={18} /> Export CSV
           </button>
           <button className="px-8 py-3.5 bg-secondary text-white rounded-2xl font-black text-sm hover:bg-tertiary transition-all shadow-xl shadow-secondary/20 flex items-center gap-2">
              <UserPlus size={20} /> Create New User
           </button>
        </div>
      </div>

      {/* User Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
         {[
           { label: "Total Accounts", value: "1.2M", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
           { label: "Banned Users", value: "4,208", icon: Ban, color: "text-red-600", bg: "bg-red-50" },
           { label: "Admins/Leaders", value: "842", icon: ShieldCheck, color: "text-secondary", bg: "bg-teal-50" },
           { label: "Active Today", value: "142K", icon: Activity, color: "text-emerald-600", bg: "bg-emerald-50" },
         ].map((stat, i) => (
           <div key={i} className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-xl flex items-center gap-6">
              <div className={`w-16 h-16 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                 <stat.icon size={32} />
              </div>
              <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">{stat.label}</p>
                 <h3 className="text-3xl font-black text-primary tracking-tighter">{stat.value}</h3>
              </div>
           </div>
         ))}
      </div>

      {/* User Table Section */}
      <div className="bg-white rounded-[48px] border border-slate-100 p-12 shadow-2xl">
         <div className="flex flex-wrap items-center justify-between gap-8 mb-12">
            <h2 className="text-2xl font-black text-primary">Advanced Search & Filter</h2>
            <div className="flex flex-wrap items-center gap-4 flex-1 justify-end">
               <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="text" placeholder="Search by name, email, ID, or IP address..." className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:ring-4 focus:ring-secondary/10 outline-none text-primary font-medium" />
               </div>
               <button className="flex items-center gap-2 px-6 py-3.5 bg-slate-50 text-slate-500 border border-slate-200 rounded-2xl font-bold text-xs hover:text-primary transition-all">
                  <Filter size={18} /> Filters
               </button>
            </div>
         </div>

         <div className="overflow-x-auto">
            <table className="w-full">
               <thead>
                  <tr className="text-left border-b border-slate-100">
                     <th className="pb-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] px-4">Entity</th>
                     <th className="pb-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] px-4">Authority</th>
                     <th className="pb-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] px-4">Status</th>
                     <th className="pb-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] px-4">Reg. Date</th>
                     <th className="pb-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] px-4 text-right">Integrity</th>
                     <th className="pb-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] px-4 text-right">Control</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                  {users.map((user) => (
                    <tr key={user.id} className="group hover:bg-slate-50 transition-colors">
                       <td className="py-8 px-4">
                          <div className="flex items-center gap-4">
                             <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 font-black text-lg group-hover:text-secondary group-hover:border-secondary/30 transition-all">
                                {user.name.split(' ').map(n => n[0]).join('')}
                             </div>
                             <div>
                                <h4 className="text-base font-bold text-primary group-hover:text-secondary transition-colors">{user.name}</h4>
                                <p className="text-xs text-slate-400 font-medium">{user.email}</p>
                             </div>
                          </div>
                       </td>
                       <td className="py-8 px-4">
                          <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${
                            user.role === 'Super Admin' ? 'bg-purple-50 text-purple-600 border border-purple-100' :
                            user.role === 'Leader' ? 'bg-secondary/10 text-secondary border border-secondary/20' :
                            user.role === 'Moderator' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                            'bg-slate-50 text-slate-500 border border-slate-200'
                          }`}>
                             {user.role}
                          </span>
                       </td>
                       <td className="py-8 px-4">
                          <div className="flex items-center gap-2">
                             <div className={`w-2 h-2 rounded-full ${
                               user.status === 'Active' ? 'bg-emerald-500 shadow-[0_0_8px_#10B981]' :
                               user.status === 'Banned' ? 'bg-red-500 shadow-[0_0_8px_#EF4444]' :
                               'bg-amber-500 shadow-[0_0_8px_#F59E0B]'
                             }`}></div>
                             <span className={`text-xs font-bold ${
                               user.status === 'Active' ? 'text-emerald-500' :
                               user.status === 'Banned' ? 'text-red-500' : 'text-amber-500'
                             }`}>{user.status}</span>
                          </div>
                       </td>
                       <td className="py-8 px-4 text-sm font-bold text-slate-400">
                          {user.joinDate}
                       </td>
                       <td className="py-8 px-4 text-right">
                          <span className={`text-xs font-black ${user.reports > 0 ? 'text-red-500' : 'text-emerald-500'}`}>
                             {user.reports === 0 ? 'CLEAN' : `${user.reports} REPORTS`}
                          </span>
                       </td>
                       <td className="py-8 px-4 text-right">
                          <button className="p-3 bg-white border border-slate-100 hover:bg-slate-50 rounded-2xl text-slate-400 hover:text-primary transition-all shadow-sm">
                             <MoreHorizontal size={20} />
                          </button>
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>

         <div className="mt-12 flex flex-col md:flex-row items-center justify-between pt-10 border-t border-slate-100 gap-8">
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest">
               Showing <span className="text-primary">1 - 5</span> of <span className="text-primary">1.2M</span> Records
            </div>
            <div className="flex items-center gap-4">
               <button className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-primary transition-all shadow-sm"><ChevronLeft size={20} /></button>
               <div className="flex items-center gap-2">
                  {[1, 2, 3, '...', 42508].map((p, i) => (
                    <button key={i} className={`w-10 h-10 rounded-2xl text-xs font-black transition-all ${p === 1 ? 'bg-secondary text-white shadow-lg shadow-secondary/20' : 'text-slate-400 hover:bg-slate-50 hover:text-primary'}`}>{p}</button>
                  ))}
               </div>
               <button className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-primary transition-all shadow-sm"><ChevronRight size={20} /></button>
            </div>
         </div>
      </div>
    </div>
  );
}
