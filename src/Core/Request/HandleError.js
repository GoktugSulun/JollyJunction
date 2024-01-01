export const handleError = (error) => {
<<<<<<< HEAD
   const { response: { status }, message } = error;

   if (status === 404) {
      //* page not found
      throw Error('Sayfa bulunamadı!');
   }

   if (status === 401) {
      //* unauthorized : clear localStorage and send user to login
      localStorage.clear();
      window.location.replace('#/login');
   }

   throw Error(message);
=======
  if (error?.response?.status === 404) {
    throw new ResponseError(error);
  }

  if (error?.response?.status === 401) {
    //* unauthorized : clear localStorage and send user to login
    localStorage.removeItem('token');
    window.location.replace('#/login');
  }

  //* response error fırlat ve bunu daha sonra yakala
  if (error instanceof AxiosError) {
    throw new ResponseError(error);
  }
  
  console.error(error);

  throw Error(error);
>>>>>>> 0452f2104a19d0a98bf9eeeece832c5cb872d4bf
};