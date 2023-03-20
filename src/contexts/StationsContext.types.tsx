import { ReactNode } from 'react';

export interface Country {
  name: string;
  displayName: string;
}

export interface Station {
  name: string;
  url: string;
  coverUrl?: any;
}

export interface IStationsContext {
  countries: Country[];
  stations: Station[];
  currentStation?: Station;
  setCountry: (newCountry: string) => void;
  setStation: (newStation: Station) => void;
  currentCountry: string;
  isLoading: boolean;
}

export interface StationsProviderProps {
  children: ReactNode;
}
