import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import React from 'react';
import cn from 'classnames';

import { heights } from './constants/heights';
import { palettes } from './constants/palettes';
import { sizes } from './constants/sizes';
import { HeightType } from './interfaces/HeightType';
import { RadiusType } from './interfaces/RadiusType';
import { SizeType } from './interfaces/SizeType';

import styles from './styles.module.scss';

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: SizeType;
  className?: string;
}

const Button: FC<IButtonProps> = ({
  type = 'submit',
  className,
  children,
  ...props
}) => (
  <button
    type={type}
    className={cn(className, styles.button)}
    {...props}
  >
    <span className={styles.text}>{children}</span>
  </button>
);

export default Button;
