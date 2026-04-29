"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, Hash, ArrowRight, AlertCircle, Rocket, Users, Award, BookOpen, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const loginSchema = z.object({
  studentId: z.string().min(6, "Student ID must be at least 6 digits"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login Attempt:", data);
    alert("Login attempt submitted. Integrating with backend soon!");
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
             Continue Your Journey
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black text-primary tracking-tighter mb-4">
            Welcome Back, <span className="text-secondary">Club Member!</span>
          </h1>
          <p className="text-neutral-dark/60 font-medium max-w-lg mx-auto text-base leading-relaxed">
            The club hub is where your progress, projects, and community live. Sign in to see what&apos;s new in the club today.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[40px] bg-white/85 backdrop-blur-xl border border-white/40 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col relative transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left Panel: Why Log In? */}
            <div className="bg-gradient-to-br from-[#0C2C55] to-[#1e293b] relative hidden lg:flex flex-col p-12 text-white overflow-hidden">
              {/* Background Illustration */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <Image 
                  src="/registration_illustration.png" 
                  alt="Login Background" 
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
                  <h3 className="text-3xl font-black mb-8 tracking-tight">Access Your <br/><span className="text-secondary">Dashboard</span></h3>
                  
                  <div className="space-y-6">
                    {[
                      { icon: Rocket, title: "Track Progress", desc: "View your completed projects and earned club badges." },
                      { icon: Users, title: "Connect", desc: "Message other members and collaborate on new ideas." },
                      { icon: Award, title: "Claim Rewards", desc: "Access exclusive resources and certificate downloads." },
                      { icon: BookOpen, title: "Learn More", desc: "Get early access to upcoming workshops and events." }
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
                    &quot;Your dashboard is your cockpit. Fly high and build amazing things.&quot;
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
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-10">
                <h2 className="text-2xl font-black text-primary mb-1">Sign In</h2>
                <p className="text-sm text-neutral-dark/40 font-medium">Please enter your student credentials.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Student ID</label>
                  <div className="relative w-full group">
                    <input 
                      {...register("studentId")}
                      type="text" 
                      placeholder="e.g. 123456"
                      className={`w-full bg-white border ${errors.studentId ? 'border-red-500 bg-red-50/10' : 'border-slate-900/10'} px-4.5 py-3.5 pl-12 rounded-xl font-semibold text-sm text-primary transition-all duration-300 focus:border-secondary focus:ring-4 focus:ring-secondary/5 outline-none`}
                    />
                    <Hash className={`absolute left-4.5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${errors.studentId ? 'text-red-400' : 'text-neutral-dark/30 group-focus-within:text-secondary'}`} size={20} />
                    {errors.studentId && (
                      <motion.span 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-4 top-[calc(100%+4px)] text-red-500 text-[10px] font-bold uppercase flex items-center gap-1 z-10"
                      >
                        <AlertCircle size={10} /> {errors.studentId.message}
                      </motion.span>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center px-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40">Password</label>
                    <Link href="#" className="text-[10px] font-bold text-secondary hover:underline transition-all">Forgot Password?</Link>
                  </div>
                  <div className="relative w-full group">
                    <input 
                      {...register("password")}
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••"
                      className={`w-full bg-white border ${errors.password ? 'border-red-500 bg-red-50/10' : 'border-slate-900/10'} px-4.5 py-3.5 pl-12 pr-12 rounded-xl font-semibold text-sm text-primary transition-all duration-300 focus:border-secondary focus:ring-4 focus:ring-secondary/5 outline-none`}
                    />
                    <Lock className={`absolute left-4.5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${errors.password ? 'text-red-400' : 'text-neutral-dark/30 group-focus-within:text-secondary'}`} size={20} />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-dark/20 hover:text-secondary transition-colors duration-300"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                    {errors.password && (
                      <motion.span 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-4 top-[calc(100%+4px)] text-red-500 text-[10px] font-bold uppercase flex items-center gap-1 z-10"
                      >
                        <AlertCircle size={10} /> {errors.password.message}
                      </motion.span>
                    )}
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm hover:bg-secondary transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/10 active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? "SIGNING IN..." : "SIGN IN"}
                    <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>

        <p className="text-center mt-12 text-neutral-dark/40 font-bold uppercase tracking-widest text-sm">
          Don&apos;t have an account? <Link href="/register" className="text-secondary hover:underline ml-2 transition-all">Create Account</Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
