"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Mail, Phone, Lock, Hash, 
  ArrowRight, ArrowLeft, 
  CheckCircle2, AlertCircle,
  Globe, Rocket, Award, Users, BookOpen, Layers, Camera
} from "lucide-react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const registerSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Invalid institutional email"),
  countryCode: z.string().min(1, "Country code is required"),
  phone: z.string().regex(/^\d{7,14}$/, "Please enter a valid phone number without country code"),
  password: z.string().min(8, "Password must be at least 8 characters").regex(/[A-Z]/, "Must contain at least one uppercase letter").regex(/[0-9]/, "Must contain at least one number"),
  studentId: z.string().min(6, "Student ID must be at least 6 digits"),
  department: z.string().min(1, "Department is required"),
  semester: z.string().min(1, "Semester is required"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  gender: z.enum(["male", "female", "other"], { 
    message: "Please select a gender" 
  }),
  location: z.string().min(3, "Location is required"),
  githubLink: z.string().url("Invalid GitHub link").optional().or(z.literal("")),
  portfolioLink: z.string().url("Invalid portfolio link").optional().or(z.literal("")),
  skills: z.string().min(5, "Please list your core technical skills"),
  motivation: z.string().min(20, "Please tell us why you're interested (min 20 chars)"),
  facebookLink: z.string().url("Invalid Facebook link").optional().or(z.literal("")),
  linkedinLink: z.string().url("Invalid LinkedIn link").optional().or(z.literal("")),
  profilePhoto: z.any().optional(),
  role: z.enum(["member", "team-leader"]),
  leadershipExperience: z.string().optional(),
  preferredDepartment: z.string().min(1, "Please select a target wing to join"),
  vision: z.string().optional(),
  agreeTerms: z.literal(true, {
    message: "You must agree to the Club Constitution",
  }),
})
.refine((data) => {
  if (data.role === "team-leader") {
    return !!data.leadershipExperience && data.leadershipExperience.length >= 20;
  }
  return true;
}, {
  message: "Please provide leadership experience (min 20 chars)",
  path: ["leadershipExperience"]
})
.refine((data) => {
  if (data.role === "team-leader") {
    return !!data.vision && data.vision.length >= 30;
  }
  return true;
}, {
  message: "Please share your vision (min 30 chars)",
  path: ["vision"]
});

