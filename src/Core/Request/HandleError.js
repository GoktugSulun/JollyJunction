import { AxiosError } from 'axios';
import { ResponseError } from '../Models/ResponseError.model';

export const handleError = (error) => {
   if (error?.response?.status === 404) {
      throw new ResponseError(error);
   }

   if (error?.response?.status === 401) {
      //* unauthorized : clear localStorage and send user to login
      localStorage.clear();
      window.location.replace('#/login');
   }

   //* response error fırlat ve bunu daha sonra yakala
   if (error instanceof AxiosError) {
      throw new ResponseError(error);
   }
  
    throw Error(error);
};