import styles from './styles/BlogPersons.module.css'
import Link from 'next/link'

export default function BlogPersons({ persons, lan }) {
  return (
      <div className={styles.container} >
            {persons.map((value,key) => (
                <div key={key} className={styles.person}>
                  <div
                    style={{
                        backgroundImage: "url("+value.profileIMG.replace('img/', '../img/')+")",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: "cover",
                    }}
                    className={styles.profileImage} 
                  >
                  </div>
                  <h4>{value.name}</h4>
                  <p>{value.roleInProject[lan]}</p>
                  <a href={'mailto:'+value.email}>{value.email}</a>
                </div>
            ))}
      </div>
  )
}

/*
<img src={value.profileIMG.replace('img/', '../img/')} style={{width: "200px"}}/>


*/