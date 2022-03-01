import styles from './styles/BlogBox.module.css'
import Link from 'next/link'

export default function BlogBox({ items, lan }) {
  return (
      <div className={styles.container} >
          {items.map((item, k) => (
            <Link href={'/osaaminen/'+item.title[lan]} key={k}>
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
