// pages/_app.tsx

import type { AppProps } from 'next/app';
import '../styles/styles.css';  // Make sure the path to your CSS file is correct
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          {/* Insert the Font Awesome CDN link */}
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            rel="stylesheet"
          />
      </Head>
      <div className="flex flex-col min-h-screen"> {/* This ensures the footer is at the bottom */}
        <Header />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
