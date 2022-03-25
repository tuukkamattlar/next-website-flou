import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { attributes } from '../../content/competences_list.md';
import GeneralHeader from '@components/GeneralHeader';
import ReferenceProjects from '@components/ReferenceProjects';


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
        <div>
            <GeneralHeader title={skillarea.title} img={skillarea.skillIMG} lan={lan} description={''}/>
            <div className='powder'>
                <div>Kun {skillarea.long[lan]}</div>
                <ReferenceProjects  item = {skillarea} lan={lan}/>
            </div>
        </div>
    )
  }
  

  // 