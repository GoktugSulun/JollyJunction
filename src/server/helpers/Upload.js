import multer from 'multer';
import path from 'path';
import { readdir } from 'fs/promises';
import { authorizedUserId } from '../server.js';

const __dirname = path.resolve();

const isFileExists = async (fileName) => {
  const filesFolder = './files';
  try {
    const files = await readdir(filesFolder);
    const targetFile = files.find((name) => {
      const [, user_id, file_name] = name.split('_');
      return parseInt(user_id) === authorizedUserId && file_name === fileName;
    });
    return {
      existing: !!targetFile,
      existingFile: targetFile
    };
  } catch (error) {
    console.error('Klasör okuma hatası:', error);
    return {
      existing: false
    };
  }
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, __dirname + '/files');
  },
  filename: async (req, file, callback) => {
    const result = await isFileExists(file.originalname);
    if (!result.existing) {
      const timestamp = new Date().getTime();
      callback(null, `${timestamp}_${authorizedUserId}_${file.originalname}`);
    } else {
      callback(null, result.existingFile);
    }
  }
});

const files = multer({ storage });

export default files;