import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import NavContainer from '@/components/NavContainer';
import StationsContainer from '@/components/StationsContainer';
import PlayerContainer from '@/components/PlayerContainer';
import StationsProvider from '@/contexts/StationsContext';

export default function Home() {
  return (
    <>
      <Head>
        <title>Adio World Radio - FM Online</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StationsProvider>
        <main className={styles.main}>
          <NavContainer />
          <StationsContainer />
          <PlayerContainer />
        </main>
      </StationsProvider>
    </>
  );
}
