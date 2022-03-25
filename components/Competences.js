import styles from './styles/Competences.module.css'
import Link from 'next/link'
import { attributes} from '../content/competences_list.md';

export default function Competences({ lan }) {
  console.log(attributes)
  return (
      <div className={styles.container} >
          {attributes.category.map((item, k) => (
            <Link href={'/osaaminen/'+item.url} key={k}>
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
