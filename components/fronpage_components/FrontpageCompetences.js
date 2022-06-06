import Link from 'next/link';
import general from './styles/FrontpageGeneral.module.css'
import styles from './styles/FrontpageCompetences.module.css';
import { attributes as categories } from '../../content/competences_list.md';
import FrontpageShortBallsModule from './FrontpageShortBallsModule';


export default function FrontpageCompetences({lan}) {
  const headingText = {"fi": "Osaamisemme", "en": "Our competences"}
  return (
    <div className={general.pageHeightBox}>
      <div className={styles.container + " " +styles.bgtriangle}>
        <h1 className={styles.heading}>{headingText[lan]}</h1>
            <FrontpageShortBallsModule 
            categories={categories.category}
            lan = {lan}
          />
      </div>
    </div>
  );
}
