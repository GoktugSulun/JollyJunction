//* Post Images
import img1 from './img-1.jpg';
import img2 from './img-2.jpg';
import img3 from './img-3.jpg';
//* User Images
import goktug from './goktug.jpeg';
import damla from './damla.jpg';

export const PostImages =  [
  img1,
  img2,
  img3
];

export const UserImages = [
  goktug,
  damla
];

export const getPostsImageURL = (url) => {
  return PostImages.find((path) => path.includes(url));
};

export const getUserImageURL = (url) => {
  return UserImages.find((path) => path.includes(url));
};