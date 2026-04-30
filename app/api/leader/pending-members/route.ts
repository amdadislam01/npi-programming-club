import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || (session.user as any).role !== 'team-leader') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const leaderTeam = (session.user as any).team;

    await dbConnect();
    
    // Find members who selected this team and are pending
    const pendingMembers = await User.find({
      preferredDepartment: leaderTeam,
      role: 'member',
      status: 'pending'
    }).sort({ createdAt: -1 });

    return NextResponse.json(pendingMembers);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
