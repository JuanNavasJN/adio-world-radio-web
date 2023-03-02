import React, { FC, createContext, useState, useEffect, useMemo } from 'react';
import { ALL } from '../constants';
import { stationsByCountry } from '../data';
import {
  IStationsContext,
  StationsProviderProps,
  Station
} from './StationsContext.types';

export const StationsContext = createContext<IStationsContext>({
  countries: [],
  stations: [],
  setCountry: () => {},
  setStation: () => {},
  currentCountry: ALL
});

const StationsProvider: FC<StationsProviderProps> = ({ children }) => {
  const [currentCountry, setCurrentCountry] = useState(ALL);
  const [stations, setStations] = useState<Station[]>([]);
  const [currentStation, setCurrentStation] = useState<Station>();

  const countries = useMemo(
    () => stationsByCountry.map(item => item.country),
    []
  );

  const allStations = useMemo(() => {
    let allSts: Station[] = [];

    for (let countryStations of stationsByCountry) {
      allSts = [...allSts, ...countryStations.stations];
    }

    return allSts;
  }, []);

  useEffect(() => {
    if (currentCountry === ALL) {
      setStations(allStations);
    } else {
      let newCountry = stationsByCountry.find(
        sc => sc.country.name === currentCountry
      );

      if (newCountry) {
        setStations(newCountry.stations);
      }
    }
  }, [currentCountry, allStations]);

  const context = {
    countries,
    stations,
    setCountry: (newCountry: string) => {
      setCurrentCountry(newCountry);
    },
    setStation: (newStation: Station) => {
      setCurrentStation(newStation);
    },
    currentStation,

    currentCountry
  };

  return (
    <StationsContext.Provider value={context}>
      {children}
    </StationsContext.Provider>
  );
};
export default StationsProvider;
