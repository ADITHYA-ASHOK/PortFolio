import express from 'express';
import Resume from '../models/Resume.js';
import { protect } from '../middleware/auth.js';
import { upload } from '../middleware/upload.js';
import fs from 'fs';
import path from 'path';

const router = express.Router();

// GET /api/resume/active
// Get the currently active resume
router.get('/active', async (req, res, next) => {
  try {
    const resume = await Resume.findOne({ isActive: true }).sort('-createdAt');
    if (!resume) {
      return res.status(404).json({ message: 'No active resume found' });
    }
    res.json(resume);
  } catch (error) {
    next(error);
  }
});

// GET /api/resume
// Get all resumes (Admin)
router.get('/', protect, async (req, res, next) => {
  try {
    const resumes = await Resume.find().sort('-createdAt');
    res.json(resumes);
  } catch (error) {
    next(error);
  }
});

// POST /api/resume
// Upload a new resume (Admin)
router.post('/', protect, upload.single('file'), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Please upload a PDF file' });
    }

    // Set all other resumes to inactive
    await Resume.updateMany({}, { isActive: false });

    const newResume = await Resume.create({
      originalName: req.file.originalname,
      fileUrl: `/uploads/${req.file.filename}`,
      isActive: true,
    });

    res.status(201).json(newResume);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/resume/:id
// Delete a resume (Admin)
router.delete('/:id', protect, async (req, res, next) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    // Attempt to delete file from filesystem
    const filePath = path.join(process.cwd(), resume.fileUrl);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await Resume.findByIdAndDelete(req.params.id);

    // If it was active, try to make the most recent one active
    if (resume.isActive) {
      const latestResume = await Resume.findOne().sort('-createdAt');
      if (latestResume) {
        latestResume.isActive = true;
        await latestResume.save();
      }
    }

    res.json({ message: 'Resume removed' });
  } catch (error) {
    next(error);
  }
});

export default router;
