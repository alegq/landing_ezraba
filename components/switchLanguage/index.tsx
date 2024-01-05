import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

interface ISwitchLanguageProps {
  toggleHEB: () => void;
}

const SwitchLanguage: FC = () => {
  const [language, setLanguage] = useState('en');

  const { t, i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLanguage = language === 'en' ? 'he' : 'en';
    setLanguage(newLanguage);

    const html = document.querySelector('html');
    if (newLanguage === 'en') {
      html?.setAttribute('dir', 'ltr');
      i18n.changeLanguage('en');
    } else {
      html?.setAttribute('dir', 'rtl');
      i18n.changeLanguage('he');
    }
  };

  return (
    <div
      className={styles.languageSlider}
      style={{ direction: 'ltr' }}
    >
      <label>En</label>
      <input
        type="range"
        min="0"
        max="1"
        step="1"
        value={language === 'en' ? '0' : '1'}
        onChange={handleLanguageChange}
      />
      <label>He</label>
    </div>
  );
};

export default SwitchLanguage;
