// Components
import Markdown from 'markdown-to-jsx';
import GeneralHeader from '@components/GeneralHeader';
import OpenJobs from '@components/OpenJobs';
import FullWidthTextModule from "@components/general_components/FullWidthTextModule";

// Content
import { attributes } from '../content/job_description.md';

// Styles
import GeneralCSS from '@components/general_components/styles/General.module.css'

export default function Jobs({ lan }) {
  return (
    <div className={GeneralCSS.container}>
      <GeneralHeader title={attributes.title} img={attributes.headerIMG} lan={lan} description={''} />
        <FullWidthTextModule 
          text={attributes.description}
          lan = {lan}
        />
        <OpenJobs lan={lan}/>
        <div>
          <Markdown>{attributes.contact[lan]}</Markdown>
        </div>
    </div>
  );
}
