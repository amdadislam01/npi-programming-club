"use client";

import React from "react";
import { Eye } from "lucide-react";

export default function ContentModerationPage() {
  return (
    <div className="space-y-12 text-primary">
       <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
        <div>
           <h1 className="text-4xl font-black text-primary tracking-tight">Content Scrutiny</h1>
           <p className="text-slate-500 font-medium mt-2">Manage the global moderation queue for all user-generated content.</p>
        </div>
      </div>
      <div className="bg-white rounded-[48px] border border-slate-100 p-12 min-h-[500px] flex flex-col items-center justify-center text-center shadow-2xl">
         <div className="w-24 h-24 rounded-[32px] bg-red-50 flex items-center justify-center text-white mb-8 shadow-xl">
            <Eye size={48} />
         </div>
         <h2 className="text-2xl font-black text-primary mb-4">Moderation Queue</h2>
         <p className="text-slate-400 max-w-md mx-auto leading-relaxed">AI scanning is currently 100% operational.</p>
      </div>
    </div>
  );
}
