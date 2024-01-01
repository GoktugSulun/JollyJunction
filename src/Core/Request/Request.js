import axios from 'axios';
import { handleSuccess } from './HandleSuccess';
import { handleError } from './HandleError';

const baseURL = 'http://localhost:3000';

<<<<<<< HEAD
export const request = async ({ method, url, data = null }) => {
   try {
      const response = await axios({
         method,
         url,
         baseURL,
         ...(data ? { data } : {})
      });
=======
const payloadWithFiles = (payload, files) => {
  const formData = new FormData();
  if (Array.isArray(files)) {
    for (let i=0; i<files.length; i++) {
      formData.append('files', files[i]);
    }
  } else {
    formData.append('files', files);
  }
  formData.append('data', JSON.stringify(payload));
  return formData;
};

export const request = async (method, url, payload = undefined, files = null) => {
  try {
    const token = localStorage.getItem('token');
    const data = files ? payloadWithFiles(payload, files) : payload;
    const headers = { 
      'Authorization': `Bearer ${token}`,
      // 'Content-Type': 'application/json',
    };
    const response = await axios({
      method,
      url,
      baseURL,
      headers,
      data
    });
    if (response?.data?.type) {
>>>>>>> 0452f2104a19d0a98bf9eeeece832c5cb872d4bf
      return handleSuccess(response);
    }
    throw Error(response?.data?.message || 'error');
  } catch (error) {
    return handleError(error);
  }
};