import React from "react";
import LeaderSidebar from "@/components/leader-dashboard/LeaderSidebar";
import LeaderHeader from "@/components/leader-dashboard/LeaderHeader";

export default function LeaderDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <LeaderSidebar />
      <div className="pl-72 flex flex-col min-h-screen">
        <LeaderHeader />
        <main className="flex-1 p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
