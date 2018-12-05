import multer from 'multer';
import cloudinary from 'cloudinary';
import cloudinaryStorage from 'multer-storage-cloudinary';
import { cloudinaryConfig } from './config';

cloudinary.config(cloudinaryConfig);

const storage = cloudinaryStorage({
  cloudinary,
  folder: 'demo',
  allowedFormats: ['jpg', 'png'],
  transformation: [{ width: 500, height: 500, crop: 'limit' }]
});

const parserCloundinary = multer({ storage });

export default parserCloundinary;
