import { fetcher, localStorageProvider } from '@/helpers';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import '@/styles/globals.css';
import '@fontsource/nunito';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher,
        provider: localStorageProvider,
        revalidateOnFocus: false
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
