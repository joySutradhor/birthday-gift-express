import express from 'express';
import { FontController } from './font.controller';
import upload from './multer.config';
const router = express.Router();

// const upload = multer({ dest: 'uploads/fonts/' });

router.post('/upload', upload.single('file'), FontController.uploadFont);

// Get all fonts
router.get('/', FontController.getFonts);

// Remove a font by ID
router.delete('/:id', FontController.removeFont);

export const FontRoutes = router;
