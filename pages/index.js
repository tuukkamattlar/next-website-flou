import Head from 'next/head';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import Header from '@components/Header';
import WhatWeDoBlock from '@components/WhatWeDoBlock';
import SmallRef from '@components/SmallRef';
import { attributes, react as HomeContent } from '../content/home.md';
import AddBlock from '@components/addBlock';
import { useContext } from 'react';
import { PageContext } from './_app';
import HomeLayout from '@components/HomeLayout';
import styles from '@components/styles/Home.module.css';

export default function Home() {
  let { title, items } = attributes;

  const { lan } = useContext(PageContext);

  const twitterProps = {
    sourceType: 'profile',
    screenName: 'flou_ltd',
    options: { height: 400, width: 300 },
    noHeader: true,
    noFooter: true,
    autoHeight: true,
    transparent: true,
    theme: 'dark'
  };

  return (
    <>
      <Head>
        <title>FLOU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header title={title[lan]} />
        <WhatWeDoBlock />
        <div className={styles.newscontainer}>
          <div className={styles.blogcontainer}>
            <SmallRef items={items} />
          </div>
          <div className={styles.twittercontainer}>
            <TwitterTimelineEmbed {...twitterProps} />
          </div>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
