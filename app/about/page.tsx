"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Users, Trophy, Rocket, Target, Lightbulb, 
  Code2, GraduationCap, Laptop, Share2, 
  MessageSquare
} from "lucide-react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./About.module.css";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "MD Amdad Islam",
      role: "Founder & CEO",
      bio: "Passionate about competitive programming and helping others excel in coding",
      expertise: "C++, Python, Data Structures",
      experience: "8+ years in tech",
      image: "/team/gig-profile.png",
      socials: { facebook: "#", linkedin: "#", github: "#" }
    },
    {
      name: "SARAH KHAN",
      role: "Co-Founder & CFO",
      bio: "Building a community where every programmer can grow and succeed",
      expertise: "JavaScript, Web Development, UI/UX",
      experience: "6+ years in development",
      image: "/team/sarah.png",
      socials: { facebook: "#", linkedin: "#", github: "#" }
    },
    {
      name: "RAHUL SHARMA",
      role: "Lead Instructor & Workshop Developer",
      bio: "Making complex concepts simple and accessible for everyone",
      expertise: "Java, System Design, DSA",
      experience: "7+ years as educator",
      image: "/team/rahul.png",
      socials: { facebook: "#", linkedin: "#", github: "#" }
    },
    {
      name: "PRIYA PATEL",
      role: "Technical Lead & Project Manager",
      bio: "Guiding members through real-world project development",
      expertise: "React, Node.js, Full Stack",
      experience: "5+ years in startups",
      image: "/team/priya.png",
      socials: { facebook: "#", linkedin: "#", github: "#" }
    },
    {
      name: "ALEX KUMAR",
      role: "Community Manager & Social Lead",
      bio: "Connecting and empowering our diverse programming community",
      expertise: "Community Building, Event Mgmt",
      experience: "4+ years in community work",
      image: "/team/alex.png",
      socials: { facebook: "#", linkedin: "#", github: "#" }
    },
    {
      name: "EMMA WILSON",
      role: "Content Creator & Technical Writer",
      bio: "Creating engaging tutorials and learning resources",
      expertise: "Technical Documentation, Blogging",
      experience: "3+ years creating content",
      image: "https://i.pravatar.cc/300?u=emma",
      socials: { facebook: "#", linkedin: "#", github: "#" }
    },
    {
      name: "ADITYA SINGH",
      role: "Senior Mentor & Problem Solver",
      bio: "Helping members debug their code and build confidence",
      expertise: "C++, Competitive Programming",
      experience: "9+ years in tech",
      image: "https://i.pravatar.cc/300?u=aditya",
      socials: { facebook: "#", linkedin: "#", github: "#" }
    },
    {
      name: "LISA ZHANG",
      role: "UI/UX Designer & Brand Lead",
      bio: "Creating beautiful and intuitive experiences for our members",
      expertise: "Figma, UI Design, Branding",
      experience: "5+ years in design",
      image: "https://i.pravatar.cc/300?u=lisa",
      socials: { facebook: "#", linkedin: "#", github: "#" }
    }
  ];

  const benefits = [
    {
      icon: GraduationCap,
      title: "Learn from Experts",
      desc: "Access workshops and training sessions led by experienced developers and industry professionals."
    },
    {
      icon: Trophy,
      title: "Compete & Win",
      desc: "Participate in regular coding competitions and challenges to test your skills and win prizes."
    },
    {
      icon: Laptop,
      title: "Build Real Projects",
      desc: "Work on practical, real-world projects that solve actual problems and build your portfolio."
    },
    {
      icon: Share2,
      title: "Network & Connect",
      desc: "Build meaningful relationships with like-minded developers and expand your professional network."
    },
    {
      icon: MessageSquare,
      title: "Get Mentorship",
      desc: "Receive personalized guidance from experienced mentors to navigate your programming journey."
    },
    {
      icon: Code2,
      title: "Access Resources",
      desc: "Unlock a treasure trove of learning materials, tutorials, tools, and exclusive content."
    }
  ];

  const stats = [
    { num: "500+", label: "Active Members", desc: "Diverse community of passionate programmers." },
    { num: "50+", label: "Events Hosted", desc: "Workshops, competitions, and networking events." },
    { num: "100+", label: "Projects Completed", desc: "Real-world projects built by our members." },
    { num: "95%", label: "Success Rate", desc: "Members reporting significant skill improvement." }
  ];

  return (
    <main className="min-h-screen bg-neutral-light overflow-x-hidden">
      {/* Hero Section */}
      <section className={`py-12 md:py-20 ${styles.heroGradient}`}>
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Empowering the Next Generation
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-primary mb-6"
          >
            About NPI <span className="text-secondary">Programming</span> Club
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-dark/70 max-w-2xl mx-auto"
          >
            Creating a vibrant ecosystem where passionate developers learn, grow, and succeed together.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-secondary/10 rounded-2xl blur-2xl group-hover:bg-secondary/20 transition-all duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/about.png" 
                    alt="NPI Programming Club Journey" 
                    width={800} 
                    height={600}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <p className="text-white font-bold text-2xl">Since Day One</p>
                    <p className="text-white/80">Built by developers, for developers.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-neutral-dark/80 leading-relaxed">
                <p>
                  NPI Programming Club was founded with a simple yet powerful vision: 
                  to create a community where passionate developers can learn, grow, 
                  and succeed together. What started as a small group of enthusiastic 
                  coders has blossomed into a vibrant ecosystem with over 500 active 
                  members.
                </p>
                <p>
                  Our journey has been marked by countless success stories, thrilling 
                  competitions, and transformative learning experiences. We've hosted 
                  50+ events, completed 100+ projects, and helped numerous programmers 
                  land their dream jobs in top tech companies.
                </p>
                <p>
                  Today, we stand as one of the most dynamic programming communities, 
                  dedicated to fostering innovation, collaboration, and excellence in 
                  software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-neutral-medium/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -5 }}
              className={`p-10 rounded-3xl ${styles.glassCard}`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${styles.missionIcon}`}>
                <Target className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Our Mission</h3>
              <p className="text-lg text-neutral-dark/80 leading-relaxed">
                Our mission is to empower aspiring and experienced programmers 
                through collaborative learning, hands-on projects, and competitive 
                challenges. We strive to create an inclusive platform where every 
                member can develop technical expertise, build lasting relationships, 
                and achieve their professional goals.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className={`p-10 rounded-3xl ${styles.glassCard}`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${styles.missionIcon}`}>
                <Rocket className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Our Vision</h3>
              <p className="text-lg text-neutral-dark/80 leading-relaxed">
                To be the leading programming community that inspires and develops 
                exceptional software engineers. We envision a world where every 
                programmer has access to quality education, mentorship, and 
                opportunities to showcase their talent and contribute to solving 
                real-world problems through innovative technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Join NPI Programming Club?</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl border border-neutral-dark/5 hover:border-secondary/20 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="text-secondary" size={24} />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{benefit.title}</h4>
                <p className="text-neutral-dark/70 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-[0.2em]">Our Achievements</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-2 text-secondary">{stat.num}</div>
                <div className="text-xl font-bold mb-2">{stat.label}</div>
                <p className="text-white/60 text-sm">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-neutral-light">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 uppercase">Our Team Members</h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
          </div>
          
          <div className={styles.teamGrid}>
            {teamMembers.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white p-8 rounded-3xl border border-neutral-dark/5 text-center flex flex-col items-center ${styles.teamCard}`}
              >
                <div className={styles.avatarContainer}>
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg relative">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className="w-16 h-0.5 bg-neutral-dark/10 mb-6" />
                
                <h3 className="text-xl font-black text-primary mb-1 uppercase tracking-tight">{member.name}</h3>
                <p className="text-secondary font-bold text-sm mb-4">{member.role}</p>
                
                <p className="text-neutral-dark/70 text-sm italic mb-6 leading-relaxed">
                  "{member.bio}"
                </p>
                
                <div className="text-left w-full space-y-2 mb-8 bg-neutral-medium/30 p-4 rounded-xl">
                  <div className="text-[11px] text-neutral-dark/50 font-bold uppercase tracking-widest">Expertise</div>
                  <div className="text-xs text-neutral-dark font-medium">{member.expertise}</div>
                  <div className="pt-2 text-[11px] text-neutral-dark/50 font-bold uppercase tracking-widest">Experience</div>
                  <div className="text-xs text-neutral-dark font-medium">{member.experience}</div>
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <a href={member.socials.facebook} className="w-10 h-10 rounded-full bg-neutral-medium/50 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all shadow-sm">
                    <FaFacebook size={18} />
                  </a>
                  <a href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-neutral-medium/50 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all shadow-sm">
                    <FaLinkedin size={18} />
                  </a>
                  <a href={member.socials.github} className="w-10 h-10 rounded-full bg-neutral-medium/50 flex items-center justify-center text-[#24292e] hover:bg-[#24292e] hover:text-white transition-all shadow-sm">
                    <FaGithub size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/5 border-t border-secondary/10">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Ready to start your coding journey?</h2>
          <button className="bg-secondary text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-secondary/90 shadow-xl hover:shadow-secondary/20 transition-all active:scale-95">
            Join the Club Today
          </button>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
