"use client";

import React, { useState } from "react";
import { 
  Send, 
  Search, 
  Phone, 
  Video, 
  MoreVertical, 
  Paperclip,
  Smile,
  User,
  CheckCheck,
  Info,
  ShieldCheck,
  FileText,
  Image as ImageIcon,
  Download
} from "lucide-react";
import { motion } from "framer-motion";

const members = [
  { id: 1, name: "Amdad Islam", role: "Full-Stack Developer", lastMessage: "Done with the API integration.", time: "2m ago", online: true },
  { id: 2, name: "Sakib Ahmed", role: "UI/UX Designer", lastMessage: "Sent the Figma links.", time: "1h ago", online: false },
  { id: 3, name: "Tasnim Ara", role: "Frontend Dev", lastMessage: "The CSS needs polish.", time: "Yesterday", online: true },
];

export default function LeaderConversationPage() {
  const [activeMember, setActiveMember] = useState(members[0]);

  return (
    <div className="h-[calc(100vh-200px)] bg-white rounded-[40px] border border-slate-100 shadow-2xl overflow-hidden flex">
      {/* Sidebar: Member List */}
      <div className="w-96 border-r border-slate-100 flex flex-col bg-slate-50/20">
        <div className="p-8">
           <h2 className="text-2xl font-bold text-primary mb-6">Team Chat</h2>
           <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input type="text" placeholder="Search member..." className="w-full bg-white border border-slate-100 rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-4 focus:ring-secondary/5 transition-all outline-none" />
           </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 space-y-2 pb-8">
           {members.map((m) => (
             <div 
               key={m.id}
               onClick={() => setActiveMember(m)}
               className={`p-4 rounded-3xl cursor-pointer transition-all ${
                 activeMember.id === m.id ? 'bg-white shadow-xl shadow-slate-100 border border-slate-100 scale-105' : 'hover:bg-white/50'
               }`}
             >
                <div className="flex items-center gap-4">
                   <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 font-bold">
                         {m.name[0]}
                      </div>
                      {m.online && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-4 border-white rounded-full"></div>
                      )}
                   </div>
                   <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                         <h4 className="text-sm font-bold text-primary truncate">{m.name}</h4>
                         <span className="text-[10px] font-bold text-slate-400">{m.time}</span>
                      </div>
                      <p className="text-xs text-slate-500 truncate font-medium">{m.lastMessage}</p>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
         {/* Header */}
         <div className="h-24 px-10 border-b border-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <User size={24} />
               </div>
               <div>
                  <h3 className="font-bold text-primary">{activeMember.name}</h3>
                  <p className="text-xs font-bold text-emerald-500 flex items-center gap-1.5 uppercase tracking-widest">
                     <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                     Active Now
                  </p>
               </div>
            </div>
            <div className="flex items-center gap-2">
               {[Phone, Video, Info, MoreVertical].map((Icon, i) => (
                 <button key={i} className="p-3 text-slate-400 hover:bg-slate-50 hover:text-primary rounded-2xl transition-all">
                    <Icon size={20} />
                 </button>
               ))}
            </div>
         </div>

         {/* Chat Content Placeholder */}
         <div className="flex-1 p-10 overflow-y-auto space-y-8 bg-slate-50/30">
            <div className="flex justify-center">
               <span className="px-4 py-1.5 bg-white shadow-sm border border-slate-100 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest">Conversation Started</span>
            </div>
            
            <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-xl bg-slate-100 shrink-0"></div>
               <div className="max-w-[60%] space-y-2">
                  <div className="bg-white p-5 rounded-3xl rounded-tl-none border border-slate-100 shadow-sm text-sm text-slate-600 leading-relaxed">
                     Hello leader! I have updated the repository with the latest changes from the sprint meeting. Can you please take a look?
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 ml-2">10:45 AM</span>
               </div>
            </div>

            <div className="flex items-start gap-4 justify-end">
               <div className="max-w-[60%] space-y-2 items-end flex flex-col">
                  <div className="bg-primary p-5 rounded-3xl rounded-tr-none text-white shadow-xl text-sm leading-relaxed">
                     Excellent work, Amdad. I'll review it by this afternoon. Any blockers we should discuss?
                  </div>
                  <div className="flex items-center gap-2 mr-2">
                    <span className="text-[10px] font-bold text-slate-400">10:50 AM</span>
                    <CheckCheck size={14} className="text-secondary" />
                  </div>
               </div>
               <div className="w-10 h-10 rounded-xl bg-secondary shrink-0 flex items-center justify-center text-white">
                  <ShieldCheck size={20} />
               </div>
            </div>
         </div>

         {/* Input Area */}
         <div className="p-10">
            <div className="bg-slate-50 border border-slate-100 rounded-[32px] p-2 flex items-center gap-2 focus-within:ring-4 focus-within:ring-secondary/5 transition-all">
               <button className="p-4 text-slate-400 hover:bg-white rounded-2xl transition-all">
                  <Paperclip size={22} />
               </button>
               <input 
                 type="text" 
                 placeholder="Type a secure message to your team member..." 
                 className="flex-1 bg-transparent border-none py-4 px-2 text-sm focus:ring-0 outline-none placeholder:text-slate-400 font-medium" 
               />
               <button className="p-4 text-slate-400 hover:bg-white rounded-2xl transition-all">
                  <Smile size={22} />
               </button>
               <button className="bg-secondary text-white p-4 rounded-2xl hover:bg-tertiary transition-all shadow-lg shadow-secondary/20">
                  <Send size={22} />
               </button>
            </div>
         </div>
      </div>

      {/* Member Sidebar - Info */}
      <div className="w-80 border-l border-slate-100 bg-white p-8 hidden xl:block">
         <div className="text-center space-y-4 mb-10">
            <div className="w-24 h-24 rounded-3xl bg-slate-50 mx-auto flex items-center justify-center text-slate-300">
               <User size={48} />
            </div>
            <div>
               <h3 className="font-bold text-lg text-primary">{activeMember.name}</h3>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{activeMember.role}</p>
            </div>
         </div>

         <div className="space-y-8">
            <div>
               <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Shared Files</h4>
               <div className="space-y-3">
                  {[
                    { name: "Spec.pdf", icon: FileText },
                    { name: "Moodboard.jpg", icon: ImageIcon },
                  ].map((f, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl group cursor-pointer hover:bg-secondary/5 transition-all">
                       <div className="flex items-center gap-3">
                          <f.icon size={16} className="text-slate-400 group-hover:text-secondary" />
                          <span className="text-xs font-bold text-primary group-hover:text-secondary">{f.name}</span>
                       </div>
                       <Download size={14} className="text-slate-300 opacity-0 group-hover:opacity-100" />
                    </div>
                  ))}
               </div>
            </div>
            
            <button className="w-full py-3 border-2 border-slate-100 rounded-2xl text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:border-red-100 hover:text-red-500 transition-all">
               Restrict Access
            </button>
         </div>
      </div>
    </div>
  );
}
