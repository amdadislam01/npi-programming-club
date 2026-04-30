import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    // 1. Role-based Access Control
    if (path.startsWith("/super-admin") && !["admin", "super-admin"].includes(token?.role as string)) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    if (path.startsWith("/leader-dashboard") && token?.role !== "team-leader") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // 2. Dashboard Landing Page Redirection (Central Dispatcher)
    if (path === "/dashboard") {
      if (["admin", "super-admin"].includes(token?.role as string)) {
        return NextResponse.redirect(new URL("/super-admin", req.url));
      }
      if (token?.role === "team-leader") {
        return NextResponse.redirect(new URL("/leader-dashboard", req.url));
      }
    }

    // 2. Pending/Rejected Member Protection
    // If a member is not approved, they shouldn't access the main dashboard content
    // although the page itself has conditional rendering, this is an extra layer.
    if (path === "/dashboard" && token?.status !== "approved" && token?.role === "member") {
       // Allow them to see the dashboard since it shows the "Pending" UI
       return NextResponse.next();
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/leader-dashboard/:path*", "/super-admin/:path*"],
};
