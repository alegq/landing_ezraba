import apartment from '../../../public/assets/image_services/apartment.png';
import office from '../../../public/assets/image_services/office.png';
import kitchen from '../../../public/assets/image_services/kitchen.png';
import { StaticImageData } from 'next/image';

export interface IServices {
  imageSrc: StaticImageData;
  title: string;
  text: string;
}

export const ImageInfo: IServices[] = [
  {
    imageSrc: apartment,
    title: 'services.title1',
    text: 'services.text1',
  },
  {
    imageSrc: office,
    title: 'services.title2',
    text: 'services.text2',
  },
  {
    imageSrc: kitchen,
    title: 'services.title3',
    text: 'services.text3',
  },
];
