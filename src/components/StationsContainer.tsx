import React, { FC, useContext, useEffect } from 'react';
import styles from '@/styles/StationsContainer.module.css';
import Station from './Station';
import { StationsContext } from '@/contexts/StationsContext';
import { Station as IStation } from '@/contexts/StationsContext.types';

const StationsContainer: FC = () => {
  const { stations, setStation, currentStation, isLoading } =
    useContext(StationsContext);

  useEffect(() => {
    const savedStation = localStorage.getItem('station');

    if (savedStation) {
      setStation(JSON.parse(savedStation));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (station: IStation) => {
    setStation(station);
    localStorage.setItem('station', JSON.stringify(station));
  };

  if (isLoading) return <p>Loading...</p>;

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
