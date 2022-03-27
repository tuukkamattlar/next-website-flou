import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import { attributes } from '../../content/competences_list.md';
import GeneralHeader from '@components/GeneralHeader';
import ReferenceProjects from '@components/ReferenceProjects';
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
    return(
        loading ? 
        <div>
            Loading
        </div>
        :
        <>
            <GeneralHeader title={skillarea.title} img={skillarea.skillIMG} lan={lan} description={''}/>
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