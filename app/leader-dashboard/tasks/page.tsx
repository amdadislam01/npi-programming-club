"use client";

import React from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Users,
  LayoutGrid,
  List,
  ChevronRight,
  ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";

const boardColumns = [
  { id: 1, title: "To Do", count: 8, tasks: [
    { id: 101, title: "Security Audit V2", priority: "High", team: 3, deadline: "May 10" },
    { id: 102, title: "Database Migration", priority: "Medium", team: 2, deadline: "May 12" },
  ]},
  { id: 2, title: "In Progress", count: 5, tasks: [
    { id: 201, title: "Frontend Refactoring", priority: "High", team: 4, deadline: "May 05" },
  ]},
  { id: 3, title: "Review", count: 3, tasks: [
    { id: 301, title: "API Documentation", priority: "Low", team: 1, deadline: "Today" },
  ]},
  { id: 4, title: "Completed", count: 42, tasks: [
    { id: 401, title: "Dashboard UI", priority: "High", team: 2, deadline: "Finished" },
  ]},
];

export default function LeaderTasksPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <h1 className="text-3xl font-bold text-primary tracking-tight">Project Tasks</h1>
           <p className="text-slate-500 font-medium mt-1">Orchestrate team assignments and track delivery progress.</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="flex items-center bg-white border border-slate-200 rounded-2xl p-1 shadow-sm">
              <button className="p-2.5 bg-slate-50 text-secondary rounded-xl"><LayoutGrid size={18} /></button>
              <button className="p-2.5 text-slate-400 hover:bg-slate-50 rounded-xl transition-all"><List size={18} /></button>
           </div>
           <button className="flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-2xl font-bold hover:bg-tertiary transition-all shadow-xl shadow-secondary/20">
              <Plus size={20} /> Create Task
           </button>
        </div>
      </div>

      {/* Task Filters */}
      <div className="flex flex-wrap items-center justify-between gap-6 bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
         <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-xs">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
               <input type="text" placeholder="Find a task..." className="w-full bg-slate-50 border-none rounded-xl py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-secondary/20 outline-none" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 text-slate-500 rounded-xl text-xs font-bold hover:bg-slate-100 transition-all">
               <Filter size={16} /> Filters
            </button>
         </div>
         <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
               <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
               <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Active: 14</span>
            </div>
            <div className="flex items-center gap-2">
               <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
               <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Pending: 5</span>
            </div>
         </div>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         {boardColumns.map((col) => (
           <div key={col.id} className="space-y-6">
              <div className="flex items-center justify-between px-2">
                 <h3 className="font-bold text-primary flex items-center gap-2">
                    {col.title}
                    <span className="text-[10px] font-black text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{col.count}</span>
                 </h3>
                 <button className="text-slate-300 hover:text-primary transition-colors"><MoreVertical size={18} /></button>
              </div>

              <div className="space-y-4">
                 {col.tasks.map((task) => (
                   <motion.div 
                     key={task.id}
                     whileHover={{ scale: 1.02 }}
                     className="bg-white p-6 rounded-[28px] border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                   >
                      <div className="flex items-center justify-between mb-4">
                         <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg ${
                           task.priority === 'High' ? 'bg-red-50 text-red-600' :
                           task.priority === 'Medium' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'
                         }`}>
                           {task.priority}
                         </span>
                         <button className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400"><ArrowUpRight size={16} /></button>
                      </div>
                      
                      <h4 className="text-sm font-bold text-primary leading-tight mb-6 group-hover:text-secondary transition-colors">{task.title}</h4>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                         <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            <Calendar size={12} className="text-secondary" />
                            {task.deadline}
                         </div>
                         <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-50 rounded-lg">
                            <Users size={12} className="text-slate-400" />
                            <span className="text-[10px] font-black text-slate-600">{task.team}</span>
                         </div>
                      </div>
                   </motion.div>
                 ))}
                 
                 <button className="w-full py-4 border-2 border-dashed border-slate-100 rounded-[28px] text-slate-300 flex items-center justify-center gap-2 hover:border-secondary hover:text-secondary hover:bg-secondary/5 transition-all">
                    <Plus size={18} />
                    <span className="text-xs font-bold uppercase tracking-widest">Add Item</span>
                 </button>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
}
