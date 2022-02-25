import { attributes, react as HomeContent } from '../content/tiimi.md';
import Tiimilista from '@components/Tiimilista';

export default function Tiimi({lan}) {
    let { title, persons } = attributes;
    return(
        <div>
            <h2>{lan}</h2>
            <Tiimilista items={persons} lan={lan}/>
        </div>
    )
  }