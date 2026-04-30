"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  User, 
  MessageSquare, 
  CalendarCheck, 
  Settings, 
  CheckSquare, 
  Calendar, 
  Bell, 
  FileText, 
  BarChart3,
  LogOut,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: User, label: "Profile", href: "/dashboard/profile" },
  { icon: MessageSquare, label: "Conversation", href: "/dashboard/conversation" },
  { icon: CalendarCheck, label: "Attendance", href: "/dashboard/attendance" },
  { icon: CheckSquare, label: "Tasks", href: "/dashboard/tasks" },
  { icon: Calendar, label: "Events", href: "/dashboard/events" },
  { icon: Bell, label: "Notifications", href: "/dashboard/notifications" },
  { icon: FileText, label: "Documents", href: "/dashboard/documents" },
  { icon: BarChart3, label: "Reports", href: "/dashboard/reports" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-primary text-white flex flex-col z-50">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <span className="text-xl font-bold">NPI</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight">Programming</span>
            <span className="text-secondary text-sm font-medium">Club</span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div className={`
                flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group
                ${isActive 
                  ? "bg-secondary text-white shadow-lg shadow-secondary/20" 
                  : "text-slate-400 hover:bg-white/5 hover:text-white"}
              `}>
                <div className="flex items-center gap-3">
                  <item.icon size={20} className={isActive ? "text-white" : "group-hover:text-secondary transition-colors"} />
                  <span className="font-medium text-sm">{item.label}</span>
                </div>
                {isActive && (
                  <motion.div layoutId="active-nav" className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
                {!isActive && (
                   <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200 group">
          <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm">Logout</span>
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
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </aside>
  );
}
