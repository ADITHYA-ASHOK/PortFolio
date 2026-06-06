import mongoose from 'mongoose';

const certificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  date: { type: String, default: '' },
  category: { type: String, default: 'Other' },
  imageUrl: { type: String, default: '' },
  certificateUrl: { type: String, default: '' },
  description: { type: String, default: '' },
}, { timestamps: true });

export default mongoose.model('Certification', certificationSchema);
