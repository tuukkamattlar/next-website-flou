import { attributes } from '../content/contact.md';
import ContactInfo from '@components/ContactInfo';
import GeneralHeader from '@components/GeneralHeader';
import { attributes as seoContent } from '../content/SEO/contact.md';
import SEO from '@components/metacomponents/SEO';

export default function Contact({ lan }) {
    return(
        <>
            <SEO 
                title={'FLOU - '+attributes.title[lan]} 
                OGimage={seoContent.OGPimg} 
                metadata={seoContent.metatags} 
                OGdata={seoContent.ogp} 
                keywords={seoContent.keywords}
            />
            <GeneralHeader title={attributes.title} img={attributes.headerIMG} lan={lan} description={''}/>
            <div className='powder'>
                <ContactInfo item={attributes} lan={lan}/>
            </div>
        </>
    )
  }
  