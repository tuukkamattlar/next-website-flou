import styles from './styles/ReferenceProjects.module.css'
import { attributes} from '../content/competences_refs.md';
import Link from 'next/link'
import RefProjectBox from './RefProjectBox';
import { useEffect, useState } from 'react';

export default function ReferenceProjects({ item, lan }) {
  const categoryUrl = item.url
  const refProjects = attributes.refs
  const [projects, setProjects] = useState([])
  function filterRefs(){
    for(let i=0; i < refProjects.length; i++){
      const categories = attributes.refs[i].category
      if(categories.includes(categoryUrl)){
        setProjects(projects => [...projects, attributes.refs[i]])
      }
    }
  }

  useEffect(()=> {
    filterRefs()
  }, [])
  return (
      <div className={styles.container} >
        {projects.map((value, index) => (
          <RefProjectBox key={index} item={value} lan={lan}/>
        ))}
      </div>

  )
}