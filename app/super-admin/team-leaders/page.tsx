"use client";

import React, { useState, useEffect } from "react";
import { 
  Search, Filter, MoreVertical, 
  CheckCircle, XCircle, Eye, Loader2, 
  Mail, Phone, GraduationCap, Globe, Calendar,
  ShieldCheck, AlertCircle, Rocket, Hash
} from "lucide-react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LeaderRequest {
  _id: string;
  fullName: string;
  email: string;
  studentId: string;
  department: string;
  semester: string;
  phone: string;
  role: string;
  status: string;
  preferredDepartment: string;
  bio: string;
  leadershipExperience: string;
  vision: string;
  motivation: string;
  skills: string;
  githubLink?: string;
  linkedinLink?: string;
  facebookLink?: string;
  portfolioLink?: string;
  profilePhoto?: string;
  createdAt: string;
}

export default function LeaderManagementPage() {
  const [requests, setRequests] = useState<LeaderRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLeader, setSelectedLeader] = useState<LeaderRequest | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchRequests = async () => {
    try {
      const response = await fetch("/api/admin/pending-leaders");
      const data = await response.json();
      if (response.ok) {
        setRequests(data);
      }
    } catch (error) {
      console.error("Failed to fetch leaders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      await fetchRequests();
    };
    init();
  }, []);

  const handleAction = async (userId: string, action: 'approved' | 'rejected') => {
    setActionLoading(userId);
    try {
      const response = await fetch("/api/admin/approve-leader", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, action }),
      });
      if (response.ok) {
        setRequests(prev => prev.filter(r => r._id !== userId));
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Action failed:", error);
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="space-y-10 text-primary">
      {/* Header Section */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
        <div>
           <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-widest rounded-full">Administration</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Leadership Hub</span>
           </div>
           <h1 className="text-4xl font-black text-primary tracking-tight">Leader Requests</h1>
           <p className="text-slate-500 font-medium mt-1">Review and approve new Team Leader applications for the club.</p>
        </div>
        
        <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-100 shadow-sm">
           <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-secondary transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search leaders..."
                className="pl-11 pr-6 py-3 bg-slate-50 rounded-xl text-sm font-medium outline-none focus:ring-2 ring-secondary/10 transition-all w-[240px]"
              />
           </div>
           <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-100 transition-all">
              <Filter size={20} />
           </button>
        </div>
      </div>

      {/* Requests Table/Grid */}
      {loading ? (
        <div className="min-h-[400px] flex items-center justify-center bg-white rounded-[40px] border border-slate-100">
           <div className="flex flex-col items-center gap-4">
              <Loader2 className="w-10 h-10 text-secondary animate-spin" />
              <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Synchronizing Data...</p>
           </div>
        </div>
      ) : requests.length === 0 ? (
        <div className="min-h-[400px] flex flex-col items-center justify-center bg-white rounded-[40px] border border-slate-100 shadow-sm text-center p-12">
           <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-300 mb-6">
              <ShieldCheck size={40} />
           </div>
           <h2 className="text-2xl font-bold text-primary mb-2">No Pending Requests</h2>
           <p className="text-slate-400 font-medium max-w-sm">All leadership applications have been processed. New requests will appear here as they arrive.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <AnimatePresence>
              {requests.map((leader, idx) => (
                <motion.div
                  key={leader._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-[32px] border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-secondary/10 overflow-hidden relative border-2 border-white shadow-lg">
                        {leader.profilePhoto ? (
                          <Image src={leader.profilePhoto} alt={leader.fullName} fill className="object-cover" />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-secondary font-black text-xl">
                            {leader.fullName.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1">{leader.fullName}</h3>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{leader.department}</p>
                      </div>
                    </div>
                    <button className="p-2 text-slate-300 hover:text-primary transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-secondary/5 group-hover:text-secondary transition-colors">
                        <GraduationCap size={14} />
                      </div>
                      ID: {leader.studentId} • {leader.semester}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-secondary/5 group-hover:text-secondary transition-colors">
                        <Globe size={14} />
                      </div>
                      Wing: {leader.preferredDepartment}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => {
                        setSelectedLeader(leader);
                        setIsModalOpen(true);
                      }}
                      className="py-3 bg-slate-50 text-slate-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                      <Eye size={14} /> Details
                    </button>
                    <button 
                      onClick={() => handleAction(leader._id, 'approved')}
                      disabled={actionLoading === leader._id}
                      className="py-3 bg-secondary text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-tertiary transition-all flex items-center justify-center gap-2 shadow-lg shadow-secondary/10 disabled:opacity-50"
                    >
                      {actionLoading === leader._id ? <Loader2 size={14} className="animate-spin" /> : <CheckCircle size={14} />} 
                      Approve
                    </button>
                  </div>
                </motion.div>
              ))}
           </AnimatePresence>
        </div>
      )}

      {/* Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedLeader && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-primary/40 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[48px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-slate-50 to-white border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-8 shrink-0">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-[32px] bg-secondary/10 relative overflow-hidden border-4 border-white shadow-2xl">
                    {selectedLeader.profilePhoto ? (
                      <Image src={selectedLeader.profilePhoto} alt={selectedLeader.fullName} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-secondary font-black text-3xl">
                        {selectedLeader.fullName.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-primary tracking-tight">{selectedLeader.fullName}</h2>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                       <span className="px-3 py-1 bg-secondary text-white text-[10px] font-black uppercase tracking-widest rounded-full">Team Leader Applicant</span>
                       <span className="text-slate-300">|</span>
                       <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">{selectedLeader.preferredDepartment} Wing</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                   <button 
                    onClick={() => handleAction(selectedLeader._id, 'rejected')}
                    className="w-12 h-12 rounded-2xl border border-red-100 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-lg shadow-red-500/5"
                   >
                     <XCircle size={20} />
                   </button>
                   <button 
                    onClick={() => handleAction(selectedLeader._id, 'approved')}
                    className="px-8 py-3.5 bg-secondary text-white rounded-2xl font-black text-sm hover:bg-tertiary transition-all shadow-xl shadow-secondary/20 flex items-center gap-2"
                   >
                     <CheckCircle size={18} /> Approve Applicant
                   </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left Column: Core Info */}
                  <div className="space-y-10">
                    <div>
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <AlertCircle size={14} className="text-secondary" /> Academic & Personal Profile
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                          { icon: Hash, label: "Student ID", value: selectedLeader.studentId },
                          { icon: GraduationCap, label: "Department", value: selectedLeader.department },
                          { icon: Layers, label: "Semester", value: selectedLeader.semester },
                          { icon: Calendar, label: "Applied On", value: new Date(selectedLeader.createdAt).toLocaleDateString() },
                          { icon: Mail, label: "Institutional Email", value: selectedLeader.email },
                          { icon: Phone, label: "Contact Number", value: selectedLeader.phone }
                        ].map((item, i) => (
                          <div key={i} className="p-5 bg-slate-50 rounded-[24px] border border-slate-100/50 hover:bg-white hover:shadow-lg transition-all group">
                             <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-slate-300 group-hover:text-secondary transition-colors mb-3">
                                <item.icon size={16} />
                             </div>
                             <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{item.label}</div>
                             <div className="text-sm font-bold text-primary truncate">{item.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Socials & Digital Presence</h4>
                      <div className="flex flex-wrap gap-3">
                        {[
                          { icon: FaGithub, label: "GitHub", href: selectedLeader.githubLink, color: "hover:bg-[#24292e]" },
                          { icon: FaLinkedin, label: "LinkedIn", href: selectedLeader.linkedinLink, color: "hover:bg-[#0077b5]" },
                          { icon: FaFacebook, label: "Facebook", href: selectedLeader.facebookLink, color: "hover:bg-[#1877f2]" },
                          { icon: Globe, label: "Portfolio", href: selectedLeader.portfolioLink, color: "hover:bg-secondary" }
                        ].map((social, i) => (
                          <a 
                            key={i} 
                            href={social.href || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-50 text-slate-500 font-bold text-xs transition-all border border-slate-100 ${social.color} hover:text-white hover:shadow-lg ${!social.href ? 'opacity-30 pointer-events-none' : ''}`}
                          >
                             <social.icon size={16} /> {social.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Motivation & Vision */}
                  <div className="space-y-10">
                    <div className="p-8 bg-primary/[0.02] rounded-[32px] border border-slate-100 relative overflow-hidden group hover:bg-white hover:shadow-2xl transition-all">
                       <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl transition-all group-hover:bg-secondary/10" />
                       <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                          <Rocket size={14} className="text-secondary" /> Leadership Motivation
                       </h4>
                       <p className="text-sm text-slate-600 font-medium leading-relaxed italic">
                         &quot;{selectedLeader.motivation}&quot;
                       </p>
                    </div>

                    <div className="space-y-6">
                       <div>
                          <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Leadership Experience</h5>
                          <div className="p-6 bg-slate-50 rounded-2xl text-xs font-medium text-slate-600 leading-relaxed border border-slate-100">
                             {selectedLeader.leadershipExperience || "No prior leadership experience listed."}
                          </div>
                       </div>
                       <div>
                          <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Future Vision for the Wing</h5>
                          <div className="p-6 bg-slate-50 rounded-2xl text-xs font-medium text-slate-600 leading-relaxed border border-slate-100">
                             {selectedLeader.vision || "No specific vision statement provided."}
                          </div>
                       </div>
                       <div>
                          <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Technical Stack & Skills</h5>
                          <div className="flex flex-wrap gap-2">
                             {selectedLeader.skills.split(",").map((skill, sIdx) => (
                               <span key={sIdx} className="px-3 py-1.5 bg-secondary/5 text-secondary text-[10px] font-black uppercase tracking-widest rounded-lg border border-secondary/10">
                                 {skill.trim()}
                               </span>
                             ))}
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8fafc;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </div>
  );
}

// Internal icons for the modal items (reusing from Lucide-react)
const Layers = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <path d="m2.6 12.18 8.58 3.9a2 2 0 0 0 1.66 0l8.58-3.9" />
    <path d="m2.6 17.18 8.58 3.9a2 2 0 0 0 1.66 0l8.58-3.9" />
  </svg>
);
