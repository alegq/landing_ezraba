import type { FC } from 'react';
import React from 'react';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

const Info: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <span className={styles.text}>{t('info.text' as any)}</span>
    </div>
  );
};

export default Info;
