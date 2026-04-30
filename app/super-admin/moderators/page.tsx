"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function ModeratorManagementPage() {
  return (
    <div className="space-y-12 text-primary">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
        <div>
           <h1 className="text-4xl font-black text-primary tracking-tight">System Moderators</h1>
           <p className="text-slate-500 font-medium mt-2">Manage all platform moderators and oversee the moderation queue.</p>
        </div>
        <button className="px-8 py-3.5 bg-secondary text-white rounded-2xl font-black text-sm hover:bg-tertiary transition-all shadow-xl shadow-secondary/20">
           Appoint Moderator
        </button>
      </div>

      <div className="bg-white rounded-[48px] border border-slate-100 p-12 min-h-[500px] flex flex-col items-center justify-center text-center shadow-2xl">
         <div className="w-24 h-24 rounded-[32px] bg-secondary/10 flex items-center justify-center text-secondary mb-8 shadow-xl">
            <ShieldCheck size={48} />
         </div>
         <h2 className="text-2xl font-black text-primary mb-4">Moderation Control</h2>
         <p className="text-slate-400 max-w-md mx-auto leading-relaxed">The global moderation queue is being indexed.</p>
      </div>
    </div>
  );
}
