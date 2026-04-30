import React from "react";
import SuperAdminSidebar from "@/components/super-admin/SuperAdminSidebar";
import SuperAdminHeader from "@/components/super-admin/SuperAdminHeader";

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <SuperAdminSidebar />
      <div className="pl-80 flex flex-col min-h-screen">
        <SuperAdminHeader />
        <main className="flex-1 p-12 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
