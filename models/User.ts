import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please provide a full name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
  },
  studentId: {
    type: String,
    required: [true, 'Please provide a student ID'],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, 'Please provide a phone number'],
  },
  countryCode: {
    type: String,
    default: '+880',
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    select: false, // Don't return password by default
  },
  department: {
    type: String,
    required: [true, 'Please provide a department'],
  },
  semester: {
    type: String,
    required: [true, 'Please provide a semester'],
  },
  bio: String,
  dob: String,
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
  },
  location: String,
  githubLink: String,
  portfolioLink: String,
  skills: String,
  motivation: String,
  facebookLink: String,
  linkedinLink: String,
  profilePhoto: String, // URL to image
  role: {
    type: String,
    enum: ['member', 'team-leader', 'admin', 'super-admin'],
    default: 'member',
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  preferredDepartment: {
    type: String, // The Wing/Team they selected
    required: true,
  },
  leadershipExperience: String,
  vision: String,
}, {
  timestamps: true,
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
