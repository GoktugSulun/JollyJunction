export const handleSuccess = (response) => {
  const { status } = response;

  if (status >= 200 && status <= 299) {
    return response.data;
  }
   
  throw Error(response);
};