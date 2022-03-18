import styles from './styles/SmallRef.module.css'
import Link from 'next/link'

export default function SmallRef({ items, forwardRef }) {
  return (
      <div className={styles.container} ref={forwardRef}>
          {items.map((item, k) => (
            <Link href='/projekti' key={k}>
            <div className={styles.bgLayer}>
              <div 
              className={styles.bgimg} 
              style={{
                  backgroundImage: "url(/img/tram.jpg)",
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: "cover",
                }}
                >
              </div>
              <div className={styles.textLayer}>
                <h2 className={styles.title} >
                    {item.name}
                  </h2>
                  <p className={styles.main}>
                      {item.description}
                  </p>
              </div>
            </div>
            </Link>
          ))}
      </div>
  )
}
