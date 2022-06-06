// GENERAL
import { useContext, useEffect, useRef, useState } from 'react';
import { PageContext } from './_app';

// COMPONENTS
import HomeLayout from '@components/fronpage_components/HomeLayout';
import SEO from '@components/metacomponents/SEO';
import FrontpageNews from '@components/fronpage_components/FrontpageNews';
import FrontpageTwitter from '@components/fronpage_components/FrontpageTwitter';
import HomeHeaderAndNav from '@components/fronpage_components/Header';
import FrontpageCompetences from '@components/fronpage_components/FrontpageCompetences';

// STYLES


//CONTENT
import { attributes as seoContent } from '../content/SEO/frontpage.md';

export default function Home() {
  const title = 'FLOU'
  const ref = useRef();
  const { lan } = useContext(PageContext);
 
  return (
    <>
      <SEO 
        title={title} 
        OGimage={seoContent.OGPimg} 
        metadata={seoContent.metatags} 
        OGdata={seoContent.ogp}
        keywords={seoContent.keywords}
      />
      <div className='homePage'>
        <HomeHeaderAndNav lan={lan} />
        <FrontpageCompetences lan={lan} />
        <FrontpageNews lan={lan}/>
        <FrontpageTwitter/>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};


