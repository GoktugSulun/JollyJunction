import axios from 'axios';
import { handleSuccess } from './HandleSuccess';
import { handleError } from './HandleError';

const baseURL = 'http://localhost:3000';

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
    const data = files ? payloadWithFiles(payload, files) : payload;
    const response = await axios({
      method,
      url,
      baseURL,
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