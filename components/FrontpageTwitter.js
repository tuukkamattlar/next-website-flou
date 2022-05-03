import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { useContext, useEffect, useRef, useState } from 'react';
import styles from '@components/styles/Home.module.css';
import general from '@components/styles/FrontpageGeneral.module.css'
import twitter from '@components/styles/Twitter.module.css'
import useWindowSize from '@components/hooks/useWindowSize';



export default function FrontpageTwitter() {
  const size = useWindowSize();
  const ref = useRef();
  const [twitterHeight, setTwitterHeight] = useState(1000);
  const setHeightTweetsDiv = () => {
    const height = ref?.current?.clientHeight;
    setTwitterHeight(height);
  };
  useEffect(() => {
    setHeightTweetsDiv();
  }, [size.width]);
  const twitterProps = {
    sourceType: 'profile',
    screenName: 'flou_ltd',
    options: { width: 500 },
    noHeader: true,
    noFooter: true,
    autoHeight: true,
    transparent: true
  };
  return (
    <div className={general.pageHeightBox}>
      <div className={styles.newscontainer}>
      <h1>Twitter TODO</h1>
        <div className={styles.twittercontainer} style={{ height: twitterHeight }}>
            {size.width > 1250 ? <TwitterTimelineEmbed {...twitterProps} className={twitter.main}/> : ''}
        </div>
      </div>
    </div>
  );
}
