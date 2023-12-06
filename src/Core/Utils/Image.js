export const getImage = ({ name, type } = {}) => {
  if (!name || !type) {
    return '';
  }
  return `http://localhost:3000/${name}.${type}`;
};