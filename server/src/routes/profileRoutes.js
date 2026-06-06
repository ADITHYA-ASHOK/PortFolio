import { Router } from 'express';
import Profile from '../models/Profile.js';
import auth from '../middleware/auth.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) profile = {};
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/', auth, async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
    });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/visit', async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate(
      {},
      { $inc: { visitorCount: 1 } },
      { new: true, upsert: true }
    );
    res.json({ visitorCount: profile.visitorCount });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
