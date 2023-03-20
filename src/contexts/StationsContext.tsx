import React, { FC, createContext, useState, useEffect, useMemo } from 'react';
import { ALL, API_URL } from '../constants';
import { countriesStations as countriesStationsStatic } from '../data';
import {
  IStationsContext,
  StationsProviderProps,
  Station
} from './StationsContext.types';
import useSWR from 'swr';

export const StationsContext = createContext<IStationsContext>({
  countries: [],
  stations: [],
  setCountry: () => {},
  setStation: () => {},
  currentCountry: ALL,
  isLoading: true
});

const StationsProvider: FC<StationsProviderProps> = ({ children }) => {
  const [currentCountry, setCurrentCountry] = useState(ALL);
  const [stations, setStations] = useState<Station[]>([]);
  const [currentStation, setCurrentStation] = useState<Station>();
  const [countriesStations, setCountriesStations] = useState<
    typeof countriesStationsStatic
  >([]);

  const { data, error, isLoading } = useSWR(API_URL);

  useEffect(() => {
    if (data && data.length > 0) {
      setCountriesStations(data);
    }
  }, [data]);

  if (error) console.error(error);

  const countries = useMemo(
    () =>
      countriesStations.map(item => ({
        name: item.name,
        displayName: item.displayName
      })),
    [countriesStations]
  );

  const allStations = useMemo(() => {
    let allSts: Station[] = [];

    for (let countryStations of countriesStations) {
      allSts = [...allSts, ...countryStations.stations];
    }

    return allSts;
  }, [countriesStations]);

  useEffect(() => {
    if (currentCountry === ALL) {
      setStations(allStations);
    } else {
      let newCountry = countriesStations.find(sc => sc.name === currentCountry);

      if (newCountry) {
        setStations(newCountry.stations);
      }
    }
  }, [currentCountry, allStations, countriesStations]);

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
    isLoading,
    currentCountry
  };

  return (
    <StationsContext.Provider value={context}>
      {children}
    </StationsContext.Provider>
  );
};
export default StationsProvider;
