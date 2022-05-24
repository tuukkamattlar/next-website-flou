import { useContext, useEffect, useRef, useState } from 'react';
import general from '@components/styles/FrontpageGeneral.module.css';
import twitter from '@components/styles/Twitter.module.css';
import useWindowSize from '@components/hooks/useWindowSize';
import twitterSample from '@components/twitterSample.json'

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
      Twitter
      <div className={twitter.twittercontainer}>
        {/**local testing: replace "tweets" with "twitterSample" */}
        {tweets.map((tweet) => (
          <div>
            <a>{tweet.created_at.split('T')[0]}</a>
            <p>{tweet.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
