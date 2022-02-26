import Head from 'next/head';
import Script from 'next/script';

import Footer from '@components/Footer';
import React from 'react';

export default function HomeLayout({ children }) {

  return (
    <>
        <div className="minHeight">
          {children}
        </div>
        <Footer />
    </>
  );
}