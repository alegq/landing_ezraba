import type { FC } from 'react';
import React from 'react';
import styles from './styles.module.scss';
import Button from '@/components/lips/button';
import { useTranslation } from 'react-i18next';
import ChartCandle from "@/components/Chart";

const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <span className={styles.text}>{t('footer.title' as any)}</span>
      <Button className={styles.button}>{t('footer.telegram' as any)}</Button>
      <Button className={styles.button}>{t('footer.viber' as any)}</Button>
      <Button className={styles.button}>{t('footer.whatsapp' as any)}</Button>
    </div>
  );
};

export default Footer;
