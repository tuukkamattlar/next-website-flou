import '@styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';
import NavBar from '@components/Navbar';
import Footer from '@components/Footer';
import { useState, createContext } from 'react';

export const PageContext = createContext(null);

function Application({ Component, pageProps }) {
  const [lan, setLan] = useState('fi');
  return (
    <>
      <Head>
        <title>FLOU</title>
        <link rel="icon" href="/favicon.ico" />
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      </Head>
      <PageContext.Provider value={{ lan, setLan }}>
        <div className="minHeight">
          <NavBar />
          <Component {...pageProps} lan={lan} />
        </div>
        <Footer />
      </PageContext.Provider>
    </>
  );
}

export default Application;
