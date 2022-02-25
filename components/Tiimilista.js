import styles from './styles/Tiimi.module.css'
import Link from 'next/link'

export default function Tiimilista({ items, lan }) {
  console.log(items)
  return (
      <div className={styles.container} >
          {items.map((item, k) => (
            <Link href='/osaaminen/esim' key={k}>
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
                    {item.description.l}
                </p>
            </div>
            </Link>
          ))}
      </div>
  )
}
