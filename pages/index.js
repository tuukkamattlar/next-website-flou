import Head from 'next/head';
import Header from '@components/Header';
import WhatWeDoBlock from '@components/WhatWeDoBlock';
import SmallRef from '@components/SmallRef';
import { attributes, react as HomeContent } from '../content/home.md';
import AddBlock from '@components/addBlock';
import { useContext } from 'react';
import { PageContext } from './_app';
import HomeLayout from '@components/HomeLayout';

export default function Home() {
  let { title, items } = attributes;

  const { lan } = useContext(PageContext);

  return (
    <>
      <Head>
        <title>FLOU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header title={title[lan]} />
        <WhatWeDoBlock />
        <AddBlock />
        <SmallRef items={items} />
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>
}