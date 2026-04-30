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
  CheckCheck
} from "lucide-react";
import { motion } from "framer-motion";

const contacts = [
  { id: 1, name: "Team Leader Alpha", lastMessage: "How is the login UI coming along?", time: "10:30 AM", active: true, online: true },
  { id: 2, name: "Project Manager", lastMessage: "Please check the latest documentation.", time: "Yesterday", active: false, online: false },
  { id: 3, name: "Lead Designer", lastMessage: "The assets are ready for download.", time: "2 days ago", active: false, online: true },
];

const messages = [
  { id: 1, text: "Hey! Just wanted to check on the progress of the dashboard implementation.", sender: "leader", time: "10:15 AM" },
  { id: 2, text: "Hi! I've already finished the Sidebar and Header components. Working on the Overview page now.", sender: "me", time: "10:20 AM" },
  { id: 3, text: "That's great! Make sure it looks clean and professional. The club members will love it.", sender: "leader", time: "10:25 AM" },
  { id: 4, text: "How is the login UI coming along?", sender: "leader", time: "10:30 AM" },
];

export default function ConversationPage() {
  const [activeChat, setActiveChat] = useState(contacts[0]);

  return (
    <div className="h-[calc(100vh-160px)] bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden flex">
      {/* Sidebar: Chat List */}
      <div className="w-80 border-r border-slate-100 flex flex-col">
        <div className="p-6">
          <h2 className="text-xl font-bold text-primary mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search chats..." 
              className="w-full bg-slate-50 border-none rounded-xl py-2 pl-10 pr-4 text-xs focus:ring-2 focus:ring-secondary/20 outline-none"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-1 px-3">
          {contacts.map((contact) => (
            <div 
              key={contact.id}
              onClick={() => setActiveChat(contact)}
              className={`p-4 rounded-2xl cursor-pointer transition-all ${
                activeChat.id === contact.id ? 'bg-secondary text-white shadow-lg shadow-secondary/20' : 'hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className={`w-10 h-10 rounded-xl ${activeChat.id === contact.id ? 'bg-white/20' : 'bg-slate-100'} flex items-center justify-center overflow-hidden`}>
                    <User className={activeChat.id === contact.id ? 'text-white' : 'text-slate-400'} size={20} />
                  </div>
                  {contact.online && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h4 className="text-sm font-bold truncate">{contact.name}</h4>
                    <span className={`text-[10px] ${activeChat.id === contact.id ? 'text-white/70' : 'text-slate-400'}`}>{contact.time}</span>
                  </div>
                  <p className={`text-xs truncate ${activeChat.id === contact.id ? 'text-white/80' : 'text-slate-500'}`}>
                    {contact.lastMessage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main: Chat Window */}
      <div className="flex-1 flex flex-col bg-slate-50/30">
        {/* Chat Header */}
        <div className="h-20 bg-white border-b border-slate-100 px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <User className="text-slate-400" size={20} />
             </div>
             <div>
                <h3 className="text-sm font-bold text-primary">{activeChat.name}</h3>
                <p className="text-[10px] text-green-500 font-bold flex items-center gap-1">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                   Active Now
                </p>
             </div>
          </div>
          <div className="flex items-center gap-2">
             {[Phone, Video, MoreVertical].map((Icon, i) => (
               <button key={i} className="p-2.5 text-slate-400 hover:bg-slate-50 hover:text-primary rounded-xl transition-all">
                  <Icon size={18} />
               </button>
             ))}
          </div>
        </div>

        {/* Chat Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="text-center">
            <span className="px-3 py-1 bg-slate-100 text-slate-400 text-[10px] font-bold rounded-full uppercase tracking-widest">Today</span>
          </div>
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] space-y-1 ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.sender === 'me' 
                    ? 'bg-secondary text-white rounded-tr-none' 
                    : 'bg-white text-slate-600 border border-slate-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
                <div className="flex items-center gap-1 px-1">
                  <span className="text-[10px] text-slate-400">{msg.time}</span>
                  {msg.sender === 'me' && <CheckCheck size={12} className="text-secondary" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-6 bg-white border-t border-slate-100">
           <div className="flex items-center gap-3">
              <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-xl transition-colors">
                 <Paperclip size={20} />
              </button>
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  placeholder="Type your message here..." 
                  className="w-full bg-slate-50 border-none rounded-2xl py-3 px-4 pr-12 text-sm focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-secondary text-white rounded-lg hover:bg-tertiary transition-colors">
                  <Send size={16} />
                </button>
              </div>
              <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-xl transition-colors">
                 <Smile size={20} />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
