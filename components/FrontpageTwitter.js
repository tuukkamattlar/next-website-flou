import { useContext, useEffect, useRef, useState } from 'react';
import general from '@components/styles/FrontpageGeneral.module.css';
import twitter from '@components/styles/Twitter.module.css';
import useWindowSize from '@components/hooks/useWindowSize';

export default function FrontpageTwitter() {
  const size = useWindowSize();
  const ref = useRef();
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch('/get_tweets')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTweets(data);
      });
  }, []);

  return (
    <div className={general.pageHeightBox}>
      <div className={twitter.twittercontainer}>
        {tweets.map((tweet) => (
          <h4>{tweet.text}</h4>
        ))}
      </div>
    </div>
  );
}
