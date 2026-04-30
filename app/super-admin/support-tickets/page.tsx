"use client";

import React from "react";
import { LifeBuoy } from "lucide-react";

export default function SupportTicketsPage() {
  return (
    <div className="space-y-12 text-primary">
       <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
        <div>
           <h1 className="text-4xl font-black text-primary tracking-tight">Supreme Support</h1>
           <p className="text-slate-500 font-medium mt-2">Manage high-level support tickets and oversee the global help desk.</p>
        </div>
      </div>
      <div className="bg-white rounded-[48px] border border-slate-100 p-12 min-h-[500px] flex flex-col items-center justify-center text-center shadow-2xl">
         <div className="w-24 h-24 rounded-[32px] bg-secondary/10 flex items-center justify-center text-secondary mb-8 shadow-xl">
            <LifeBuoy size={48} />
         </div>
         <h2 className="text-2xl font-black text-primary mb-4">Ticket Oversight</h2>
         <p className="text-slate-400 max-w-md mx-auto leading-relaxed">System is loading active support threads.</p>
      </div>
    </div>
  );
}
