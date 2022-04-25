import { attributes } from '../content/flou.md';
import HomeHeaderAndNav from '@components/Header';
import GeneralHeader from '@components/GeneralHeader';
import FlouPage from '@components/FlouPage';
import { attributes as seoContent } from '../content/SEO/company.md';
import SEO from '@components/metacomponents/SEO';

export default function Flou({ lan }) {
    let {title, headerIMG, description, bodyIMG} = attributes
    const titleCompany = {fi: "Yrityksenä", en: "As a company"}
    return(
        <>
            <SEO 
                title={'FLOU - '+titleCompany[lan]} 
                OGimage={seoContent.OGPimg} 
                metadata={seoContent.metatags} 
                OGdata={seoContent.ogp} 
                keywords={seoContent.keywords}
            />
            <GeneralHeader title={title} img={headerIMG} lan={lan} description={''}/>
            <FlouPage item={attributes} lan={lan}/>
        </>
    )
  }
  