import { attributes } from '../content/blogs.md';
import GeneralHeader from '@components/GeneralHeader';
import BlogBox from '@components/BlogBoxes';
import styles from '@components/styles/BlogBox.module.css';
import { attributes as seoContent } from '../content/SEO/frontpage.md';
import SEO from '@components/metacomponents/SEO';


export default function Blogi({ lan }) {
  let { title, description, headerIMG, blogs } = attributes;
  return (
    <>
      <SEO 
          title={'FLOU -'+title[lan]} 
          OGimage={seoContent.OGPimg} 
          metadata={seoContent.metatags} 
          OGdata={seoContent.ogp} 
          keywords={seoContent.keywords}
        />
      <div className="powder">
        <GeneralHeader title={attributes.title} img={attributes.headerIMG} lan={lan} />
        <div className={styles.container}>
          <BlogBox lan={lan} />
        </div>
      </div>
    </>
  );
}
