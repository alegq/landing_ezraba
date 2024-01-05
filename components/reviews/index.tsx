import React, { useState } from 'react';
import { reviewsData } from '@/components/reviews/constants/reviewsData';
import Arrow from '@/components/reviews/components/arrow';
import Review from '@/components/reviews/components/review';
import arrowLeft from '../../public/assets/icons_reviews/arrowLeft.svg';
import arrowRight from '../../public/assets/icons_reviews/arrowRight.svg';

import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import ReviewsTouch from '@/components/reviews/components/reviewsTouch';

const Reviews: React.FC = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState<number>(0);
  const { t } = useTranslation();

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1,
    );
  };

  const isAtFirstReview = currentReviewIndex === 0;
  const isAtLastReview = currentReviewIndex === reviewsData.length - 2;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleMain}>{t('reviews.title' as any)}</div>
        <div className={styles.reviews}>
          <Arrow
            arrowSrc={arrowLeft}
            onClick={prevReview}
            hidden={isAtFirstReview}
            className={styles.arrowLeft}
          />
          <div className={styles.reviewContainer}>
            <Review
              name={t(reviewsData[currentReviewIndex].name as any) as string}
              text={t(reviewsData[currentReviewIndex].text as any) as string}
              imageSrc={reviewsData[currentReviewIndex].imageSrc}
            />
            <Review
              name={
                t(
                  reviewsData[(currentReviewIndex + 1) % reviewsData.length]
                    .name as any,
                ) as string
              }
              imageSrc={
                reviewsData[(currentReviewIndex + 1) % reviewsData.length]
                  .imageSrc
              }
              text={
                t(
                  reviewsData[(currentReviewIndex + 1) % reviewsData.length]
                    .text as any,
                ) as string
              }
            />
          </div>
          <Arrow
            arrowSrc={arrowRight}
            onClick={nextReview}
            hidden={isAtLastReview}
            className={styles.arrowRight}
          />
        </div>
        <ReviewsTouch />
      </div>
    </>
  );
};

export default Reviews;
