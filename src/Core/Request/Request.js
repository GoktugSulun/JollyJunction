import axios from 'axios';
import { handleSuccess } from './HandleSuccess';
import { handleError } from './HandleError';

const baseURL = 'http://localhost:3000';

export const request = async (method, url, data = null) => {
   try {
      // let backendData = null;
      // if (file) {
      //    const formData = new FormData();
      //    formData.append('file', file);
      //    formData.append('data', JSON.stringify(data));
      //    backendData = formData;
      // } else {
      //    backendData = data;
      // }
      const response = await axios({
         method,
         url,
         baseURL,
         ...(data ? { data } : {})
      });
      return handleSuccess(response);
   } catch (error) {
      return handleError(error);
   }
};