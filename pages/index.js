import Head from 'next/head';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import BlogBox from '@components/BlogBox';
import HomeHeaderAndNav from '@components/Header';
import FrontpageCompetences from '@components/FrontpageCompetences';
import SmallRef from '@components/SmallRef';
import { attributes, react as HomeContent } from '../content/home.md';
import AddBlock from '@components/addBlock';
import { useContext, useEffect, useRef, useState } from 'react';
import { PageContext } from './_app';
import HomeLayout from '@components/HomeLayout';
import styles from '@components/styles/Home.module.css';
import useWindowSize from '@components/hooks/useWindowSize';

export default function Home() {
  const { title, items } = attributes;

  const size = useWindowSize();

  const ref = useRef();
  const { lan } = useContext(PageContext);
  const [twitterHeight, setTwitterHeight] = useState(1000);

  const setHeightTweetsDiv = () => {
    const height = ref?.current?.clientHeight;
    console.log(height);
    setTwitterHeight(height);
  };

  useEffect(() => {
    setHeightTweetsDiv();
  }, [size.width]);

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
        <FrontpageCompetences lan={lan} />
        <div className={`${styles.newstitle} powder`}>
          <h2>Tuoreimpia kuulumisia</h2>
        </div>
        <div className={styles.newscontainer}>
          <div className={styles.blogcontainer}>
            <div className={styles.blogboxcontainer} ref={ref}>
              <BlogBox lan={lan} maxLen={6} />
            </div>
          </div>

          <div className={styles.twittercontainer} style={{ height: twitterHeight }}>
            {size.width > 1250 ? <TwitterTimelineEmbed {...twitterProps} /> : ''}
          </div>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
