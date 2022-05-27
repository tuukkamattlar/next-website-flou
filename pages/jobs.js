// Components
import Markdown from 'markdown-to-jsx';
import GeneralHeader from '@components/GeneralHeader';
import OpenJobs from '@components/OpenJobs';
import FullWidthTextModule from "@components/general_components/FullWidthTextModule";

// Content
import { attributes } from '../content/job_description.md';

// Styles
import GeneralCSS from '@components/general_components/styles/General.module.css'
import JobCSS from '@components/styles/Job.module.css'

export default function Jobs({ lan }) {
  return (
    <div className='jobPage'>
      <GeneralHeader title={attributes.title} img={attributes.headerIMG} lan={lan} description={''} />
      <div className={GeneralCSS.container}>
        <FullWidthTextModule 
          text={attributes.description}
          lan = {lan}
        />
        <OpenJobs lan={lan}/>
        <div className={JobCSS.contact}>
          <Markdown>{attributes.contact[lan]}</Markdown>
        </div>
      </div>
    </div>
  );
}
