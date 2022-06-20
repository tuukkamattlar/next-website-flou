// components
import GeneralHeader from '@components/GeneralHeader';
import SEO from '@components/metacomponents/SEO';
import TextAndImageModule from "@components/general_components/TextAndImageModule";
import TitleModule from "@components/general_components/TitleModule";
import ShortBallsModule from "@components/general_components/ShortBallsModule";


// content
import { attributes as competences} from '../content/competence_content.md';
import { attributes as seoContent } from '../content/SEO/competences.md';
import { attributes as categories} from '../content/competences_list.md';


// styles
import GeneralCSS from '@components/general_components/styles/General.module.css'

export default function Skills({ lan }) {
    console.log(competences)
    return(
        <div className='skillsPage'>
            <SEO 
                title={'FLOU - '+competences.title[lan]} 
                OGimage={seoContent.OGPimg} 
                metadata={seoContent.metatags} 
                OGdata={seoContent.ogp} 
                keywords={seoContent.keywords}
            />
            <GeneralHeader title={competences.title} img={competences.headerIMG} lan={lan}/>
            <div className={GeneralCSS.container}>
                <TextAndImageModule
                    lan={lan}
                    image={competences.headerIMG} 
                    imagealt={'img alt'}
                    text = {competences.description}
                    hideIfMobile = {false}
                />
                <ShortBallsModule 
                    categories={categories.category}
                    lan = {lan}
                />
            </div>
        </div>
    )
  }