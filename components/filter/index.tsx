import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import {
  BUTTON_ROW_1,
  BUTTON_ROW_2,
  BUTTON_ROW_3,
} from '@/components/filter/constants/buttonRows';
import ButtonsRow from './components/buttonRow';
import { useTranslation } from 'react-i18next';

const Filter: FC = () => {
  const [activeIndexTimes, setActiveIndexTimes] = useState<number | null>(null);
  const [activeIndexAllergy, setActiveIndexAllergy] = useState<number[]>([]); // Изменили начальное значение
  const [activeIndexConf, setActiveIndexConf] = useState<number | null>(null);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState('');
  const { t } = useTranslation();

  const handleButtonClickTimes = (index: number) => {
    setActiveIndexTimes(index === activeIndexTimes ? null : index);
  };
  const handleButtonClickAllergy = (index: number) => {
    setActiveIndexAllergy((prevArray) => {
      if (index === 4) {
        return prevArray.includes(index)
          ? prevArray.filter((item) => item !== index)
          : prevArray.filter((item) => item !== 5 && item !== 6).concat(index);
      }

      if (index === 5 || index === 6) {
        return prevArray.includes(index)
          ? prevArray.filter((item) => item !== index)
          : prevArray.filter((item) => item !== 4).concat(index);
      }

      return prevArray.includes(index)
        ? prevArray.filter((item) => item !== index)
        : [...prevArray, index];
    });
  };

  const handleButtonClickConf = (index: number) => {
    setActiveIndexConf(index === activeIndexConf ? null : index);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleApplyFilter = () => {
    console.log('Input Value:', inputValue);
    setIsSearch(true);
  };
  return (
    <div className={styles.container}>
      <div className={styles.titleMain}>{t('filter.filter' as any)}</div>
      <div className={styles.titleButton}>{t('filter.frequency' as any)}</div>
      <ButtonsRow
        buttonData={BUTTON_ROW_1}
        activeButtonIndex={activeIndexTimes}
        handleButtonClick={handleButtonClickTimes}
        isSearch={isSearch}
      />
      {activeIndexTimes === 1 && (
        <>
          <div className={styles.titleButton}>
            {t('filter.cleaning' as any)}
          </div>
          <ButtonsRow
            buttonData={BUTTON_ROW_3}
            activeButtonIndex={activeIndexConf}
            handleButtonClick={handleButtonClickConf}
            isSearch={isSearch}
            isRow={true}
          />{' '}
        </>
      )}
      <div className={styles.titleButton}>{t('filter.allergy' as any)}</div>
      <ButtonsRow
        buttonData={BUTTON_ROW_2}
        activeButtonIndex={activeIndexAllergy}
        handleButtonClick={handleButtonClickAllergy}
        isSearch={isSearch}
        isRow={true}
      />

      <div className={styles.inputButtonContainer}>
        <input
          type="text"
          className={styles.input}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={t('filter.address' as any) as string}
        />
        <button
          className={styles.buttonSearch}
          onClick={handleApplyFilter}
        >
          <div className={styles.search}>{t('filter.search' as any)}</div>
        </button>
      </div>
    </div>
  );
};
export default Filter;
