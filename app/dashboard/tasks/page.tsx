"use client";

import React from "react";
import { CheckSquare, Filter, Plus, Calendar, Clock, User, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const tasks = [
  { id: 1, title: "Implement Auth Middleware", priority: "High", deadline: "Today", status: "In Progress", color: "bg-red-50 text-red-600" },
  { id: 2, title: "Refactor API Routes", priority: "Medium", deadline: "Tomorrow", status: "Todo", color: "bg-amber-50 text-amber-600" },
  { id: 3, title: "Update Dashboard UI", priority: "High", deadline: "May 2", status: "Completed", color: "bg-emerald-50 text-emerald-600" },
];

export default function TasksPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Tasks</h1>
          <p className="text-slate-500">Manage your project assignments and deadlines.</p>
        </div>
        <button className="bg-secondary text-white px-6 py-2.5 rounded-xl font-bold hover:bg-tertiary transition-all flex items-center gap-2 shadow-lg shadow-secondary/20">
          <Plus size={20} /> New Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Todo', 'In Progress', 'Completed'].map((column) => (
          <div key={column} className="bg-slate-50 rounded-3xl p-6 min-h-[600px] border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-primary flex items-center gap-2">
                 <div className={`w-2 h-2 rounded-full ${column === 'Todo' ? 'bg-slate-400' : column === 'In Progress' ? 'bg-amber-500' : 'bg-emerald-500'}`}></div>
                 {column}
              </h3>
              <span className="text-[10px] font-bold text-slate-400 bg-white px-2 py-1 rounded-md border border-slate-100">
                {tasks.filter(t => t.status === column).length}
              </span>
            </div>

            <div className="space-y-4">
              {tasks.filter(t => t.status === column).map((task) => (
                <div key={task.id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${task.color}`}>{task.priority} Priority</span>
                    <button className="p-1.5 text-slate-300 hover:text-primary transition-colors opacity-0 group-hover:opacity-100"><ArrowUpRight size={14} /></button>
                  </div>
                  <h4 className="text-sm font-bold text-primary mb-4 leading-tight">{task.title}</h4>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                      <Clock size={12} />
                      {task.deadline}
                    </div>
                    <div className="flex -space-x-2">
                       {[1, 2].map(i => (
                         <div key={i} className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center overflow-hidden">
                            <User size={12} className="text-slate-400" />
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
