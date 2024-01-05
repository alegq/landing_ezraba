import {
  generateClassName,
  IClassNameItem,
} from '@/utils/helpers/generateClassName';

import styles from './styles.module.scss';

export const getClassNames = (
  isSearch: boolean,
  activeButtonIndex: number | number[] | null,
  buttonIndex: number,
  isRow?: boolean,
) => {
  const activeIndexArray = Array.isArray(activeButtonIndex)
    ? activeButtonIndex
    : [activeButtonIndex];

  const buttonClassNames: IClassNameItem[] = [
    {
      className: styles.button,
      needDisplay: true,
    },
    {
      className: styles.buttonSmall,
      needDisplay: isRow,
    },
    {
      className: styles.buttonBig,
      needDisplay: !isRow,
    },

    {
      className: styles.active,
      needDisplay: activeIndexArray.includes(buttonIndex),
    },
  ];

  const buttonsRowClassNames: IClassNameItem[] = [
    {
      className: styles.buttonRow,
      needDisplay: true,
    },
    {
      className: styles.redButtonRow,
      needDisplay:
        isSearch &&
        (activeButtonIndex == null || activeIndexArray.length === 0),
    },
  ];
  const flexDirectionRowClassNames: IClassNameItem[] = [
    {
      className: styles.flexDirection,
      needDisplay: isRow,
    },
  ];

  return {
    buttonClassName: generateClassName(buttonClassNames),
    buttonsRowClassName: generateClassName(buttonsRowClassNames),
    flexDirectionRowClassName: generateClassName(flexDirectionRowClassNames),
  };
};
