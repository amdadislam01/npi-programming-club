import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    // Check if the user is a super-admin or admin
    if (!session || !["admin", "super-admin"].includes((session.user as any).role)) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();

    // Fetch all users with role: "team-leader" and status: "pending"
    const pendingLeaders = await User.find({ 
      role: "team-leader", 
      status: "pending" 
    }).sort({ createdAt: -1 });

    return NextResponse.json(pendingLeaders);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
