// Components
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import GeneralHeader from '@components/GeneralHeader';
import ReferenceProjects from '@components/ReferenceProjects';
import SEO from '@components/metacomponents/SEO';
import TextAndImageModule from "@components/general_components/TextAndImageModule";
import TitleModule from "@components/general_components/TitleModule";


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
        <>
            <GeneralHeader title={{en: '', fi: ''}} img={''} lan={lan} description={''}/>
            <div className={GeneralCSS.container}>
                <TitleModule 
                    title={{en: '404 not found', fi: '404 ei sivua'}} 
                    lan={lan}
                />
            </div>
        </>

        :
        <>
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
            </div>
            <div className='powder'>
                <div className={styles.container}>
                    <div><Markdown>{skillarea.long[lan]}</Markdown></div>
                    <h1>Kategoriat TODO</h1>
                    <div className={styles.subcategories}>
                        {skillarea.subcategories.map((val,ind) => (
                            <div key={ind} className={styles.subcategory}>
                                <h4>{val.title[lan]}</h4>
                                <p>{val.description[lan]}</p>
                            </div>
                        ))}
                    </div>
                    <h1>Projekteja TODO</h1>
                    <ReferenceProjects  item = {skillarea} lan={lan}/>
                </div>
            </div>
        </>
    )
  }