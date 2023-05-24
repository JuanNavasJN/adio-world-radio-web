import React, { FC, useContext, useMemo, useState, useEffect } from 'react';
import { ALL } from '@/constants';
import NavOption from './NavOption';
import styles from '@/styles/NavContainer.module.css';
import { StationsContext } from '@/contexts/StationsContext';

interface Option {
  value: string;
  label: string;
  isActive: boolean;
}

const allOption = {
  value: ALL,
  label: 'All 🌎',
  isActive: true
};

const NavContainer: FC = () => {
  const { countries, setCountry, currentCountry } = useContext(StationsContext);
  const [options, setOptions] = useState<Option[]>([]);

  const initalOptions: Option[] = useMemo(() => {
    let opts = [allOption];

    for (let country of countries) {
      opts.push({
        value: country.name,
        label: country.displayName,
        isActive: false
      });
    }

    return opts;
  }, [countries]);

  useEffect(() => {
    setOptions(initalOptions);
  }, [initalOptions]);

  useEffect(() => {
    if (currentCountry === ALL) {
      setOptions(initalOptions);
    }
  }, [currentCountry, initalOptions]);

  useEffect(() => {
    const country = localStorage.getItem('country');

    if (country) {
      handleClick(country);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initalOptions]);

  const handleClick = (country: string) => {
    setCountry(country);

    localStorage.setItem('country', country);

    setOptions(
      initalOptions.map(opt => {
        if (opt.value === country) {
          return {
            ...opt,
            isActive: true
          };
        }

        return {
          ...opt,
          isActive: false
        };
      })
    );
  };

  return (
    <section className={styles.navContainer}>
      {options.map(opt => (
        <NavOption
          isActive={opt.isActive}
          key={opt.value}
          value={opt.value}
          label={opt.label}
          onClick={handleClick}
        />
      ))}
    </section>
  );
};

export default NavContainer;
