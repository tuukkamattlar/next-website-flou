// Components
import BlogBoxes from '@components/BlogBoxes';
import SEO from '@components/metacomponents/SEO';
import GeneralHeader from "@components/GeneralHeader";
import FullWidthTextModule from "@components/general_components/FullWidthTextModule";

// Content
import { attributes as seoContent } from '../content/SEO/frontpage.md';
import { attributes as blogs } from '../content/blogs.md';


// Styles
import GeneralCSS from '@components/general_components/styles/General.module.css'

export default function Blogi({ lan }) {
  return (
    <div className='blogsPage'>
      <SEO 
          title={'FLOU -'+blogs.title[lan]} 
          OGimage={seoContent.OGPimg} 
          metadata={seoContent.metatags} 
          OGdata={seoContent.ogp} 
          keywords={seoContent.keywords}
      />
      <GeneralHeader title={blogs.title} img={blogs.headerIMG} lan={lan} />
      <div className={GeneralCSS.container}>
        <FullWidthTextModule 
          text={blogs.description}
          lan = {lan}
        />
        <BlogBoxes lan={lan} />
      </div>
    </div>
  );
}
