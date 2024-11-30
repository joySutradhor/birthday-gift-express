import multer, { StorageEngine, FileFilterCallback } from 'multer';
import path from 'path';
import { Request } from 'express';

// Define a custom file filter
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
): void => {
  const allowedTypes = ['.ttf', '.otf', '.woff', '.woff2'];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedTypes.includes(ext)) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error('Invalid file type. Only font files are allowed.'));
  }
};

// Define the storage engine
const storage: StorageEngine = multer.diskStorage({
  // Set destination folder
  destination: (req, file, cb) => {
    const folder = 'uploads/fonts'; // Adjust as per your requirement
    cb(null, folder);
  },
  // Customize file name
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const ext = path.extname(file.originalname); // Get file extension
    const fileName = `${timestamp}-${file.originalname}`;
    cb(null, fileName); // e.g., "1678901234567-fontname.ttf"
  },
});

// Set file size limit (optional, in bytes)
const limits = {
  fileSize: 5 * 1024 * 1024, // 5 MB
};

// Multer upload instance
const upload = multer({
  storage,
  fileFilter,
  limits,
});

export default upload;
