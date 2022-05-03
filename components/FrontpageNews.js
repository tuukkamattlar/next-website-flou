import Link from 'next/link';
import BlogBoxes from './BlogBoxes';
import general from '@components/styles/FrontpageGeneral.module.css'
import styles from './styles/FrontpageCompetences.module.css';


export default function FrontpageNews({lan}) {
  return (
    <div className={general.pageHeightBox}>
        <div className={styles.container}>
        <h1 className={styles.heading}>{{"fi": "Tuoreimpia kuulumisia", "en": "Latest news"}[lan]}</h1>
        <BlogBoxes lan={lan} maxLen={4} />
        </div>
    </div>
  );
}
