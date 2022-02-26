import Head from 'next/head';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import HomeHeaderAndNav from '@components/Header';
import WhatWeDoBlock from '@components/WhatWeDoBlock';
import SmallRef from '@components/SmallRef';
import { attributes, react as HomeContent } from '../content/home.md';
import AddBlock from '@components/addBlock';
import { useContext, useEffect, useRef, useState } from 'react';
import { PageContext } from './_app';
import HomeLayout from '@components/HomeLayout';
import styles from '@components/styles/Home.module.css';

export default function Home() {
  let { title, items } = attributes;

  const ref = useRef();
  const { lan } = useContext(PageContext);
  const [twitterHeight, setTwitterHeight] = useState(1000);

  const setHeightTweetsDiv = () => {
    const height = ref?.current?.clientHeight;
    setTwitterHeight(height);
  };

  useEffect(() => {
    setHeightTweetsDiv();
  }, []);

  const twitterProps = {
    sourceType: 'profile',
    screenName: 'flou_ltd',
    options: { width: 300 },
    noHeader: true,
    noFooter: true,
    autoHeight: true,
    transparent: true
  };

  return (
    <>
      <Head>
        <title>FLOU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HomeHeaderAndNav title={title[lan]} />
        <WhatWeDoBlock />
        <div className={styles.newscontainer}>
          <div className={styles.blogcontainer}>
            <SmallRef items={items} forwardRef={ref} />
          </div>
          <div className={styles.twittercontainer} style={{height: twitterHeight}}>
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
