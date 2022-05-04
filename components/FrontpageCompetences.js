import Link from 'next/link';
import general from './styles/FrontpageGeneral.module.css'
import styles from './styles/FrontpageCompetences.module.css';
import { attributes as categories } from '../content/competences_list.md';
import ShortBallsModule from './general_components/ShortBallsModule';


export default function FrontpageCompetences({lan}) {
  return (
    <div className={general.pageHeightBox}>
      <div className={styles.container + " " +styles.bgtriangle}>
        <h1 className={styles.heading}>{{"fi": "Osaamisemme", "en": "Our competences"}[lan]}</h1>
            <ShortBallsModule 
            categories={categories.category}
            lan = {lan}
          />
      </div>
    </div>
  );
}
