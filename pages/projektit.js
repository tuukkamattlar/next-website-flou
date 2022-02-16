import { attributes, react as HomeContent } from '../content/home.md';
import SmallRef from '@components/SmallRef';

export default function Projects({ title }) {
    let { k, items } = attributes;
    return(
        <div style={{}}>
            <h1>Projects</h1>
            <SmallRef items={items}/>
        </div>
    )
  }
  