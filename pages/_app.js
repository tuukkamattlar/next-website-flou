import '@styles/globals.css';
// Load css files for blueprintjs
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';

import Head from 'next/head';
import Script from 'next/script';
import NavBar from '@components/Navbar';
import Footer from '@components/Footer';
import { useState, createContext } from 'react';
import Layout from '@components/GeneralLayout';

export const PageContext = createContext(null);

function Application({ Component, pageProps }) {
  const [lan, setLan] = useState('fi');

  const getLayout = Component.getLayout || ((page) => <Layout >{page}</Layout>);

  return (
    <>
      <Head>
        <title>FLOU</title>
        <link rel="icon" href="/favicon.ico" />
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      </Head>
      <PageContext.Provider value={{ lan, setLan }}>
        {getLayout(<Component {...pageProps} lan={lan} />)}
      </PageContext.Provider>
    </>
  );
}

export default Application;
