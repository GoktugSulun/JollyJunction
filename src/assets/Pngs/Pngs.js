//* Advertsement Images
import advertisement1 from './advertisement-1.jpg';
import advertisement2 from './advertisement-2.jpg';
import advertisement3 from './advertisement-3.jpg';

export const AdvertisementImages = [
  advertisement1,
  advertisement2,
  advertisement3
];

export const getAdvertisementImageURL = (url) => {
  return AdvertisementImages.find((path) => path.includes(url));
};