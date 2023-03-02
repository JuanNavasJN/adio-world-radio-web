import { ReactNode } from 'react';

export interface Country {
  name: string;
  displayName: string;
}

export interface Station {
  name: string;
  url: string;
  cover?: any;
}

export interface IStationsContext {
  countries: Country[];
  stations: Station[];
  currentStation?: Station;
  setCountry: (newCountry: string) => void;
  setStation: (newStation: Station) => void;
  currentCountry: string;
}

export interface StationsProviderProps {
  children: ReactNode;
}
