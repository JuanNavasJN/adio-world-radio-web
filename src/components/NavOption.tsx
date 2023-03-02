import React, { FC } from 'react';
import styles from '@/styles/NavOption.module.css';

interface NavOptionProps {
  label: string;
  value: string;
  isActive?: boolean;
  onClick: (country: string) => void;
}

const NavOption: FC<NavOptionProps> = ({
  label,
  value,
  isActive = false,
  onClick
}) => {
  return (
    <button
      className={`${styles.navOption} ${isActive && styles.isActive}`}
      onClick={() => onClick(value)}
    >
      {label}
    </button>
  );
};

export default NavOption;
