import styles from './styles/Tiimi.module.css'
import Link from 'next/link'

export default function Tiimilista({ items, lan }) {

  return (
      <div className={styles.container} >
          {items.map((item, k) => (
            <div className={styles.personBox} key={k}>
              <div className={styles.imgWrapper}>
                <div
                  className={styles.bgimg} 
                  style={{
                      backgroundImage: "url("+item.profileIMG+")",
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: "cover",
                  }}
                >
                </div>
              </div>
              <div className={styles.description}>
                <h3>{item.name}</h3>
                <h4>Titteli TODO</h4>
                <p>{item.description[lan]}</p>
                <div className={styles.contact}>
                  <a href={"tel:"+item.phone}>{item.phone}</a>
                  <a href={"mailto:"+item.email}>{item.email}</a>
                </div>
              </div>
            </div>
          ))}
      </div>
  )
}

/* RIPYARD
<div className={styles.skillset}>
                  {item.skills.map((val, key) => (
                    <a className={styles.skillBox}>{val[lan]}</a>
                  ))}
                </div>


*/