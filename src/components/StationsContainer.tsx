import React, { FC, useContext } from 'react';
import styles from '@/styles/StationsContainer.module.css';
import Station from './Station';
import { StationsContext } from '@/contexts/StationsContext';
import { Station as IStation } from '@/contexts/StationsContext.types';

const StationsContainer: FC = () => {
  const { stations, setStation, currentStation } = useContext(StationsContext);

  const handleClick = (station: IStation) => {
    setStation(station);
  };

  return (
    <section className={styles.stationsContainer}>
      {stations.map(station => (
        <Station
          key={station.name}
          station={station}
          onClick={handleClick}
          isActive={station.name === currentStation?.name}
        />
      ))}
    </section>
  );
};

export default StationsContainer;
