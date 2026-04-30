"use client";

import React from "react";
import { BookOpen } from "lucide-react";

export default function CourseControlPage() {
  return (
    <div className="space-y-12 text-primary">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
        <div>
           <h1 className="text-4xl font-black text-primary tracking-tight">Global Course Control</h1>
           <p className="text-slate-500 font-medium mt-2">Oversee all platform educational content, approve new courses, and manage instructors.</p>
        </div>
        <button className="px-8 py-3.5 bg-secondary text-white rounded-2xl font-black text-sm hover:bg-tertiary transition-all shadow-xl shadow-secondary/20">
           Approve New Course
        </button>
      </div>

      <div className="bg-white rounded-[48px] border border-slate-100 p-12 min-h-[500px] flex flex-col items-center justify-center text-center shadow-2xl">
         <div className="w-24 h-24 rounded-[32px] bg-secondary/10 flex items-center justify-center text-secondary mb-8 shadow-xl">
            <BookOpen size={48} />
         </div>
         <h2 className="text-2xl font-black text-primary mb-4">Course Intelligence</h2>
         <p className="text-slate-400 max-w-md mx-auto leading-relaxed">The global learning index is currently being verified.</p>
      </div>
    </div>
  );
}
