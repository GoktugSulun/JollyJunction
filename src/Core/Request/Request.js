import axios from 'axios';
import { handleSuccess } from './HandleSuccess';
import { handleError } from './HandleError';

const baseURL = import.meta.env.VITE_API_URL;

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
      return handleSuccess(response);
    }
    throw Error(response?.data?.message || 'error');
  } catch (error) {
    return handleError(error);
  }
};