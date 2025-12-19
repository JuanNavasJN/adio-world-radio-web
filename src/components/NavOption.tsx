import React, { FC } from 'react';
import styles from '@/styles/NavOption.module.css';
import {
  VE,
  BR,
  CZ,
  FR,
  DE,
  PL,
  PT,
  RS,
  ZA,
  SE,
  GB,
  UA,
  US
} from 'country-flag-icons/react/3x2';

interface NavOptionProps {
  label: string;
  value: string;
  isActive?: boolean;
  onClick: (country: string) => void;
}

const flags = {
  Bra: <BR />,
  Ven: <VE />,
  Cze: <CZ />,
  Fra: <FR />,
  Ger: <DE />,
  Pol: <PL />,
  Por: <PT />,
  Ser: <RS />,
  ZA: <ZA />,
  Swe: <SE />,
  UK: <GB />,
  Ukr: <UA />,
  US: <US />
};

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
      {label} {flags[label as keyof typeof flags]}
    </button>
  );
};

export default NavOption;
