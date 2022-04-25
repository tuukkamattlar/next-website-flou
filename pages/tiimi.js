import { attributes } from '../content/tiimi.md';
import Tiimilista from '@components/Tiimilista';
import GeneralHeader from '@components/GeneralHeader';
import { attributes as seoContent } from '../content/SEO/team.md';
import SEO from '@components/metacomponents/SEO';

export default function Tiimi({lan}) {
    let { title, headerIMG, persons } = attributes;
    return(
        <>
            <SEO 
                title={'FLOU - '+title[lan]} 
                OGimage={seoContent.OGPimg} 
                metadata={seoContent.metatags} 
                OGdata={seoContent.ogp} 
                keywords={seoContent.keywords}
            />
            <div className="powder">
                <GeneralHeader title={title} img={headerIMG} lan={lan} description={''}/>
                <Tiimilista items={persons} lan={lan}/>
            </div>
        </>
    )
  }