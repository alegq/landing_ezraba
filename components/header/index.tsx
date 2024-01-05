import type { FC, RefObject } from 'react';
import React, { useRef, useState } from 'react';

import styles from './styles.module.scss';
import Button from '@/components/lips/button';
import { useTranslation } from 'react-i18next';
import PopupMenu from '@/components/header/components/popupMenu';

export interface IMenuProps {
  servicesRef?: RefObject<HTMLDivElement>;
  scheduleRef?: RefObject<HTMLDivElement>;
  footerRef?: RefObject<HTMLDivElement>;
}

const Header: FC<IMenuProps> = ({ servicesRef, scheduleRef, footerRef }) => {
  const { t } = useTranslation();
  const [showPopupMenu, setShowPopupMenu] = useState(false);
  const popupMenuRef = useRef<HTMLDivElement | null>(null);
  const handleClickButtonServices = () => {
    servicesRef?.current?.scrollIntoView();
  };
  const handleClickButtonContact = () => {
    footerRef?.current?.scrollIntoView();
  };
  const handleClickButtonSchedule = () => {
    scheduleRef?.current?.scrollIntoView();
  };

  const handleClickBurger = () => {
    setShowPopupMenu(true);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.menuBurger}
        onClick={handleClickBurger}
      >
        <div className={styles.burgerRectangle}></div>
        <div className={styles.burgerRectangle}></div>
        <div className={styles.burgerRectangle}></div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.menu}>
          <button
            onClick={handleClickButtonServices}
            className={styles.buttonMenu}
          >
            {t('header.services' as any)}
          </button>
          <button
            onClick={handleClickButtonContact}
            className={styles.buttonMenu}
          >
            {t('header.contact' as any)}
          </button>
        </div>
        <div className={styles.modalSchedule}>
          <span className={styles.text}>{t('header.text' as any)}</span>
          <Button
            className={styles.customButton}
            onClick={handleClickButtonSchedule}
          >
            {t('header.schedule' as any)}
          </Button>
        </div>
      </div>
      <div>
        {showPopupMenu && (
          <PopupMenu
            servicesRef={servicesRef}
            footerRef={footerRef}
          />
        )}
      </div>
      <div className={styles.imageWomen}></div>
    </div>
  );
};

export default Header;
