"use client";

import React from "react";
import { 
  Users, 
  CheckCircle2, 
  Clock, 
  TrendingUp,
  ArrowUpRight,
  AlertTriangle,
  MessageSquare,
  Zap,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Check, X, Loader2, ShieldAlert, Clock3 } from "lucide-react";

interface PendingMember {
  _id: string;
  fullName: string;
  studentId: string;
  department: string;
}

const stats = [
  { label: "Total Members", value: "124", change: "+12", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Tasks Done", value: "85%", change: "+5%", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Pending Reviews", value: "18", change: "-2", icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Team Velocity", value: "4.2", change: "+0.8", icon: Zap, color: "text-purple-600", bg: "bg-purple-50" },
];

const teamMembers = [
  { id: 1, name: "Amdad Islam", role: "Full-Stack Developer", status: "Online", performance: 95 },
  { id: 2, name: "Sakib Ahmed", role: "UI/UX Designer", status: "Busy", performance: 88 },
  { id: 3, name: "Nayeem Hossain", role: "Backend Developer", status: "Offline", performance: 92 },
  { id: 4, name: "Fahim Shahriar", role: "DevOps Engineer", status: "Online", performance: 85 },
];

export default function LeaderDashboardHome() {
  const { data: session } = useSession();
  const [pendingMembers, setPendingMembers] = useState<PendingMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);

  const fetchPendingMembers = async () => {
    try {
      const response = await fetch("/api/leader/pending-members");
      const data = await response.json();
      if (response.ok) {
        setPendingMembers(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Failed to fetch pending members:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      await fetchPendingMembers();
    };
    init();
  }, []);

  const handleAction = async (userId: string, action: 'approved' | 'rejected') => {
    setProcessingId(userId);
    try {
      const response = await fetch("/api/leader/approve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, action }),
      });
      if (response.ok) {
        setPendingMembers(prev => prev.filter(m => m._id !== userId));
      }
    } catch (error) {
      console.error("Action failed:", error);
    } finally {
      setProcessingId(null);
    }
  };

  // Approval Status Check
  if (session?.user && (session.user as any).status !== "approved") {
    const status = (session.user as any).status;
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-[40px] p-10 border border-slate-100 shadow-2xl text-center space-y-8"
        >
          <div className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center ${
            status === 'rejected' ? 'bg-red-50 text-red-500' : 'bg-amber-50 text-amber-500'
          }`}>
            {status === 'rejected' ? <ShieldAlert size={48} /> : <Clock3 size={48} className="animate-pulse" />}
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-primary tracking-tight">
              {status === 'rejected' ? 'Access Restricted' : 'Approval Pending'}
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              {status === 'rejected' 
                ? "Your Team Leader application has been reviewed and declined by the Super Admin. Please contact the administration for further details."
                : "Your registration as a Team Leader is currently being reviewed by the Super Admin. You will gain access to this dashboard once approved."}
            </p>
          </div>

          <div className="pt-4">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-xs font-bold text-slate-400 uppercase tracking-widest">
                Status: {status}
             </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <h1 className="text-3xl font-bold text-primary tracking-tight">System Overview</h1>
           <p className="text-slate-500 font-medium mt-1">Real-time performance and team activity metrics.</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">Last 24 Hours</button>
           <button className="px-5 py-2.5 bg-secondary text-white rounded-xl text-sm font-bold hover:bg-tertiary transition-all shadow-lg shadow-secondary/20 flex items-center gap-2">
              Generate Report <ArrowUpRight size={18} />
           </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-default group"
          >
            <div className="flex items-center justify-between mb-6">
               <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <stat.icon size={28} />
               </div>
               <span className={`text-xs font-bold px-2 py-1 rounded-lg ${stat.change.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                  {stat.change}
               </span>
            </div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            <h3 className="text-3xl font-bold text-primary mt-2">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          {/* Pending Approvals Section */}
          <div className="bg-white rounded-[32px] border border-slate-100 p-10 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-primary">Pending Approvals</h2>
                <p className="text-sm text-slate-400 font-medium mt-1">Review new member requests for your wing.</p>
              </div>
              <span className="px-4 py-1.5 bg-amber-50 text-amber-600 rounded-full text-xs font-bold uppercase tracking-wider">
                {pendingMembers.length} Requests
              </span>
            </div>

            {loading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="w-8 h-8 text-secondary animate-spin" />
              </div>
            ) : pendingMembers.length === 0 ? (
              <div className="text-center py-12 bg-slate-50/50 rounded-2xl border-2 border-dashed border-slate-100">
                <p className="text-slate-400 font-medium">No pending requests at the moment.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <AnimatePresence>
                  {pendingMembers.map((member) => (
                    <motion.div 
                      key={member._id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex items-center justify-between p-6 rounded-2xl border border-slate-100 hover:border-secondary/20 hover:bg-slate-50/30 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-primary font-bold">
                          {member.fullName?.[0] || "?"}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-primary">{member.fullName}</h4>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{member.studentId} • {member.department}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => handleAction(member._id, 'approved')}
                          disabled={processingId === member._id}
                          className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all shadow-sm"
                          title="Approve"
                        >
                          {processingId === member._id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check size={18} />}
                        </button>
                        <button 
                          onClick={() => handleAction(member._id, 'rejected')}
                          disabled={processingId === member._id}
                          className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-sm"
                          title="Reject"
                        >
                          {processingId === member._id ? <Loader2 className="w-4 h-4 animate-spin" /> : <X size={18} />}
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Team Performance Table */}
          <div className="bg-white rounded-[32px] border border-slate-100 p-10 shadow-sm">
             <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl font-bold text-primary">Active Team Members</h2>
                <button className="text-secondary text-sm font-bold hover:underline flex items-center gap-1">Manage All <ChevronRight size={16} /></button>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full">
                   <thead>
                      <tr className="text-left border-b border-slate-50">
                         <th className="pb-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Member</th>
                         <th className="pb-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Status</th>
                         <th className="pb-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Performance</th>
                         <th className="pb-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Action</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-50">
                      {teamMembers.map((member) => (
                        <tr key={member.id} className="group hover:bg-slate-50/50 transition-colors">
                           <td className="py-6">
                              <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 font-bold group-hover:bg-white transition-colors">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                 </div>
                                 <div>
                                    <h4 className="text-sm font-bold text-primary">{member.name}</h4>
                                    <p className="text-xs text-slate-400 font-medium">{member.role}</p>
                                 </div>
                              </div>
                           </td>
                           <td className="py-6">
                              <div className="flex items-center gap-2">
                                 <div className={`w-2 h-2 rounded-full ${
                                   member.status === 'Online' ? 'bg-emerald-500' :
                                   member.status === 'Busy' ? 'bg-amber-500' : 'bg-slate-300'
                                 }`}></div>
                                 <span className="text-xs font-bold text-slate-600">{member.status}</span>
                              </div>
                           </td>
                           <td className="py-6">
                              <div className="w-32 space-y-2">
                                 <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                                    <span>Efficiency</span>
                                    <span>{member.performance}%</span>
                                 </div>
                                 <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div 
                                      initial={{ width: 0 }}
                                      animate={{ width: `${member.performance}%` }}
                                      className={`h-full ${member.performance > 90 ? 'bg-secondary' : 'bg-amber-500'}`}
                                    ></motion.div>
                                 </div>
                              </div>
                           </td>
                           <td className="py-6">
                              <button className="p-2 text-slate-400 hover:bg-white hover:text-secondary rounded-xl transition-all border border-transparent hover:border-slate-100">
                                 <MessageSquare size={18} />
                              </button>
                           </td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>
        </div>

        {/* Quick Actions & Notifications */}
        <div className="space-y-10">
           <div className="bg-primary rounded-[32px] p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                 <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <TrendingUp size={20} className="text-secondary" />
                    Strategic Goals
                 </h3>
                 <p className="text-sm text-slate-300 mb-8 leading-relaxed">You&apos;ve completed 75% of this month&apos;s recruitment goals. 5 more members to reach target.</p>
                 <button className="w-full py-4 bg-secondary hover:bg-tertiary text-white rounded-2xl font-bold text-sm transition-all shadow-lg shadow-secondary/20">
                    Set New Goals
                 </button>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-6">Recent Reports</h3>
              <div className="space-y-6">
                 {[
                   { title: "Weekly Attendance", date: "Today, 09:00 AM", type: "PDF" },
                   { title: "Task Completion Matrix", date: "Yesterday", type: "Excel" },
                   { title: "Quarterly Performance", date: "Apr 25, 2026", type: "DOCX" },
                 ].map((report, i) => (
                   <div key={i} className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-secondary transition-colors">
                            <AlertTriangle size={18} />
                         </div>
                         <div>
                            <h4 className="text-sm font-bold text-primary group-hover:text-secondary transition-colors">{report.title}</h4>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{report.date}</p>
                         </div>
                      </div>
                      <span className="text-[10px] font-bold text-slate-300 group-hover:text-primary">{report.type}</span>
                   </div>
                 ))}
              </div>
              <button className="w-full mt-8 py-3 border-2 border-dashed border-slate-100 text-slate-400 rounded-2xl text-xs font-bold hover:border-secondary hover:text-secondary transition-all">
                 + View All Analytics
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
