import styles from './styles/SkillCategoryBox.module.css'
import Link from 'next/link'

export default function SkillCategoryBox({ items, lan }) {
  return (
      <div className={styles.container} >
          {items.map((item, k) => (
            <Link href={'/osaaminen/'+item.title['fi']} key={k}>
            <div className={styles.bgLayer}>
              <div 
              key={k}
              className={styles.bgimg} 
              style={{
                  backgroundImage: "url(/"+item.skillIMG+")",
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
