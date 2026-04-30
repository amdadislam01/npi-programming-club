"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard") || pathname?.startsWith("/leader-dashboard") || pathname?.startsWith("/super-admin");

  return (
    <>
      {!isDashboard && <Navbar />}
      <main className={`flex-1 ${!isDashboard ? "pt-[80px]" : ""}`}>
        {children}
      </main>
      {!isDashboard && <Footer />}
    </>
  );
}
