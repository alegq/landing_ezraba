import React, { FC, RefObject } from 'react';
import styles from './styles.module.scss';

export interface IMenuBurgerProps {
  servicesRef?: RefObject<HTMLDivElement>;
  footerRef?: RefObject<HTMLDivElement>;
}

const PopupMenu: FC<IMenuBurgerProps> = ({ servicesRef, footerRef }) => {
  const handleClickButton = (item: string) => {
    switch (item) {
      case 'שירותים':
      case 'Services': {
        servicesRef?.current?.scrollIntoView();
        break;
      }
      case 'אנשי קשר':
      case 'Contacts': {
        footerRef?.current?.scrollIntoView();
        break;
      }
      default: {
        break;
      }
    }
  };
  return (
    <div className={styles.popupMenu}>
      <div className={styles.menu}>
        <button
          className={styles.menuLink}
          onClick={() => handleClickButton('Services')}
        >
          <span className={styles.menuLinkText}>{'Services'}</span>
        </button>
        <button
          className={styles.menuLink}
          onClick={() => handleClickButton('Contacts')}
        >
          <span className={styles.menuLinkText}>{'Contacts'}</span>
        </button>
      </div>
    </div>
  );
};

export default PopupMenu;
