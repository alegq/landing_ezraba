// Arrow.tsx
import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

interface ArrowProps {
  arrowSrc: string;
  onClick: () => void;
  hidden: boolean;
  className?: string;
}

const Arrow: React.FC<ArrowProps> = ({
  arrowSrc,
  onClick,
  hidden,
  className,
}) => {
  return (
    <div className={className}>
      <button
        className={`${styles.arrow} ${hidden ? styles.hidden : ''}`}
        onClick={onClick}
      >
        <Image
          src={arrowSrc}
          alt="arrow"
          className={styles.imageArrow}
        />
      </button>
    </div>
  );
};

export default Arrow;
