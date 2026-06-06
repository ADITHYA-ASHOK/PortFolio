import mongoose from 'mongoose';

const timelineSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  description: { type: String, default: '' },
  date: { type: String, default: '' },
  category: {
    type: String,
    enum: ['education', 'certification', 'hackathon', 'internship', 'achievement', 'experience'],
    default: 'achievement',
  },
  icon: { type: String, default: '' },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model('Timeline', timelineSchema);
