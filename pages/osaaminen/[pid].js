// Components
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import GeneralHeader from '@components/GeneralHeader';
import ReferenceProjects from '@components/ReferenceProjects';
import SEO from '@components/metacomponents/SEO';
import TextAndImageModule from "@components/general_components/TextAndImageModule";
import TitleModule from "@components/general_components/TitleModule";
import SkillSubCategories from '@components/general_components/SkillSubCategories';

// Content
import { attributes as seoContent } from '../../content/SEO/competences.md';
import { attributes as competencesList } from '../../content/competences_list.md';


// Styles
import GeneralCSS from '@components/general_components/styles/General.module.css'
import styles from '@components/styles/CompetencePage.module.css'


export default function SkillArea({ lan }) {
    
    const [skillarea, setSkillarea] = useState({})
    const [loading, setLoading] = useState(true)
    const [filteredSEOContent, setFilteredSEOContent] = useState({})

    const router = useRouter()
    const { pid } = router.query

    function filterSearch(){
        for(let i=0; i < competencesList.category.length; i++){
            if(pid){
                if( competencesList.category[i].url.toLowerCase() === pid.toLowerCase() ){
                    setSkillarea(competencesList.category[i])
                    setFilteredSEOContent(seoContent[competencesList.category[i].url])
                    setLoading(false)
                    return(0)
                }
            }
        }
    }

    useEffect(() => {
        filterSearch()
    });
    return(
        loading ? 
        <div className='skillSubPage'>
            <GeneralHeader title={{en: '', fi: ''}} img={''} lan={lan} description={''}/>
            <div className={GeneralCSS.container}>
                <TitleModule 
                    title={{en: 'Page is loading', fi: 'Sivu latautuu'}} 
                    lan={lan}
                />
            </div>
        </div>

        :
        <div className='skillSubPage'>
            <SEO 
                title={'FLOU - '+skillarea.title["fi"]} 
                OGimage={seoContent.OGPimg.replace("](img/", "](../img/")} 
                metadata={filteredSEOContent.metatags} 
                OGdata={filteredSEOContent.ogp} 
                keywords={filteredSEOContent.keywords}
            />
            <GeneralHeader title={skillarea.title} img={skillarea.skillIMG} lan={lan} description={''}/>
            <div className={GeneralCSS.container}>
                <TitleModule 
                    title={skillarea.title} 
                    lan={lan}
                />
                <TextAndImageModule 
                    lan={lan}
                    image={skillarea.skillIMG.replace("img/", "../img/")} 
                    imagealt={'img alt'}
                    text = {skillarea.long}
                    hideIfMobile = {false}
                />
                <SkillSubCategories
                    lan={lan}
                    subcategories = {skillarea.subcategories}
                />
                <ReferenceProjects  
                    item = {skillarea} 
                    lan={lan}
                />
            </div>
        </div>
    )
  }