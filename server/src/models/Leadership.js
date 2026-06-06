import mongoose from 'mongoose';

const leadershipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  organization: { type: String, required: true },
  duration: { type: String, default: '' },
  description: { type: String, default: '' },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model('Leadership', leadershipSchema);
