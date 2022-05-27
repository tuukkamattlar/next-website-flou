import styles from './styles/Job.module.css'
import Link from 'next/link'
import Markdown from 'markdown-to-jsx';
import { attributes } from '../content/job_openings.md';

import GeneralCSS from '@components/general_components/styles/General.module.css'
import JobCSS from '@components/styles/Job.module.css'

export default function OpenJobs({lan }) {
  function timeStampper(input){
    if(!input){
      return('')
    }
    const y = input.split('-')[0]
    const m = input.split('-')[1]
    const d = input.split('-')[2].split('T')[0]
    const output = d+"."+m+"."+y
    return(output)
  }
  return (
      <div className={GeneralCSS.container}>
        {attributes.openings.map((value, key) => (
          <div key={key} className={JobCSS.jobListing}>
            <h3>{value.title[lan]}</h3>
            <h4>{timeStampper(value.timeperiod.starttime)} - {timeStampper(value.timeperiod.endtime)}</h4>
            <Markdown >{value.description[lan]}</Markdown>
            </div>
        ))}
      </div>
  )
}