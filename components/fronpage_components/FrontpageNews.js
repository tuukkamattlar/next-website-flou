import Link from 'next/link';
import FrontpageBlogBoxes from './FrontpageBlogBoxes.js';
import general from './styles/FrontpageGeneral.module.css'
import news from './styles/FrontpageCompetences.module.css';


export default function FrontpageNews({lan}) {
  return (
    <div className={general.pageHeightBox}>
        <div className={news.containerNews}>
          <h1 className={news.heading}>{{"fi": "Tuoreimpia kuulumisia", "en": "Latest news"}[lan]}</h1>
          <FrontpageBlogBoxes lan={lan} maxLen={4} />
        </div>
    </div>
  );
}
