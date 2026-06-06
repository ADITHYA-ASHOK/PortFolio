import express from 'express';
import Leadership from '../models/Leadership.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// GET /api/leadership
// Get all leadership entries
router.get('/', async (req, res, next) => {
  try {
    const leadership = await Leadership.find().sort('order -createdAt');
    res.json(leadership);
  } catch (error) {
    next(error);
  }
});

// POST /api/leadership
// Create new leadership entry (Admin)
router.post('/', protect, async (req, res, next) => {
  try {
    const newEntry = await Leadership.create(req.body);
    res.status(201).json(newEntry);
  } catch (error) {
    next(error);
  }
});

// PUT /api/leadership/:id
// Update leadership entry (Admin)
router.put('/:id', protect, async (req, res, next) => {
  try {
    const entry = await Leadership.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!entry) return res.status(404).json({ message: 'Entry not found' });
    res.json(entry);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/leadership/:id
// Delete leadership entry (Admin)
router.delete('/:id', protect, async (req, res, next) => {
  try {
    const entry = await Leadership.findByIdAndDelete(req.params.id);
    if (!entry) return res.status(404).json({ message: 'Entry not found' });
    res.json({ message: 'Leadership entry removed' });
  } catch (error) {
    next(error);
  }
});

export default router;
