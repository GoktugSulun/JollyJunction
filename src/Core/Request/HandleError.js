export const handleError = (error) => {
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
};