import Head from 'next/head';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import '../styles/custom-theme.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Silvia Rabelo - Síndica</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Silvia Rabelo - Síndica" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
