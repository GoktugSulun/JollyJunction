export const getFileURL = ({ name, type } = {}) => {
  if (!name || !type) {
    return '';
  }
  return `${import.meta.env.VITE_API_URL}/${name}.${type}`;
};