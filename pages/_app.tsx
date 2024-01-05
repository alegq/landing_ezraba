import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cleaning</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </>
  );
}
