import type { FC } from 'react';
import React from 'react';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

const Benefits: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.benefits}>
        <div className={styles.title}>{t('benefits.title' as any)}</div>
        <div className={styles.text}>{t('benefits.text1' as any)}</div>
        <div className={styles.text}>{t('benefits.text2' as any)}</div>
        <div className={styles.text}>{t('benefits.text3' as any)}</div>
        <div className={styles.text}>{t('benefits.text4' as any)}</div>
      </div>
    </div>
  );
};

export default Benefits;
