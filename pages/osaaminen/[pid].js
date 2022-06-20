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
    console.log(skillarea)
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
               
                <TextAndImageModule 
                    lan={lan}
                    image={skillarea.skillIMG.replace("img/", "../img/")} 
                    imagealt={'img alt'}
                    text = {skillarea.long}
                    hideIfMobile = {false}
                />
           
                 
                    {
                        skillarea.subcategories.map((c, i) => (
                            <div className='skillBox'>
                                <h1>{c.title[lan]}</h1>
                                <p>Lorem </p>
                                <div class="skillButtons">
                                    <div class="skillButton"><img src="../img/city.svg" />Espoontori <br/>(Espoo 2022)</div>
                                    <div class="skillButton"><img src="../img/arrow-waved.svg" />Tallinnan seudun joukkoliikenneselvitys <br/>(Viron elinkeino- ja liikenneministeriö 2021)</div>
                                    <div class="skillButton"><img src="../img/arrow-waved.svg" />Pietarsaaren liikennemalli</div>
                                </div>
                            </div>
                        ))
                    }
                 
                 


                 
                 

                    <div className='skillBox'>
                 <h1>Ennusteet & mallit</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                 <div class="skillButtons">
                         <div class="skillButton"><img src="../img/arrow-waved.svg" />Lorem ipsum</div>
                         <div class="skillButton"><img src="../img/arrow-waved.svg" />Lorem ipsum</div>
                         <div class="skillButton"><img src="../img/arrow-waved.svg" />Lorem ipsum</div>

                 </div>
                 </div>


                    <div className='skillBox'>
                 <h1>Ennusteet & mallit</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                 <div class="skillButtons">
                         <div class="skillButton"><img src="../img/arrow-waved.svg" />Lorem ipsum</div>
                         <div class="skillButton"><img src="../img/arrow-waved.svg" />Lorem ipsum</div>
                         <div class="skillButton"><img src="../img/arrow-waved.svg" />Lorem ipsum</div>

                 </div>
                 </div>


            </div>
        </div>

     
      
    )
  }