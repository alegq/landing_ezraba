import photo_1 from '../../../public/assets/icons_reviews/melissa.png';
import photo_2 from '../../../public/assets/icons_reviews/john.png';
import { StaticImageData } from 'next/dist/shared/lib/image-external';

export interface IReviewsData {
  imageSrc: StaticImageData;
  name: string;
  text: string;
}

export const reviewsData: IReviewsData[] = [
  {
    imageSrc: photo_1,
    name: 'reviews.name1',
    text: 'reviews.text1',
  },
  {
    imageSrc: photo_2,
    name: 'reviews.name2',
    text: 'reviews.text2',
  },
  {
    imageSrc: photo_2,
    name: 'reviews.name3',
    text: 'reviews.text3',
  },
  {
    imageSrc: photo_1,
    name: 'reviews.name4',
    text: 'reviews.text4',
  },
];
