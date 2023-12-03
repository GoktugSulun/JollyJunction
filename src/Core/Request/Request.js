import axios from 'axios';
import { handleSuccess } from './HandleSuccess';
import { handleError } from './HandleError';

const baseURL = 'http://localhost:3000';

export const request = async (method, url, data = undefined) => {
  try {
    // let data = null;
    // if (file) {
    //   const formData = new FormData();
    //   formData.append('file', file);
    //   formData.append('data', JSON.stringify(payload));
    //   data = formData;
    // } else {
    //   data = payload;
    // }
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