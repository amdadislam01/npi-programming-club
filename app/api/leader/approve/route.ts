import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || (session.user as any).role !== 'team-leader') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { userId, action } = await req.json(); // action: 'approve' or 'reject'

    if (!userId || !['approved', 'rejected'].includes(action)) {
      return NextResponse.json({ message: 'Invalid data' }, { status: 400 });
    }

    await dbConnect();

    const member = await User.findById(userId);

    if (!member) {
      return NextResponse.json({ message: 'Member not found' }, { status: 404 });
    }

    // Ensure the leader is approving someone from their team
    if (member.preferredDepartment !== (session.user as any).team) {
      return NextResponse.json({ message: 'Unauthorized: Not your team member' }, { status: 403 });
    }

    member.status = action;
    await member.save();

    return NextResponse.json({ message: `Member ${action} successfully` });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
