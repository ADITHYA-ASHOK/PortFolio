import { Router } from 'express';
import SocialLink from '../models/SocialLink.js';
import auth from '../middleware/auth.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const links = await SocialLink.find({ isActive: true }).sort({ order: 1 });
    res.json(links);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/', auth, async (req, res) => {
  try {
    const { links } = req.body;
    await SocialLink.deleteMany({});
    const created = await SocialLink.insertMany(links);
    res.json(created);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
