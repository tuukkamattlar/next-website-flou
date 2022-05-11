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
import { attributes } from '../../content/competences_list.md';


// Styles
import GeneralCSS from '../../components/general_components/styles/General.module.css'
import styles from '../../components/styles/CompetencePage.module.css'


export default function SkillArea({ lan }) {
    const router = useRouter()
    const { pid } = router.query
    const [skillarea, setSkillarea] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        for(let i=0; i < attributes.category.length; i++){
            if(pid){
                if( attributes.category[i].url.toLowerCase() === pid.toLowerCase() ){
                    setSkillarea(attributes.category[i])
                    setLoading(false)
                    return(0)
                }
            }
        }
    });
    const filteredSEOContent = seoContent[skillarea.url]
    return(
        loading ? 
        <div>
            Loading
        </div>
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