// Import local images from assets folder
import md from '../assets/md.jpeg';
import pl from '../assets/pl.jpg';
import sp from '../assets/sp.jpg';

const products = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    price: 500,
    image: md,  // local image import
  },
  {
    id: 2,
    name: 'Snake Plant',
    price: 350,
    image: sp,
  },
  {
    id: 3,
    name: 'Peace Lily',
    price: 450,
    image: pl,
  }
];

export default products;
