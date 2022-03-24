import styles from './styles/BlogView.module.css'
import Link from 'next/link'
import Markdown from 'markdown-to-jsx';
import path from 'path'
import getConfig from 'next/config'
import BlogPersons from './BlogPersons';
import { attributes } from '../content/tiimi.md';
import { useState, useEffect } from 'react';

export default function BlogView({ blogItem, lan }) {
  const [personsMaking, setPersonsMaking] = useState([])  
  const fixedBlogContent = blogItem.long[lan].replace("](img/", "](../img/") // koska täs systeemis on outo bugi
    // const backButton = {fi: "Takaisin", en: "Back"}
    function matchEmails(){
      for(let blogMaker = 0; blogMaker < blogItem.email.length; blogMaker++){
        for(let personnel = 0; personnel < attributes.persons.length; personnel++){
          try {
            if(blogItem.email[blogMaker].name === attributes.persons[personnel].email){
              const addTo = attributes.persons[personnel]
              console.log(addTo)
              setPersonsMaking(personsMaking => [...personsMaking, addTo])
            }
          } catch (error) {
            //alert('problems')
          }

        }
      }
    }

    useEffect(() => {
      matchEmails();
      console.log(personsMaking)
    }, []);
  return (
      <div className={styles.container} >
          {/* <Link href='/blogi'><a>{backButton[lan]}</a></Link> */}
          <h1>{blogItem.title[lan]}</h1>
          <Markdown>{fixedBlogContent}</Markdown>
          <div className={styles.team}>
            <h2>Mukana tekemässä</h2>
            <BlogPersons persons={personsMaking} lan={lan}/>
          </div>
      </div>
  )
}
