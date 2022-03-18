import styles from './styles/FlouPage.module.css'
import Link from 'next/link'

export default function FlouPage({ item, lan }) {
  console.log(item.title)
  return (
      <div className='powder'>
        <div className={styles.container} >
          <p>{item.description[lan]}</p>
        </div>
      </div>

  )
}