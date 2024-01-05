import React, { useEffect, useRef, useState } from 'react';
import { reviewsData } from '@/components/reviews/constants/reviewsData';

import arrowLeft from '@/public/assets/icons_reviews/arrowLeft.svg';
import arrowRight from '@/public/assets/icons_reviews/arrowRight.svg';

import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import Review from '@/components/reviews/components/reviewsTouch/review';
import Arrow from '@/components/reviews/components/reviewsTouch/arrow';

const ReviewsTouch: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number[]>([1, 2]);
  const { t } = useTranslation();
  const data = reviewsData;

  const photoContainerRef = useRef<HTMLDivElement | null>(null);
  const containerWidth = useRef<number | null>(null);

  useEffect(() => {
    const container = photoContainerRef.current;

    let startX: number | null | undefined = null;

    const handleTouchStart = (e: TouchEvent) => {
      //e.preventDefault();
      startX = e.touches[0]?.clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (startX !== null && e.changedTouches[0] && startX) {
        const endX = e.changedTouches[0].clientX;
        const deltaX = startX - endX;

        if (deltaX > 50 && activeItem[1] < data.length - 1) {
          handlePhotoChange(activeItem.map((item) => item + 1));
        } else if (deltaX < -50 && activeItem[0] > 0) {
          handlePhotoChange(activeItem.map((item) => item - 1));
        }

        startX = null;
      }
    };

    if (container) {
      containerWidth.current = container.offsetWidth;

      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [activeItem, data]);

  const handlePhotoChange = (newIndexes: number[]) => {
    console.log(newIndexes);
    if (newIndexes[0] >= 0 && newIndexes[1] < data.length) {
      if (photoContainerRef.current) {
        if (newIndexes[0] == 2) {
          photoContainerRef.current.style.transform = `translateX(-${130}px)`;
        } else if (newIndexes[0] == 1) {
          photoContainerRef.current.style.transform = `translateX(${0}px)`;
        } else
          photoContainerRef.current.style.transform = `translateX(${130}px)`;
      }
      setActiveItem(newIndexes);
    }
  };

  const nextReview = () => {
    handlePhotoChange(activeItem.map((item) => item + 1));
  };

  const prevReview = () => {
    handlePhotoChange(activeItem.map((item) => item - 1));
  };

  const isAtFirstReview = activeItem[0] === 0;
  const isAtLastReview = activeItem[1] === reviewsData.length - 1;

  return (
    <div className={styles.reviews}>
      <Arrow
        arrowSrc={arrowLeft}
        onClick={prevReview}
        hidden={isAtFirstReview}
        className={styles.arrowLeft}
      />
      <div
        className={styles.reviewContainer}
        ref={photoContainerRef}
      >
        {reviewsData.map((review, index) => (
          <Review
            key={index}
            name={t(review.name as any) as string}
            text={t(review.text as any) as string}
            imageSrc={review.imageSrc}
            opacity={!(activeItem[0] === index || activeItem[1] === index)} // Изменено условие
          />
        ))}
      </div>
      <Arrow
        arrowSrc={arrowRight}
        onClick={nextReview}
        hidden={isAtLastReview}
        className={styles.arrowRight}
      />
    </div>
  );
};

export default ReviewsTouch;
