import styles from './styles/BlogBox.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Markdown from 'markdown-to-jsx';
import { attributes } from '../content/blogs.md';

export default function BlogBox({ items = attributes.blogs, description = attributes.description, lan, maxLen = -1 }) {
  const [years, setYears] = useState([])
  if(maxLen > 0){
    items = items.slice(0, maxLen)
  }
  
  return (
      <>
        <div className={styles.intro}>
          <Markdown>{description[lan]}</Markdown>
        </div>
          {items.map((item, k) => (
            <Link href={'/blogi/'+item.url} key={k}>
            <div className={styles.bgLayer}>
              <div 
                key={k}
                className={styles.bgimg}
                style={{
                    backgroundImage: "url(/"+item.img+")",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: "cover",
                    }}
                >
              </div>
              <div className={styles.textLayer}>
                <h2 className={styles.title} >
                    {item.title[lan]}
                  </h2>
                  <p className={styles.main}>
                      {item.short[lan]}
                  </p>
              </div>
            </div>
            </Link>
          ))}
      </>
  )
}
