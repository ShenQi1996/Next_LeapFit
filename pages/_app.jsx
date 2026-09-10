import React from 'react';
import Head from 'next/head';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Secure Fit LLC | Respiratory Fit Testing</title>
        <meta
          name="description"
          content="OSHA-compliant respiratory fit testing in New York. $75 per test, documented e-cards you can scan to verify, and records kept for up to 3 years."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
