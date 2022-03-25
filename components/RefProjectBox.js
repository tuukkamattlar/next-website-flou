import styles from './styles/ReferenceProjects.module.css'
import { attributes} from '../content/competences_refs.md';
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function RefProjectBox({ item, lan }) {
  console.log(item.skillIMG)
  return (
      <div className={styles.project}>
        <div 
        className={styles.imgStyles} 
        style={{
            backgroundImage: "url("+item.skillIMG.replace('img/', '../img/')+")",
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
          }}
          >
        </div>
        <div className={styles.textPart}>
          <h3>{item.title[lan]}</h3>
          <p>{item.short[lan]}</p>
          <h4>{item.customer[lan]}</h4>
        </div>
      </div>

  )
}