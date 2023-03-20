import React, { FC } from 'react';
import styles from '@/styles/Station.module.css';
import { Station as IStation } from '@/contexts/StationsContext.types';
import Image from 'next/image';

interface StationProps {
  station: IStation;
  onClick: (station: IStation) => void;
  isActive: boolean;
}

const Station: FC<StationProps> = ({ station, onClick, isActive }) => {
  return (
    <button
      className={`${styles.station} ${isActive && styles.isActive}`}
      onClick={() => onClick(station)}
    >
      <Image
        alt={station.name}
        src={station.coverUrl}
        width={82}
        height={60}
        className={styles.stationCover}
      />
      <p>{station.name}</p>
    </button>
  );
};

export default Station;
