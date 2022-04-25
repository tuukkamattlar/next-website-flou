import styles from './styles/Tiimi.module.css'
import Link from 'next/link'

export default function Tiimilista({ items, lan }) {
  
  function filter(unfilteredList) {
    const filteredList = []
    for(let i = 0; i < unfilteredList.length; i++) {
      const visible = ( unfilteredList[i].visibility === 'visible')
      if(visible){
        filteredList.push(unfilteredList[i])
      }
    }
    return filteredList
  }
  const filteredItems = filter(items)
  return (
      <div className={styles.container} >
          {
          // map begins
          filteredItems.map((item, k) => (
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
                <h4>{item.role[lan]}</h4>
                <p>{item.description[lan]}</p>
                <div className={styles.contact}>
                  <a href={"tel:"+item.phone}>{item.phone}</a>
                  <a href={"mailto:"+item.email}>{item.email}</a>
                </div>
              </div>
            </div>
          ))
          // map ends
          }
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