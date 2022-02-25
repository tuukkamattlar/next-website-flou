import { attributes, react as HomeContent } from '../content/home.md';
import SmallRef from '@components/SmallRef';

export default function Projects({ title, lan }) {
    let { k, items } = attributes;
    return(
        <div style={{}}>
            <h1>Projects {lan}</h1>
            <SmallRef items={items}/>
        </div>
    )
  }
  