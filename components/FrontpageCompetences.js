import Link from 'next/link';
import styles from './styles/FrontpageCompetences.module.css';
import { attributes } from '../content/competences_list.md';

export default function FrontpageCompetences({lan}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{{"fi": "Osaamisemme", "en": "Our competences"}[lan]}</h1>
      <div className={`${styles.skills} `}>
        {attributes.category.map((val, i) => (
            <Link href={'osaaminen/'+val.url} key={i}>
              <div className={styles.box} key={i}>
                <h3>{val.title[lan]}</h3>
                <p>{val.short[lan]}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