const countries = [
  { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+1", flag: "🇺🇸", name: "USA" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+92", flag: "🇵🇰", name: "Pakistan" },
  { code: "+60", flag: "🇲🇾", name: "Malaysia" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+966", flag: "🇸🇦", name: "Saudi" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+1", flag: "🇨🇦", name: "Canada" },
];

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterPage = () => {
  const [step, setStep] = useState(1);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const { 
    register, 
    handleSubmit, 
    trigger, 
    watch,
    setValue,
    formState: { errors }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      role: "member",
      countryCode: "+880",
      phone: "",
    }
  });

  const selectedRole = watch("role");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };


  const nextStep = async () => {
    let fieldsToValidate: (keyof RegisterFormData)[] = [];
    if (step === 1) {
      fieldsToValidate = ["fullName", "studentId", "department", "semester", "bio", "role", "gender", "location"];
    }
    else if (step === 2) {
      fieldsToValidate = ["githubLink", "portfolioLink", "skills", "facebookLink", "linkedinLink"];
    }
    else if (step === 3) {
      fieldsToValidate = ["preferredDepartment", "motivation"];
      if (selectedRole === "team-leader") {
        fieldsToValidate.push("leadershipExperience", "vision");
      }
    }
    else if (step === 4) {
      fieldsToValidate = ["email", "countryCode", "phone", "password"];
    }
    
    const isValid = await trigger(fieldsToValidate);
    if (isValid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const onSubmit = async (data: RegisterFormData) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Registration failed");
      }

      setSuccess(result.message);
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepIndicator = () => {
    const steps = [1, 2, 3, 4];
    return (
      <div className="flex items-center justify-center gap-4 mb-12">
        {steps.map((i) => (
          <React.Fragment key={i}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-sm transition-all duration-300 ${
              step >= i 
                ? "bg-secondary text-white shadow-lg shadow-secondary/25" 
                : "bg-neutral-medium text-neutral-dark/40"
            }`}>
              {step > i ? <CheckCircle2 size={16} /> : i}
            </div>
            {i < steps.length && (
              <div className={`w-12 h-0.5 rounded-full transition-colors duration-500 ${step > i ? "bg-secondary" : "bg-neutral-medium"}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <main className="min-h-screen pt-16 pb-20 px-6 bg-[radial-gradient(circle_at_100%_0%,rgba(13,148,136,0.05)_0%,transparent_50%),radial-gradient(circle_at_0%_100%,rgba(45,212,191,0.05)_0%,transparent_50%)]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary font-bold text-[10px] uppercase tracking-[0.2em] mb-6"
          >
             Become Part of the Family
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black text-primary tracking-tighter mb-4">
            Ready to Step Up Your <span className="text-secondary">Coding Game?</span>
          </h1>
          <p className="text-neutral-dark/60 font-medium max-w-lg mx-auto text-base leading-relaxed">
            NPI Programming Club isn&apos;t just about code—it&apos;s about the people who write it. Join a community where your curiosity meets real-world skills and lifelong friendships.
          </p>
        </div>

        {renderStepIndicator()}

        <motion.div 
          layout
          className="rounded-[40px] bg-white/85 backdrop-blur-xl border border-white/40 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col relative transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left Panel: Why Join Us? */}
            <div className="bg-gradient-to-br from-[#0C2C55] to-[#1e293b] relative hidden lg:flex flex-col p-12 text-white overflow-hidden">
              {/* Background Illustration */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <Image 
                  src="/registration_illustration.png" 
                  alt="Registration Background" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-3xl font-black mb-8 tracking-tight">Why Join <br/><span className="text-secondary">Our Club?</span></h3>
                  
                  <div className="space-y-6">
                    {[
                      { icon: Rocket, title: "Learn by Doing", desc: "Get hands-on experience with modern tech and build real projects." },
                      { icon: Users, title: "Meet Your Network", desc: "Connect with seniors and alumni who are already making waves in the industry." },
                      { icon: Award, title: "Earn Recognition", desc: "Showcase your skills with official certificates and club badges." },
                      { icon: BookOpen, title: "Unlimited Access", desc: "Get the mentorship and tools you need to succeed." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-secondary/20 group-hover:border-secondary/50">
                          <item.icon size={20} className="text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm mb-0.5">{item.title}</h4>
                          <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <div className="mt-12 pt-12 border-t border-white/5">
                  <p className="text-xs text-white/30 font-medium italic">
                    &quot;This club transformed my understanding of software architecture. Highly recommended!&quot;
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden relative shadow-2xl">
                      <Image 
                        src="/team/gig-profile.png" 
                        alt="MD Amdad Islam" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-secondary">MD Amdad Islam</div>
                      <div className="text-[8px] text-white/40 uppercase font-bold tracking-tight">President @ NPI Programming Club</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative blobs */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            </div>

            {/* Form Area */}
            <div className="p-8 md:p-12">
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm font-bold"
                >
                  <AlertCircle size={18} />
                  {error}
                </motion.div>
              )}

              {success && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center gap-3 text-emerald-600 text-sm font-bold"
                >
                  <CheckCircle2 size={18} />
                  {success}
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)}>
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="mb-6">
                        <h2 className="text-2xl font-black text-primary">Tell us about yourself</h2>
                      </div>

                      {/* Professional Role Selector - Sleek Segmented Control */}
                      <div className="flex flex-col gap-3 mb-6">
                        <label className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-slate-400 ml-1">Application Type</label>
                        <div className="flex p-1.5 bg-slate-100/50 rounded-2xl w-fit border border-slate-200/60 shadow-inner">
                          <button
                            type="button"
                            onClick={() => setValue("role", "member")}
                            className={`px-8 py-2.5 rounded-[14px] text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                              selectedRole === "member" 
                                ? "bg-white text-secondary shadow-sm ring-1 ring-slate-200/50" 
                                : "text-slate-500 hover:text-slate-800"
                            }`}
                          >
                            <Users size={14} className={selectedRole === "member" ? "text-secondary" : "text-slate-400"} />
                            General Member
                          </button>
                          <button
                            type="button"
                            onClick={() => setValue("role", "team-leader")}
                            className={`px-8 py-2.5 rounded-[14px] text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                              selectedRole === "team-leader" 
                                ? "bg-white text-primary shadow-sm ring-1 ring-slate-200/50" 
                                : "text-slate-500 hover:text-slate-800"
                            }`}
                          >
                            <Award size={14} className={selectedRole === "team-leader" ? "text-primary" : "text-slate-400"} />
                            Team Leader
                          </button>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start pb-4">
                          {/* Full Name */}
                          <div className="space-y-2 order-2 md:order-1">
                            <label className="text-[11px] font-bold text-slate-500 ml-1">Full Name</label>
                            <div className="relative group">
                              <input 
                                {...register("fullName")}
                                type="text" 
                                placeholder="Enter your full name"
                                className={`w-full bg-slate-50/50 border ${errors.fullName ? 'border-red-200 bg-red-50/20' : 'border-slate-200'} px-4 py-3 rounded-xl text-sm text-slate-800 transition-all duration-200 focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/5 outline-none font-medium placeholder:text-slate-400`}
                              />
                              <User className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={16} />
                              <AnimatePresence>
                                {errors.fullName && (
                                  <motion.span 
                                    initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                                    className="absolute left-1 top-[calc(100%+4px)] text-red-500 text-[10px] font-bold"
                                  >
                                    {errors.fullName.message}
                                  </motion.span>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>

                          {/* Profile Photo Upload */}
                          <div className="flex flex-col items-center gap-2 order-1 md:order-2">
                            <div className="relative group">
                              <div className="w-20 h-20 rounded-2xl bg-neutral-light border-2 border-dashed border-neutral-dark/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-secondary/50 group-hover:bg-secondary/5 shadow-inner">
                                {imagePreview ? (
                                  <Image src={imagePreview} alt="Preview" fill className="object-cover animate-in fade-in zoom-in duration-500" />
                                ) : (
                                  <div className="flex flex-col items-center gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
                                    <Camera size={24} />
                                  </div>
                                )}
                              </div>
                              <input 
                                type="file" 
                                accept="image/*"
                                onChange={handleImageChange}
                                className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                title="Upload Profile Photo"
                              />
                              <motion.div 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="absolute -bottom-1 -right-1 bg-secondary text-white p-1.5 rounded-lg shadow-lg shadow-secondary/20 z-20"
                              >
                                <Camera size={12} />
                              </motion.div>
                            </div>
                            <p className="text-[8px] font-black uppercase tracking-widest text-primary/40">Photo</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[11px] font-bold text-slate-500 ml-1">Student ID</label>
                            <div className="relative">
                              <input 
                                {...register("studentId")}
                                type="text" 
                                placeholder="e.g. 123456"
                                className={`w-full bg-slate-50/50 border ${errors.studentId ? 'border-red-200 bg-red-50/20' : 'border-slate-200'} px-4 py-3 rounded-xl text-sm text-slate-800 transition-all duration-200 focus:bg-white focus:border-secondary outline-none font-medium placeholder:text-slate-400`}
                              />
                              <Hash className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[11px] font-bold text-slate-500 ml-1">Department</label>
                            <div className="relative">
                              <select 
                                {...register("department")}
                                className={`w-full bg-slate-50/50 border ${errors.department ? 'border-red-200 bg-red-50/20' : 'border-slate-200'} px-4 py-3 rounded-xl text-sm text-slate-800 transition-all duration-200 focus:bg-white focus:border-secondary outline-none font-medium appearance-none cursor-pointer`}
                                defaultValue=""
                              >
                                <option value="" disabled>Select Department</option>
                                <option value="CSE">Computer Science & Engineering</option>
                                <option value="EEE">Electrical & Electronics Engineering</option>
                                <option value="CIVIL">Civil Engineering</option>
                                <option value="ME">Mechanical Engineering</option>
                              </select>
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300">
                                <ArrowRight size={14} className="rotate-90" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[11px] font-bold text-slate-500 ml-1">Current Semester</label>
                          <div className="flex gap-2 flex-wrap">
                            {["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"].map(sem => (
                              <button
                                key={sem}
                                type="button"
                                onClick={() => setValue("semester", sem)}
                                className={`px-4 py-2 rounded-lg text-[11px] font-bold transition-all ${
                                  watch("semester") === sem 
                                    ? "bg-secondary text-white shadow-sm" 
                                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                                }`}
                              >
                                {sem}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[11px] font-bold text-slate-500 ml-1">Gender</label>
                            <div className="flex gap-2">
                              {["male", "female", "other"].map((g) => (
                                <button
                                  key={g}
                                  type="button"
                                  onClick={() => setValue("gender", g as "male" | "female" | "other")}
                                  className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all border ${
                                    watch("gender") === g 
                                      ? "bg-secondary text-white border-secondary shadow-lg shadow-secondary/20" 
                                      : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100"
                                  }`}
                                >
                                  {g.charAt(0).toUpperCase() + g.slice(1)}
                                </button>
                              ))}
                            </div>
                            <AnimatePresence>
                              {errors.gender && (
                                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-[10px] font-bold ml-1">
                                  {errors.gender.message}
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[11px] font-bold text-slate-500 ml-1">Current Location</label>
                            <div className="relative group">
                              <input 
                                {...register("location")}
                                type="text" 
                                placeholder="e.g. Dhaka, Bangladesh"
                                className={`w-full bg-slate-50/50 border ${errors.location ? 'border-red-200 bg-red-50/20' : 'border-slate-200'} px-4 py-3 rounded-xl text-sm text-slate-800 transition-all duration-200 focus:bg-white focus:border-secondary outline-none font-medium placeholder:text-slate-400`}
                              />
                              <Globe className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={16} />
                              <AnimatePresence>
                                {errors.location && (
                                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-[10px] font-bold absolute left-1 top-[calc(100%+4px)]">
                                    {errors.location.message}
                                  </motion.span>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[11px] font-bold text-slate-500 ml-1">Brief Bio</label>
                          <textarea 
                            {...register("bio")}
                            placeholder="A few words about your passion for technology..."
                            className={`w-full bg-slate-50/50 border ${errors.bio ? 'border-red-200 bg-red-50/20' : 'border-slate-200'} px-4 py-3 rounded-xl text-sm text-slate-800 transition-all duration-200 focus:bg-white focus:border-secondary outline-none font-medium placeholder:text-slate-400 min-h-[80px] resize-none`}
                          />
                        </div>
                      </div>

                      <div className="pt-6 flex justify-end">
                        <button 
                          type="button"
                          onClick={nextStep}
                          className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-secondary transition-all flex items-center gap-2 shadow-xl active:scale-95"
                        >
                          TECHNICAL PROFILE
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="mb-6">
                        <h2 className="text-2xl font-black text-primary mb-1">Show us your skills</h2>
                        <p className="text-sm text-neutral-dark/40 font-medium">Share your work and what you&apos;re passionate about building.</p>
                      </div>

                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">GitHub Profile</label>
                            <div className="relative w-full group">
                              <input 
                                {...register("githubLink")}
                                type="text" 
                                placeholder="https://github.com/your-username"
                                className={`w-full bg-white border ${errors.githubLink ? 'border-red-500 bg-red-50/10' : 'border-slate-900/10'} px-4.5 py-3.5 pl-12 rounded-xl font-semibold text-sm text-primary transition-all duration-300 focus:border-secondary focus:ring-4 focus:ring-secondary/5 outline-none`}
                              />
                              <FaGithub className={`absolute left-4.5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${errors.githubLink ? 'text-red-400' : 'text-neutral-dark/30 group-focus-within:text-secondary'}`} size={20} />
                              <AnimatePresence>
                                {errors.githubLink && (
                                  <motion.span 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute left-4 top-[calc(100%+4px)] text-red-500 text-[10px] font-bold uppercase flex items-center gap-1 z-10"
                                  >
                                    <AlertCircle size={10} /> {errors.githubLink.message}
                                  </motion.span>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Portfolio/Website</label>
                            <div className="relative w-full group">
                              <input 
                                {...register("portfolioLink")}
                                type="text" 
                                placeholder="https://yourportfolio.com"
                                className={`w-full bg-white border ${errors.portfolioLink ? 'border-red-500 bg-red-50/10' : 'border-slate-900/10'} px-4.5 py-3.5 pl-12 rounded-xl font-semibold text-sm text-primary transition-all duration-300 focus:border-secondary focus:ring-4 focus:ring-secondary/5 outline-none`}
                              />
                              <Globe className={`absolute left-4.5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${errors.portfolioLink ? 'text-red-400' : 'text-neutral-dark/30 group-focus-within:text-secondary'}`} size={20} />
                              <AnimatePresence>
                                {errors.portfolioLink && (
                                  <motion.span 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute left-4 top-[calc(100%+4px)] text-red-500 text-[10px] font-bold uppercase flex items-center gap-1 z-10"
                                  >
                                    <AlertCircle size={10} /> {errors.portfolioLink.message}
                                  </motion.span>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Technical Skills</label>
                            <div className="relative w-full group">
                              <textarea 
                                {...register("skills")}
                                placeholder="e.g. React, Node.js, Python, Competitive Programming..."
                                className={`w-full bg-white border ${errors.skills ? 'border-red-500 bg-red-50/10' : 'border-slate-900/10'} px-4.5 py-3.5 pl-12 rounded-xl font-semibold text-sm text-primary transition-all duration-300 focus:border-secondary focus:ring-4 focus:ring-secondary/5 outline-none min-h-[100px] resize-none pt-4`}
                              />
                              <Rocket className={`absolute left-4.5 top-8 transition-colors duration-300 ${errors.skills ? 'text-red-400' : 'text-neutral-dark/30 group-focus-within:text-secondary'}`} size={20} />
                              <AnimatePresence>
                                {errors.skills && (
                                  <motion.span 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute left-4 top-[calc(100%+4px)] text-red-500 text-[10px] font-bold uppercase flex items-center gap-1 z-10"
                                  >
                                    <AlertCircle size={10} /> {errors.skills.message}
                                  </motion.span>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Facebook Link</label>
                            <div className="relative w-full group">
                              <input 
                                {...register("facebookLink")}
                                type="text" 
                                placeholder="https://facebook.com/your-profile"
                                className={`w-full bg-white border ${errors.facebookLink ? 'border-red-500 bg-red-50/10' : 'border-slate-900/10'} px-4.5 py-3.5 pl-12 rounded-xl font-semibold text-sm text-primary transition-all duration-300 focus:border-secondary focus:ring-4 focus:ring-secondary/5 outline-none`}
                              />
                              <FaFacebook className={`absolute left-4.5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${errors.facebookLink ? 'text-red-400' : 'text-neutral-dark/30 group-focus-within:text-secondary'}`} size={20} />
                              <AnimatePresence>
                                {errors.facebookLink && (
                                  <motion.span 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute left-4 top-[calc(100%+4px)] text-red-500 text-[10px] font-bold uppercase flex items-center gap-1 z-10"
                                  >
                                    <AlertCircle size={10} /> {errors.facebookLink.message}
                                  </motion.span>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">LinkedIn Link</label>
                            <div className="relative w-full group">
                              <input 
                                {...register("linkedinLink")}
                                type="text" 
                                placeholder="https://linkedin.com/in/your-profile"
                                className={`w-full bg-white border ${errors.linkedinLink ? 'border-red-500 bg-red-50/10' : 'border-slate-900/10'} px-4.5 py-3.5 pl-12 rounded-xl font-semibold text-sm text-primary transition-all duration-300 focus:border-secondary focus:ring-4 focus:ring-secondary/5 outline-none`}
                              />
                              <FaLinkedin className={`absolute left-4.5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${errors.linkedinLink ? 'text-red-400' : 'text-neutral-dark/30 group-focus-within:text-secondary'}`} size={20} />
                              <AnimatePresence>
                                {errors.linkedinLink && (
                                  <motion.span 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute left-4 top-[calc(100%+4px)] text-red-500 text-[10px] font-bold uppercase flex items-center gap-1 z-10"
                                  >
                                    <AlertCircle size={10} /> {errors.linkedinLink.message}
                                  </motion.span>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 flex justify-between">
                        <button 
                          type="button"
                          onClick={prevStep}
                          className="border border-slate-200 text-slate-500 px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-slate-50 hover:text-primary transition-all flex items-center gap-2 active:scale-95"
                        >
                          <ArrowLeft size={18} />
                          BACK
                        </button>
                        <button 
                          type="button"
                          onClick={nextStep}
                          className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-secondary transition-all flex items-center gap-2 shadow-xl active:scale-95"
                        >
                          CHOOSE YOUR TEAM
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                      <div className="space-y-6">
                          {/* Experience Section - Only for Leaders */}
                          {selectedRole === "team-leader" && (
                            <div className="space-y-4">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                                  <Award size={18} />
                                </div>
                                <h3 className="text-sm font-black text-primary uppercase tracking-wider">Leadership Experience</h3>
                              </div>
                              <div className="relative group">
                                <textarea 
                                  {...register("leadershipExperience")}
                                  placeholder="Describe your management style and previous roles..."
                                  className={`w-full bg-slate-50/30 border ${errors.leadershipExperience ? 'border-red-200 bg-red-50/20' : 'border-slate-200'} px-6 py-5 rounded-[24px] text-sm text-slate-800 transition-all duration-300 focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 outline-none font-medium min-h-[120px] resize-none shadow-sm`}
                                />
                                <AnimatePresence>
                                  {errors.leadershipExperience && (
                                    <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-[10px] font-bold mt-2 block ml-2">
                                      {errors.leadershipExperience.message}
                                    </motion.span>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                          )}

                        {/* Wing Selection Section - Premium Dropdown */}
                        <div className="space-y-6">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                              <Layers size={18} />
                            </div>
                            <h3 className="text-sm font-black text-primary uppercase tracking-wider">Your Joined Team</h3>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="relative group">
                              <select 
                                {...register("preferredDepartment")}
                                className={`w-full bg-slate-50/50 border ${errors.preferredDepartment ? 'border-red-200 bg-red-50/20' : 'border-slate-200'} px-6 py-4 rounded-[20px] text-sm text-slate-800 transition-all duration-300 focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 outline-none font-bold appearance-none cursor-pointer`}
                                defaultValue=""
                              >
                                <option value="" disabled>Select your proficient sector</option>
                                <option value="Technical">Technical Wing — Software & Research</option>
                                <option value="Events">Event Management — Coordination & Logistics</option>
                                <option value="PR">Public Relations — Media & Communications</option>
                                <option value="Mentorship">Mentorship — Student Growth & Training</option>
                                <option value="Graphics">Creative Wing — Design & UI/UX</option>
                                <option value="Academics">Academic Wing — Research & Education</option>
                              </select>
                              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300">
                                <ArrowRight size={16} className="rotate-90" />
                              </div>
                              <AnimatePresence>
                                {errors.preferredDepartment && (
                                  <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-[10px] font-bold mt-2 block ml-2">
                                    {errors.preferredDepartment.message}
                                  </motion.span>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        </div>

                        {/* Motivation / Personal Note Section */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                              <Target size={18} />
                            </div>
                            <h3 className="text-sm font-black text-primary uppercase tracking-wider">
                              {selectedRole === "team-leader" ? "Core Motivation" : "Personal Note"}
                            </h3>
                          </div>
                          <div className="relative group">
                            <textarea 
                              {...register("motivation")}
                              placeholder={selectedRole === "team-leader" 
                                ? "What drives you to lead this community?" 
                                : "Leave a note or message for the team..."}
                              className={`w-full bg-slate-50/30 border ${errors.motivation ? 'border-red-200 bg-red-50/20' : 'border-slate-200'} px-6 py-5 rounded-[24px] text-sm text-slate-800 transition-all duration-300 focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 outline-none font-medium min-h-[120px] resize-none shadow-sm`}
                            />
                            <AnimatePresence>
                              {errors.motivation && (
                                <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-[10px] font-bold mt-2 block ml-2">
                                  {errors.motivation.message}
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                          {/* Vision Section - Only for Leaders */}
                          {selectedRole === "team-leader" && (
                            <div className="space-y-4">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                                  <Rocket size={18} />
                                </div>
                                <h3 className="text-sm font-black text-primary uppercase tracking-wider">Your Vision</h3>
                              </div>
                              <div className="relative group">
                                <textarea 
                                  {...register("vision")}
                                  placeholder="What impact do you want to create as a leader?"
                                  className={`w-full bg-slate-50/30 border ${errors.vision ? 'border-red-200 bg-red-50/20' : 'border-slate-200'} px-6 py-5 rounded-[24px] text-sm text-slate-800 transition-all duration-300 focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 outline-none font-medium min-h-[120px] resize-none shadow-sm`}
                                />
                                <AnimatePresence>
                                  {errors.vision && (
                                    <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-[10px] font-bold mt-2 block ml-2">
                                      {errors.vision.message}
                                    </motion.span>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                          )}
                      </div>
                        <div className="pt-6 flex justify-between">
                          <button 
                            type="button"
                            onClick={prevStep}
                            className="border border-slate-200 text-slate-500 px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-slate-50 hover:text-primary transition-all flex items-center gap-2 active:scale-95"
                          >
                            <ArrowLeft size={18} />
                            BACK
                          </button>
                          <button 
                            type="button"
                            onClick={nextStep}
                            className="bg-primary text-white px-10 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#0a2344] transition-all flex items-center gap-3 shadow-xl shadow-primary/20 active:scale-95"
                          >
                            FINAL ACCOUNT SETUP
                            <ArrowRight size={18} />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 4 && (
                      <motion.div
                        key="step-final"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="mb-8">
                        <h2 className="text-2xl font-black text-primary mb-1">Account & Motivation</h2>
                        <p className="text-sm text-neutral-dark/40 font-medium">Finalize your application for review.</p>
                      </div>

                      <div className="space-y-8">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Institutional Email</label>
                          <div className="relative w-full group">
                            <input 
                              {...register("email")}
                              type="email" 
                              placeholder="your.name@student.npi.edu"
                              className={`w-full bg-white border ${errors.email ? 'border-red-500 bg-red-50/10' : 'border-slate-900/10'} px-4.5 py-3.5 pl-12 rounded-xl font-semibold text-sm text-primary transition-all duration-300 focus:border-secondary focus:ring-4 focus:ring-secondary/5 outline-none`}
                            />
                            <Mail className={`absolute left-4.5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${errors.email ? 'text-red-400' : 'text-neutral-dark/30 group-focus-within:text-secondary'}`} size={20} />
                            <AnimatePresence>
                              {errors.email && (
                                <motion.span 
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  className="absolute left-4 top-[calc(100%+4px)] text-red-500 text-[10px] font-bold uppercase flex items-center gap-1 z-10"
                                >
                                  <AlertCircle size={10} /> {errors.email.message}
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Phone Number</label>
                          <div className={`flex bg-white border ${errors.phone || errors.countryCode ? 'border-red-500 bg-red-50/10' : 'border-slate-900/10'} rounded-xl overflow-hidden focus-within:border-secondary focus-within:ring-4 focus-within:ring-secondary/5 transition-all duration-300 relative`}>
                            <div className="relative border-r border-slate-900/10 flex-shrink-0">
                              <select 
                                {...register("countryCode")}
                                className="bg-transparent pl-10 pr-4 py-3.5 font-bold text-sm text-primary outline-none appearance-none cursor-pointer h-full"
                              >
                                {countries.map(c => (
                                  <option key={c.code + c.name} value={c.code}>{c.flag} {c.code}</option>
                                ))}
                              </select>
                              <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-dark/20 group-focus-within:text-secondary" size={18} />
                            </div>
                            <div className="relative flex-grow">
                              <input 
                                {...register("phone")}
                                type="tel" 
                                placeholder="e.g. 1712345678"
                                className="w-full bg-transparent px-4.5 py-3.5 pl-12 font-semibold text-sm text-primary outline-none"
                              />
                              <Phone className="absolute left-4.5 top-1/2 -translate-y-1/2 text-neutral-dark/20 group-focus-within:text-secondary" size={20} />
                            </div>
                            <AnimatePresence>
                              {(errors.phone || errors.countryCode) && (
                                <motion.span 
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  className="absolute left-4 top-[calc(100%+4px)] text-red-500 text-[10px] font-bold uppercase flex items-center gap-1 z-10"
                                >
                                  <AlertCircle size={10} /> {errors.phone?.message || errors.countryCode?.message}
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Password</label>
                          <div className="relative w-full group">
                            <input 
                              {...register("password")}
                              type="password" 
                              placeholder="Create a strong password"
                              className={`w-full bg-white border ${errors.password ? 'border-red-500 bg-red-50/10' : 'border-slate-900/10'} px-4.5 py-3.5 pl-12 rounded-xl font-semibold text-sm text-primary transition-all duration-300 focus:border-secondary focus:ring-4 focus:ring-secondary/5 outline-none`}
                            />
                            <Lock className={`absolute left-4.5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${errors.password ? 'text-red-400' : 'text-neutral-dark/30 group-focus-within:text-secondary'}`} size={20} />
                            <AnimatePresence>
                              {errors.password && (
                                <motion.span 
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  className="absolute left-4 top-[calc(100%+4px)] text-red-500 text-[10px] font-bold uppercase flex items-center gap-1 z-10"
                                >
                                  <AlertCircle size={10} /> {errors.password.message}
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className={`p-6 rounded-3xl border transition-colors ${errors.agreeTerms ? 'border-red-500 bg-red-50/10' : 'bg-neutral-light/50 border-neutral-dark/5 hover:bg-neutral-light/80'} flex items-start gap-4`}>
                            <input 
                              {...register("agreeTerms")}
                              type="checkbox" 
                              className="mt-1 w-5 h-5 rounded-lg accent-secondary cursor-pointer" 
                            />
                            <p className="text-sm text-neutral-dark/60 font-medium leading-relaxed">
                              I certify that the information provided is accurate. I agree to abide by the <Link href="#" className="text-secondary font-bold hover:underline">Club Constitution</Link> and <Link href="#" className="text-secondary font-bold hover:underline">Code of Conduct</Link>.
                            </p>
                          </div>
                          <AnimatePresence>
                            {errors.agreeTerms && (
                              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-[10px] font-bold uppercase ml-4">
                                {errors.agreeTerms.message}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {Object.keys(errors).length > 0 && (
                        <div className="p-4 bg-red-50 border border-red-100 rounded-2xl mb-6">
                          <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                            <AlertCircle size={14} /> Please fix the following errors:
                          </p>
                          <ul className="list-disc list-inside space-y-1">
                            {Object.entries(errors).map(([key, error]) => (
                              <li key={key} className="text-red-500 text-[10px] font-bold">
                                {key.charAt(0).toUpperCase() + key.slice(1)}: {error?.message as string}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="pt-6 flex justify-between">
                        <button 
                          type="button"
                          onClick={prevStep}
                          className="border border-slate-200 text-slate-500 px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-slate-50 hover:text-primary transition-all flex items-center gap-2 active:scale-95"
                        >
                          <ArrowLeft size={18} />
                          BACK
                        </button>
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-secondary text-white px-10 py-3.5 rounded-xl font-bold text-sm hover:bg-primary transition-all flex items-center gap-2 shadow-xl shadow-secondary/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? "Submitting..." : "SUBMIT APPLICATION"}
                          <CheckCircle2 size={18} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </motion.div>

        <p className="text-center mt-12 text-neutral-dark/40 font-bold uppercase tracking-widest text-sm">
          Already have an account? <Link href="/login" className="text-secondary hover:underline ml-2 transition-all">Sign In</Link>
        </p>
      </div>
    </main>
  );
};

// Internal icon for motivation field
const Target = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export default RegisterPage;
