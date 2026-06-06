import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  name: { type: String, default: 'Adithya Ashok' },
  title: { type: String, default: 'B.Tech CSE Student | MERN Stack Developer' },
  bio: { type: String, default: '' },
  careerObjective: { type: String, default: '' },
  email: { type: String, default: '' },
  phone: { type: String, default: '' },
  location: { type: String, default: 'Palai, Kerala, India' },
  education: [{
    institution: String,
    degree: String,
    year: String,
    gpa: String,
  }],
  achievements: [String],
  resumeUrl: { type: String, default: '' },
  profileImageUrl: { type: String, default: '' },
  visitorCount: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model('Profile', profileSchema);
