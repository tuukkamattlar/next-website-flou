import { useContext, useEffect, useRef, useState } from 'react';
import general from '@components/styles/FrontpageGeneral.module.css';
import twitterCSS from '@components/styles/Twitter.module.css';
import useWindowSize from '@components/hooks/useWindowSize';
import twitterSample from '@components/twitterSample.json'
import Link from 'next/link';

export default function FrontpageTwitter() {
  const size = useWindowSize();
  const ref = useRef();
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    try {
      fetch('/get_tweets')
      .then((response) => response.json())
      .then((data) => {
        setTweets(data);
      });
    } catch(error) {
      console.log("Twitter connection down...")
    }
  }, []);


  return (
    <div className={general.pageHeightBox}>
      <div className={twitterCSS.container}>
        <div className={twitterCSS.twittercontainer}>
          {/**local testing: replace "tweets" with "twitterSample" */}
          {tweets.slice(0,10).map((tweet) => (
          <TwitterBox tweet={tweet}/>
          ))}
        </div>
      </div>
    </div>
  );
}

function TwitterBox({tweet}) {
  return(
    <Link href={'https://twitter.com/FLOU_ltd/status/'+tweet.id}>
      <div className={twitterCSS.boxContainer}>
        <a>{tweet.created_at.split('T')[0]}</a>
        <p>{tweet.text}</p>
      </div>
    </Link>
  )
}