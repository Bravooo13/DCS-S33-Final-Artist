export interface ImageData {
  name: string;
  path: string;
  alt: string;
}

import image1 from "../assets/art/C44A4510.jpg";
import image2 from "../assets/art/C44A4529.jpg";
import image3 from "../assets/art/C44A4945.jpg";
import image4 from "../assets/art/C44A5119.jpg";
import image5 from "../assets/art/C44A4958-2.jpg";

const imageData: ImageData[] = [
  {
    name: "Image 1",
    path: image1,
    alt: "Portland",
  },
  {
    name: "Image 2",
    path: image2,
    alt: "Portland",
  },
  {
    name: "Image 3",
    path: image3,
    alt: "Portland",
  },
  {
    name: "Image 4",
    path: image4,
    alt: "Portland",
  },
  {
    name: "Image 5",
    path: image5,
    alt: "Portland",
  },
];

export default imageData;
