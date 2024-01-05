import type { FC } from 'react';
import React from 'react';
import styles from './styles.module.scss';
import { PrepareItems } from '@/components/prepare/constants/imageInfo';
import { useTranslation } from 'react-i18next';

const Prepare: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{t('prepare.title' as any)}</div>
      {PrepareItems.map((item, index) => (
        <div
          key={item.number}
          className={styles.item}
        >
          <div className={styles.itemNumber}>{item.number}</div>
          <div className={styles.itemText}>{t(item.text as any)}</div>
        </div>
      ))}
    </div>
  );
};

export default Prepare;
