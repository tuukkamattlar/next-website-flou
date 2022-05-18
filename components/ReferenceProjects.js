import refProjectCSS from './styles/ReferenceProjects.module.css'
import blogBoxes from './styles/BlogBox.module.css'
import { attributes} from '../content/competences_refs.md';
import Link from 'next/link'
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
      <div className={blogBoxes.container} >
        {projects.map((value, index) => (
          <RefProjectBox key={index} item={value} lan={lan}/>
        ))}
      </div>

  )
}

function RefProjectBox({ item, lan }) {
  return (
      <div className={ blogBoxes.box}>
        <div 
        className={blogBoxes.bgimg} 
        style={{
            backgroundImage: "url("+item.skillIMG.replace('img/', '../img/')+")",
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
          }}
          >
        </div>
        <div className={blogBoxes.textLayer}>
          <h2 className={blogBoxes.title} >
            {item.title[lan]}
          </h2>
          <p className={blogBoxes.mainText}>
            {item.short[lan]}
          </p>
          <p className={blogBoxes.mainText}>
            {item.customer[lan]}
          </p>
        </div>
      </div>

  )
}