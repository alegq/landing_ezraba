import type { FC } from 'react';
import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { ImageInfo } from '@/components/services/constants/imageInfo';
import { useTranslation } from 'react-i18next';

const Services: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.service}>
        <Image
          src={ImageInfo[0].imageSrc}
          alt="refresh"
          className={styles.image}
        />
        <div className={styles.containerText}>
          <div className={styles.title}> {t(ImageInfo[0].title as any)}</div>
          <div className={styles.text}>{t(ImageInfo[0].text as any)}</div>
        </div>
      </div>
      <div className={styles.service}>
        <Image
          src={ImageInfo[1].imageSrc}
          alt="refresh"
          className={styles.image}
        />
        <div className={styles.containerText}>
          <div className={styles.title}>{t(ImageInfo[1].title as any)}</div>
          <div className={styles.text}>{t(ImageInfo[1].text as any)}</div>
        </div>
      </div>{' '}
      <div className={styles.service}>
        <Image
          src={ImageInfo[2].imageSrc}
          alt="refresh"
          className={styles.image}
        />
        <div className={styles.containerText}>
          <div className={styles.title}>{t(ImageInfo[2].title as any)}</div>
          <div className={styles.text}>{t(ImageInfo[2].text as any)}</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
