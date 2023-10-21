import axios from 'axios';
import { handleSuccess } from './HandleSuccess';
import { handleError } from './HandleError';

const baseURL = 'http://localhost:3000';

export const request = async ({ method, url, data = null }) => {
   try {
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