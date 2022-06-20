import Link from 'next/link';
import FrontpageBlogBoxes from './FrontpageBlogBoxes.js';
import general from './styles/FrontpageGeneral.module.css'
import news from './styles/FrontpageCompetences.module.css';

// GENERAL
import { useContext, useEffect, useRef, useState } from 'react';

// COMPONENTS
import twitterCSS from './styles/Twitter.module.css';
import useWindowSize from '@components/hooks/useWindowSize';



// STYLES

// CONTENT
import twitterSample from '@components/fronpage_components/twitterSample.json'


export default function FrontpageNews({lan}) {


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
 <h1 className={news.heading}>{{"fi": "Tuoreimpia kuulumisia", "en": "Latest news"}[lan]}</h1>

        <div className={news.containerNews}>
         
          <FrontpageBlogBoxes lan={lan} maxLen={2} />
        </div>
        <Link href="/blogi">
         <a className="buttonlink"><div class="button plum">Katso kaikki kirjoitukset</div></a>
         </Link>

      <div className={twitterCSS.container}>

       <h2 className={news.heading}>{{"fi": "Twitter", "en": "Twitter"}[lan]}</h2>
        <div className={twitterCSS.twittercontainer}>
          {/**local testing: replace "tweets" with "twitterSample" */}
          {twitterSample.slice(0,4).map((tweet) => (
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
       <img src="/img/twitter-plum.svg" class="icon" />
        <a>{tweet.created_at.split('T')[0]}</a>
        <p>{tweet.text}</p>
      </div>
    </Link>
  )
}

