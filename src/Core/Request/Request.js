import axios from 'axios';
import { handleSuccess } from './HandleSuccess';
import { handleError } from './HandleError';

const baseURL = 'http://localhost:3000';

const payloadWithFiles = (payload, files) => {
  console.log('girdi');
  const formData = new FormData();
  for (let i=0; i<files.length; i++) {
    formData.append('files', files[i]);
  }
  formData.append('data', JSON.stringify(payload));
  return formData;
};

export const request = async (method, url, payload = undefined, files = []) => {
  try {
    console.log(files, ' files');
    const data = files.length ? payloadWithFiles(payload, files) : payload;
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