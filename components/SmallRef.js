import styles from './styles/SmallRef.module.css'

export default function SmallRef({ items }) {
  return (
      <div className={styles.container} >
          {items.map((item, k) => (
            <div 
            key={k}
            className={styles.bgimg} 
            style={{
                backgroundImage: "url(/img/tram.jpg)",
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover",
              }}
              >
                <h2 className={styles.title} >
                  {item.name}
                </h2>
                <p className={styles.main}>
                    {item.description}
                </p>
            </div>
          ))}
      </div>
  )
}
