"use client";

import React from "react";
import { FileText, Download, Eye, MoreVertical, Search, Upload, Folder, FileCode, FileImage } from "lucide-react";

const docs = [
  { name: "Brand Guidelines.pdf", size: "2.4 MB", date: "Apr 20, 2026", type: "pdf" },
  { name: "Project Requirements.docx", size: "1.1 MB", date: "Apr 22, 2026", type: "doc" },
  { name: "Dashboard Mockup.png", size: "4.8 MB", date: "Apr 25, 2026", type: "img" },
  { name: "Database Schema.sql", size: "45 KB", date: "Apr 28, 2026", type: "code" },
];

export default function DocumentsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Documents</h1>
          <p className="text-slate-500">Access and manage club resources and project files.</p>
        </div>
        <button className="bg-secondary text-white px-6 py-2.5 rounded-xl font-bold hover:bg-tertiary transition-all flex items-center gap-2">
          <Upload size={20} /> Upload File
        </button>
      </div>

      {/* Folders */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {['Learning', 'Projects', 'Resources', 'Archive'].map((folder) => (
          <div key={folder} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
             <Folder className="text-secondary mb-4 group-hover:scale-110 transition-transform" size={32} />
             <h4 className="font-bold text-primary">{folder}</h4>
             <p className="text-xs text-slate-400 mt-1">12 Files • 48 MB</p>
          </div>
        ))}
      </div>

      {/* File List */}
      <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
         <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-primary">Recent Files</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input type="text" placeholder="Search files..." className="bg-slate-50 border-none rounded-xl py-2 pl-10 pr-4 text-xs focus:ring-2 focus:ring-secondary/20 outline-none w-64" />
            </div>
         </div>

         <div className="space-y-4">
            {docs.map((doc, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
                       {doc.type === 'pdf' && <FileText size={24} className="text-red-500" />}
                       {doc.type === 'doc' && <FileText size={24} className="text-blue-500" />}
                       {doc.type === 'img' && <FileImage size={24} className="text-purple-500" />}
                       {doc.type === 'code' && <FileCode size={24} className="text-emerald-500" />}
                    </div>
                    <div>
                       <h4 className="text-sm font-bold text-primary">{doc.name}</h4>
                       <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{doc.size} • {doc.date}</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-slate-400 hover:bg-white hover:text-secondary rounded-lg border border-transparent hover:border-slate-100 transition-all"><Eye size={18} /></button>
                    <button className="p-2 text-slate-400 hover:bg-white hover:text-secondary rounded-lg border border-transparent hover:border-slate-100 transition-all"><Download size={18} /></button>
                    <button className="p-2 text-slate-400 hover:bg-white hover:text-primary rounded-lg border border-transparent hover:border-slate-100 transition-all"><MoreVertical size={18} /></button>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
