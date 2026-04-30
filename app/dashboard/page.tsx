"use client";

import React from "react";
import { 
  Users, 
  CheckCircle2, 
  Clock, 
  Calendar,
  ArrowUpRight,
  Trophy,
  MessageSquare
} from "lucide-react";
import { motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";
import { LogOut, XCircle } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Attendance Rate", value: "94%", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Active Tasks", value: "12", icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Events Joined", value: "28", icon: Calendar, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Points Earned", value: "1,250", icon: Trophy, color: "text-purple-600", bg: "bg-purple-50" },
];

const activities = [
  { id: 1, type: "task", title: "Finished Login Page UI", time: "2 hours ago", status: "Completed" },
  { id: 2, type: "event", title: "Web Dev Workshop", time: "5 hours ago", status: "Registered" },
  { id: 3, type: "message", title: "Message from Team Leader", time: "1 day ago", status: "Unread" },
  { id: 4, type: "attendance", title: "Marked Present", time: "1 day ago", status: "Success" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function DashboardOverview() {
  const { data: session, status: sessionStatus } = useSession();

  if (sessionStatus === "loading") {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const user = session?.user as any;

  if (user?.status === "pending") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center"
      >
        <div className="w-24 h-24 bg-amber-50 rounded-[32px] flex items-center justify-center text-amber-500 mb-8 shadow-xl shadow-amber-500/10">
          <Clock size={48} />
        </div>
        <h1 className="text-3xl font-black text-primary mb-4">Account Under Review</h1>
        <p className="text-slate-500 max-w-md mx-auto leading-relaxed mb-8 font-medium">
          Welcome to the club, <span className="text-primary font-bold">{user.name}</span>! Your application for the <span className="text-secondary font-bold">{user.team}</span> has been received. 
          The team leader will review your profile shortly.
        </p>
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3 text-left">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Status: Pending Approval</span>
          </div>
          <button 
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="flex items-center justify-center gap-2 text-slate-400 hover:text-red-500 font-bold text-sm transition-colors py-2"
          >
            <LogOut size={18} /> Sign Out
          </button>
        </div>
      </motion.div>
    );
  }

  if (user?.status === "rejected") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center"
      >
        <div className="w-24 h-24 bg-red-50 rounded-[32px] flex items-center justify-center text-red-500 mb-8 shadow-xl shadow-red-500/10">
          <XCircle size={48} />
        </div>
        <h1 className="text-3xl font-black text-primary mb-4">Application Not Accepted</h1>
        <p className="text-slate-500 max-w-md mx-auto leading-relaxed mb-8 font-medium">
          We appreciate your interest in joining the <span className="text-secondary font-bold">{user.team}</span>. 
          Unfortunately, your application was not accepted at this time. 
        </p>
        <button 
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-secondary transition-all shadow-lg"
        >
          Return to Login
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary to-slate-800 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name || "Amdad"}! 👋</h1>
          <p className="text-slate-300 max-w-md">You are part of the <span className="text-secondary font-bold">{user?.team}</span>. Keep building amazing things!</p>
          <button className="mt-6 bg-secondary hover:bg-tertiary text-white px-6 py-2.5 rounded-xl font-semibold transition-colors flex items-center gap-2">
            View Schedule <ArrowUpRight size={18} />
          </button>
        </div>
        <div className="absolute right-0 top-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute left-1/2 bottom-0 w-48 h-48 bg-tertiary/10 rounded-full blur-2xl translate-y-1/2"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            variants={itemVariants}
            className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow group cursor-default"
          >
            <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <stat.icon className={stat.color} size={24} />
            </div>
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            <h3 className="text-2xl font-bold text-primary mt-1">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <motion.div variants={itemVariants} className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-primary">Recent Activity</h2>
            <button className="text-secondary text-sm font-semibold hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-white group-hover:shadow-sm transition-all">
                  {activity.type === 'task' && <CheckCircle2 size={18} />}
                  {activity.type === 'event' && <Calendar size={18} />}
                  {activity.type === 'message' && <MessageSquare size={18} />}
                  {activity.type === 'attendance' && <CheckCircle2 size={18} />}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-primary">{activity.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{activity.time}</p>
                </div>
                <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md ${
                  activity.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' :
                  activity.status === 'Registered' ? 'bg-blue-50 text-blue-600' :
                  activity.status === 'Unread' ? 'bg-amber-50 text-amber-600' :
                  'bg-slate-50 text-slate-600'
                }`}>
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Announcements */}
        <motion.div variants={itemVariants} className="bg-white rounded-3xl border border-slate-100 p-6">
          <h2 className="text-xl font-bold text-primary mb-6">Announcements</h2>
          <div className="space-y-6">
            <div className="p-4 bg-secondary/5 rounded-2xl border border-secondary/10">
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Upcoming</span>
              <h4 className="text-sm font-bold text-primary mt-1">Hackathon 2026</h4>
              <p className="text-xs text-slate-500 mt-2 line-clamp-2">Registration for the annual hackathon is now open. Team up and innovate!</p>
              <button className="mt-4 text-xs font-bold text-secondary hover:underline">Learn More</button>
            </div>
            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Notice</span>
              <h4 className="text-sm font-bold text-primary mt-1">New Curriculum</h4>
              <p className="text-xs text-slate-500 mt-2 line-clamp-2">We have updated our learning resources for advanced React patterns.</p>
              <button className="mt-4 text-xs font-bold text-primary hover:underline">Read Update</button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
