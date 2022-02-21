import styles from './styles/Tiimi.module.css'
import Link from 'next/link'

export default function Tiimi({ items, lan }) {
  console.log(items)
  return (
      <div className={styles.container} >
          {items.map((item, k) => (
            <Link href='/me/esim' key={k}>
            <div 
            className={styles.bgimg} 
            style={{
                backgroundImage: "url("+item.thumbnail+")",
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover",
              }}
              >
                <h2 className={styles.title} >
                  {item.name}
                </h2>
                <p className={styles.main}>
                    {item.description[lan]}
                </p>
            </div>
            </Link>
          ))}
      </div>
  )
}
