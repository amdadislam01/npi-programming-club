"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  CalendarCheck, 
  Settings, 
  CheckSquare, 
  BarChart3,
  Megaphone,
  Trophy,
  LogOut,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/leader-dashboard" },
  { icon: Users, label: "Team Members", href: "/leader-dashboard/team-members" },
  { icon: MessageSquare, label: "Conversations", href: "/leader-dashboard/conversation" },
  { icon: CalendarCheck, label: "Attendance", href: "/leader-dashboard/attendance" },
  { icon: CheckSquare, label: "Task Management", href: "/leader-dashboard/tasks" },
  { icon: Megaphone, label: "Announcements", href: "/leader-dashboard/announcements" },
  { icon: Trophy, label: "Performance", href: "/leader-dashboard/performance" },
  { icon: BarChart3, label: "Analytics", href: "/leader-dashboard/reports" },
  { icon: Settings, label: "Settings", href: "/leader-dashboard/settings" },
];

export default function LeaderSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-[#0F172A] text-white flex flex-col z-50 shadow-2xl">
      <div className="p-8">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-secondary/20">
            <ShieldCheck size={28} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-tight">Club Leader</span>
            <span className="text-secondary text-xs font-bold uppercase tracking-widest">Admin Access</span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/leader-dashboard" && pathname.startsWith(item.href));
          return (
            <Link key={item.href} href={item.href}>
              <div className={`
                flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-300 group
                ${isActive 
                  ? "bg-gradient-to-r from-secondary to-tertiary text-white shadow-xl shadow-secondary/10" 
                  : "text-slate-400 hover:bg-white/5 hover:text-white"}
              `}>
                <div className="flex items-center gap-3">
                  <item.icon size={20} className={isActive ? "text-white" : "group-hover:text-secondary transition-colors"} />
                  <span className="font-semibold text-[15px]">{item.label}</span>
                </div>
                {isActive ? (
                  <motion.div layoutId="active-leader-nav" className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                ) : (
                   <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-6 mt-auto">
        <div className="bg-white/5 rounded-2xl p-4 mb-4">
           <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Current Project</p>
           <h4 className="text-sm font-bold text-white mb-1 truncate">NPI Portal V2</h4>
           <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-secondary"></div>
           </div>
        </div>
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-2xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200 group">
          <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold text-sm">Sign Out</span>
        </button>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </aside>
  );
}
