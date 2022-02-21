import { attributes, react as HomeContent } from '../content/tiimi.md';
import Tiimi from '@components/Tiimi';

export default function Me({lan}) {
    let { title, persons } = attributes;
    return(
        <div>
            <h2>{lan}</h2>
            <Tiimi items={persons} lan={lan}/>
        </div>
    )
  }