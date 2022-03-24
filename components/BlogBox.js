import styles from './styles/BlogBox.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function BlogBox({ items, lan }) {
  const [years, setYears] = useState([])
  console.log(items)
  return (
      <div className={styles.container} >
        <div className={styles.intro}>
          <p>{'content'}</p>
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
      </div>
  )
}
