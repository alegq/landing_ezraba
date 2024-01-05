import React from 'react';
import { getClassNames } from '@/components/filter/components/buttonRow/config';
import styles from './styles.module.scss';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

interface ButtonElement {
  keyButton: number;
  name: string;
}

interface ButtonsRowProps {
  buttonData: ButtonElement[];
  activeButtonIndex: number | number[] | null;
  handleButtonClick: (index: number) => void;
  isSearch: boolean;
  isRow?: boolean;
}

const ButtonsRow: React.FC<ButtonsRowProps> = ({
  buttonData,
  activeButtonIndex,
  handleButtonClick,
  isSearch,
  isRow,
}) => {
  const { t } = useTranslation();
  const isActive = (index: number) => {
    if (typeof activeButtonIndex === 'number') {
      return activeButtonIndex === index;
    } else if (Array.isArray(activeButtonIndex)) {
      return activeButtonIndex.includes(index);
    }
    return false;
  };

  return (
    <div
      className={cn(
        getClassNames(isSearch, activeButtonIndex, 0).buttonsRowClassName,
        getClassNames(isSearch, activeButtonIndex, 0, isRow)
          .flexDirectionRowClassName,
      )}
    >
      {buttonData.map((elem) => (
        <button
          key={elem.keyButton}
          className={`${
            getClassNames(isSearch, activeButtonIndex, elem.keyButton, isRow)
              .buttonClassName
          } ${isActive(elem.keyButton) ? styles.activeButton : ''}`}
          onClick={() => handleButtonClick(elem.keyButton)}
        >
          <div className={styles.textButton}>{t(elem.name as any)}</div>
        </button>
      ))}
    </div>
  );
};

export default ButtonsRow;
