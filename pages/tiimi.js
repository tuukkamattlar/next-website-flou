// Components
import TeamList from '@components/TeamList';
import GeneralHeader from '@components/GeneralHeader';
import SEO from '@components/metacomponents/SEO';

// Content
import { attributes as seoContent } from '../content/SEO/team.md';
import { attributes as team } from '../content/tiimi.md';

// Styles
import GeneralCSS from '@components/general_components/styles/General.module.css'


export default function Tiimi({lan}) {
    return(
        <>
            <SEO 
                title={'FLOU - '+team.title[lan]} 
                OGimage={seoContent.OGPimg} 
                metadata={seoContent.metatags} 
                OGdata={seoContent.ogp} 
                keywords={seoContent.keywords}
            />
            <GeneralHeader title={team.title} img={team.headerIMG} lan={lan}/>
            <div className={GeneralCSS.container}>
                <TeamList items={team.persons} lan={lan}/>
            </div>
        </>
    )
  }