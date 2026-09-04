import React from 'react';
import Head from 'next/head';
import "./style/_app.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Secure Fit LLC | Respiratory Fit Testing</title>
        <meta
          name="description"
          content="Professional respiratory fit testing services in New York. OSHA-compliant testing, $75 per test, convenient pop-up stations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kay+Pho+Du:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
