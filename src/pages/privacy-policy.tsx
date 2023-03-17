import Head from 'next/head';
import styles from '@/styles/PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Adio World Radio - Privacy Policy</title>
        <meta name="description" content="Adio World Radio - FM Online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Adio World Radio</h1>

        <h3>Privacy Policy</h3>
        <p>Our app does not collect user or device information.</p>

        <h3>Legal</h3>
        <p>
          All radios stream are suggested by users, if you are a radio owner and
          you want to remove this radio, please send an email to{' '}
          <a href="mailto:adio@veest.net">adio@veest.net</a>.
        </p>
        <h4>Thanks for downloading our App, we hope you will enjoy!</h4>
      </main>
    </>
  );
}
