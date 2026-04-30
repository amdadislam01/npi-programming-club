"use client";

import React, { useState } from "react";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Camera, 
  Globe,
  Edit2,
  Save,
  X
} from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "Amdad Islam",
    role: "Full-Stack Developer",
    email: "amdad@npi.edu.bd",
    phone: "+880 1700-000000",
    location: "Dhaka, Bangladesh",
    bio: "Passionate about building scalable web applications and mentoring fellow developers in the NPI Programming Club.",
    github: "github.com/amdad",
    twitter: "twitter.com/amdad",
    linkedin: "linkedin.com/in/amdad",
    website: "amdad.dev"
  });

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      {/* Profile Header */}
      <div className="relative">
        <div className="h-48 w-full bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl overflow-hidden">
           <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        </div>
        <div className="absolute -bottom-16 left-8 flex items-end gap-6">
          <div className="relative group">
            <div className="w-32 h-32 rounded-3xl bg-white p-2 shadow-xl border-4 border-white">
              <div className="w-full h-full rounded-2xl bg-slate-100 flex items-center justify-center overflow-hidden">
                <User size={64} className="text-slate-300" />
              </div>
            </div>
            {isEditing && (
              <button className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="text-white" size={24} />
              </button>
            )}
          </div>
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-primary">{userData.name}</h1>
            <p className="text-secondary font-semibold">{userData.role}</p>
          </div>
        </div>
        <div className="absolute -bottom-6 right-8">
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold shadow-lg transition-all ${
              isEditing ? 'bg-slate-800 text-white hover:bg-slate-900' : 'bg-white text-primary hover:bg-slate-50 border border-slate-200'
            }`}
          >
            {isEditing ? <><X size={18} /> Cancel</> : <><Edit2 size={18} /> Edit Profile</>}
          </button>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Info Card */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-primary mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-secondary transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Email</p>
                  <p className="text-sm font-semibold text-primary">{userData.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-secondary transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Phone</p>
                  <p className="text-sm font-semibold text-primary">{userData.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-secondary transition-colors">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Location</p>
                  <p className="text-sm font-semibold text-primary">{userData.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-primary mb-6">Social Links</h3>
            <div className="space-y-4">
               {[
                 { icon: FaGithub, label: "GitHub", value: userData.github },
                 { icon: FaTwitter, label: "Twitter", value: userData.twitter },
                 { icon: FaLinkedin, label: "LinkedIn", value: userData.linkedin },
                 { icon: Globe, label: "Website", value: userData.website },
               ].map((social, i) => (
                 <div key={i} className="flex items-center gap-4 cursor-pointer hover:bg-slate-50 p-2 rounded-xl transition-colors">
                    <social.icon size={18} className="text-slate-400" />
                    <span className="text-sm font-medium text-slate-600">{social.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Experience */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
               <h3 className="text-lg font-bold text-primary">About Me</h3>
               {isEditing && <button className="text-secondary font-bold flex items-center gap-2 bg-secondary/5 px-4 py-2 rounded-xl hover:bg-secondary/10 transition-colors"><Save size={18} /> Save Changes</button>}
            </div>
            {isEditing ? (
              <textarea 
                className="w-full h-40 p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none text-slate-600"
                defaultValue={userData.bio}
              />
            ) : (
              <p className="text-slate-600 leading-relaxed italic">
                "{userData.bio}"
              </p>
            )}
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-primary mb-6">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Express", "UI/UX Design", "System Architecture"].map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-slate-50 text-slate-600 text-sm font-semibold rounded-xl border border-slate-100 hover:border-secondary/30 hover:bg-secondary/5 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
