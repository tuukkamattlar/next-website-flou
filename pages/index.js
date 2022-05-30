import HomeHeaderAndNav from '@components/Header';
import FrontpageCompetences from '@components/FrontpageCompetences';
import { useContext, useEffect, useRef, useState } from 'react';
import { PageContext } from './_app';
import HomeLayout from '@components/HomeLayout';
import { attributes as seoContent } from '../content/SEO/frontpage.md';
import SEO from '@components/metacomponents/SEO';

import FrontpageNews from '@components/FrontpageNews';
import FrontpageTwitter from '@components/FrontpageTwitter';

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


