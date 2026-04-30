"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  ShieldAlert, 
  Layers, 
  UserSquare, 
  ShieldCheck, 
  BookOpen, 
  Calendar, 
  Trophy, 
  Eye, 
  FileText, 
  BarChart, 
  Settings2, 
  Mail, 
  LifeBuoy, 
  History,
  Settings,
  LogOut,
  ChevronRight,
  Globe
} from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  { icon: LayoutDashboard, label: "Platform Overview", href: "/super-admin" },
  { icon: Users, label: "User Management", href: "/super-admin/users" },
  { icon: ShieldAlert, label: "Club Moderation", href: "/super-admin/clubs" },
  { icon: Layers, label: "Team Oversight", href: "/super-admin/teams" },
  { icon: UserSquare, label: "Leader Management", href: "/super-admin/team-leaders" },
  { icon: ShieldCheck, label: "Moderators", href: "/super-admin/moderators" },
  { icon: BookOpen, label: "Course Control", href: "/super-admin/courses" },
  { icon: Calendar, label: "Event Management", href: "/super-admin/events" },
  { icon: Trophy, label: "Competitions", href: "/super-admin/competitions" },
  { icon: Eye, label: "Content Moderation", href: "/super-admin/content-management" },
  { icon: FileText, label: "Global Reporting", href: "/super-admin/reports" },
  { icon: BarChart, label: "Global Analytics", href: "/super-admin/analytics" },
  { icon: Settings2, label: "System Config", href: "/super-admin/system-settings" },
  { icon: Mail, label: "Email Campaigns", href: "/super-admin/email-management" },
  { icon: LifeBuoy, label: "Support Tickets", href: "/super-admin/support-tickets" },
  { icon: History, label: "Audit Logs", href: "/super-admin/audit-logs" },
  { icon: Settings, label: "Admin Settings", href: "/super-admin/settings" },
];

export default function SuperAdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-80 bg-white text-primary flex flex-col z-50 border-r border-slate-100 shadow-xl">
      <div className="p-10">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-3xl flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-700 shadow-2xl shadow-secondary/20">
            <Globe size={32} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-2xl tracking-tighter leading-none text-primary">SUPER</span>
            <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em]">Administrator</span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/super-admin" && pathname.startsWith(item.href));
          return (
            <Link key={item.href} href={item.href}>
              <div className={`
                flex items-center justify-between px-5 py-3.5 rounded-2xl transition-all duration-300 group
                ${isActive 
                  ? "bg-secondary text-white shadow-lg shadow-secondary/20" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-primary"}
              `}>
                <div className="flex items-center gap-4">
                  <item.icon size={20} className={isActive ? "text-white" : "group-hover:text-secondary transition-colors"} />
                  <span className="font-bold text-sm tracking-wide">{item.label}</span>
                </div>
                {isActive ? (
                  <motion.div layoutId="super-nav-indicator" className="w-2 h-2 rounded-full bg-white" />
                ) : (
                   <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-8 mt-auto border-t border-slate-50">
        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-[24px] mb-6">
           <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-black">SA</div>
           <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Server Status</p>
              <p className="text-xs font-bold text-emerald-500 flex items-center gap-1.5">
                 <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                 99.9% Operational
              </p>
           </div>
        </div>
        <button className="flex items-center gap-3 px-6 py-4 w-full rounded-2xl text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all duration-300 group font-bold text-sm">
          <LogOut size={20} className="group-hover:-translate-x-2 transition-transform" />
          Log Out System
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
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </aside>
  );
}
