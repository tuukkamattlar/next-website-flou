import styles from '../components/styles/Job.module.css';
import Markdown from 'markdown-to-jsx';
import { attributes } from '../content/job_description.md';
import GeneralHeader from '@components/GeneralHeader';
import OpenJobs from '@components/OpenJobs';

export default function Jobs({ lan }) {
  return (
    <div className="powder">
      <GeneralHeader title={attributes.title} img={attributes.headerIMG} lan={lan} description={''} />
      <div className={styles.container}>
        <Markdown >{attributes.description[lan]}</Markdown>
        <OpenJobs lan={lan}/>
        <div>
          <Markdown>{attributes.contact[lan]}</Markdown>
        </div>
        </div>
      </div>
  );
}
