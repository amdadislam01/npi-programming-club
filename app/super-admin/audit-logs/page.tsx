"use client";

import React from "react";
import { History, Terminal, Download, Lock, AlertTriangle, Filter, Search } from "lucide-react";

const logs = [
  { id: 1, action: "User Role Modified", target: "Sakib Ahmed", admin: "Super Admin", time: "10:45:02 AM", level: "info" },
  { id: 2, action: "System Config Updated", target: "API Rate Limit", admin: "Super Admin", time: "10:30:15 AM", level: "warning" },
  { id: 3, action: "New Admin Promoted", target: "Fahim Shahriar", admin: "Super Admin", time: "09:12:44 AM", level: "success" },
  { id: 4, action: "Platform Maintenance Start", target: "System-wide", admin: "Automation", time: "01:00:00 AM", level: "info" },
];

export default function AuditLogsPage() {
  return (
    <div className="space-y-12 text-primary">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
        <div>
           <h1 className="text-4xl font-black text-primary tracking-tight">System Audit Logs</h1>
           <p className="text-slate-500 font-medium mt-2">Immutable history of all critical platform operations and administrative actions.</p>
        </div>
        <button className="px-8 py-3.5 bg-white border border-slate-200 text-primary rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
           <Download size={20} /> Export Audit Trail
        </button>
      </div>

      <div className="bg-white rounded-[48px] border border-slate-100 p-12 shadow-2xl">
         <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 relative">
               <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
               <input type="text" placeholder="Search audit trail by entity, action, or administrator..." className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:ring-4 focus:ring-secondary/5 outline-none text-primary font-medium" />
            </div>
            <button className="p-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-slate-400 hover:text-primary transition-all shadow-sm"><Filter size={20} /></button>
         </div>

         <div className="space-y-4">
            {logs.map((log) => (
              <div key={log.id} className="p-6 bg-slate-50/50 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-lg transition-all group flex items-center justify-between">
                 <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      log.level === 'warning' ? 'bg-amber-50 text-amber-600' :
                      log.level === 'success' ? 'bg-emerald-50 text-emerald-600' :
                      'bg-secondary/10 text-secondary'
                    }`}>
                       {log.level === 'warning' ? <AlertTriangle size={24} /> : <Lock size={24} />}
                    </div>
                    <div>
                       <h4 className="text-base font-bold text-primary group-hover:text-secondary transition-colors">{log.action}</h4>
                       <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Target: <span className="text-primary">{log.target}</span> • By: <span className="text-secondary">{log.admin}</span></p>
                    </div>
                 </div>
                 <div className="text-right">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{log.time}</p>
                    <p className="text-[10px] text-slate-300 font-bold uppercase tracking-tighter mt-1">April 29, 2026</p>
                 </div>
              </div>
            ))}
         </div>

         <button className="w-full mt-10 py-4 bg-white border-2 border-dashed border-slate-100 rounded-[32px] text-slate-400 font-black text-xs uppercase tracking-widest hover:border-secondary hover:text-secondary hover:bg-secondary/5 transition-all">
            Load Historical Logs
         </button>
      </div>
    </div>
  );
}
