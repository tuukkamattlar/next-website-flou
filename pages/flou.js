// Components
import TextAndImageModule from "@components/general_components/TextAndImageModule";
import TitleModule from "@components/general_components/TitleModule";
import GeneralHeader from '@components/GeneralHeader';
import FlouHistory from '@components/FlouHistory';
import SEO from '@components/metacomponents/SEO';

// Content
import { attributes as seoContent } from '../content/SEO/company.md';
import { attributes as flou } from '../content/flou.md';

// Styles
import GeneralCSS from '../components/general_components/styles/General.module.css'



export default function Flou({ lan }) {

    const titleCompany = {fi: "Yrityksenä", en: "As a company"}

    return(
        <div className='flouPage'>
            <SEO 
                title={'FLOU - '+titleCompany[lan]} 
                OGimage={seoContent.OGPimg} 
                metadata={seoContent.metatags} 
                OGdata={seoContent.ogp} 
                keywords={seoContent.keywords}
            />
            <GeneralHeader title={flou.title} img={flou.headerIMG} lan={lan} description={''}/>
            <div className={GeneralCSS.container}>
                <TextAndImageModule 
                    lan={lan}
                    image={flou.headerIMG} 
                    imagealt={'img alt'}
                    text = {flou.description}
                    hideIfMobile = {false}
                    />
                <FlouHistory item={flou} lan={lan}/>
            </div>
        </div>
    )
  }
  