// Import the individual image files
import img1 from '../public/IMG_4601.jpg';
import img2 from '../public/IMG_2023.JPG';
import img3 from '../public/IMG_0530.jpg';
import img4 from '../public/IMG_4599.jpg';
import img5 from '../public/IMG_0539.jpg';

// Create an array of image variables
const images = [img1, img2, img3, img4, img5];

// Create the SliderData array
export const SliderData = images.map((image, index) => ({
  image,
  // You can add other properties if needed, such as alt text.
  // alt: `Image ${index + 1}`,
}));
