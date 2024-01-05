import React from 'react';
import styles from './styles.module.scss';
import Image, { StaticImageData } from 'next/image';
import likes from '@/public/assets/icons_reviews/likes.svg';

interface ReviewProps {
  text: string;
  imageSrc: StaticImageData;
  name: string;
  opacity?: boolean;
}

const Review: React.FC<ReviewProps> = ({
  text,
  imageSrc,
  name,
  opacity = false,
}) => {
  return (
    <div
      className={
        opacity ? `${styles.container} ${styles.minor}` : styles.container
      }
    >
      <div className={styles.containerImage}>
        <Image
          src={imageSrc}
          alt="arrow"
          className={styles.avatar}
        />
        <div className={styles.containerName}>
          <div className={styles.name}>{name}</div>
          <Image
            src={likes}
            alt="likes"
            className={styles.likes}
          />
        </div>
      </div>{' '}
      <p className={styles.text}>{text}</p>{' '}
    </div>
  );
};

export default Review;
