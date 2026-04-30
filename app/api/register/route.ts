import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();

    const { 
      fullName, email, studentId, phone, countryCode, password,
      department, semester, bio, dob, gender, location,
      githubLink, portfolioLink, skills, motivation,
      facebookLink, linkedinLink, profilePhoto, role,
      preferredDepartment, leadershipExperience, vision
    } = data;

    // Check if user already exists
    const userExists = await User.findOne({ 
      $or: [{ email }, { studentId }] 
    });

    if (userExists) {
      return NextResponse.json(
        { message: 'User with this email or Student ID already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    // Note: By default, status is 'pending' for members.
    // If you want team-leaders to also be pending, the default model value handles it.
    const user = await User.create({
      fullName,
      email,
      studentId,
      phone,
      countryCode,
      password: hashedPassword,
      department,
      semester,
      bio,
      dob,
      gender,
      location,
      githubLink,
      portfolioLink,
      skills,
      motivation,
      facebookLink,
      linkedinLink,
      profilePhoto,
      role,
      preferredDepartment,
      leadershipExperience,
      vision,
      status: 'pending' 
    });

    return NextResponse.json(
      { message: 'User registered successfully. Waiting for team leader approval.', userId: user._id },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Registration Error:', error);
    return NextResponse.json(
      { message: error.message || 'Something went wrong during registration' },
      { status: 500 }
    );
  }
}
