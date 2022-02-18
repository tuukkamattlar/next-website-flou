import { attributes, react as HomeContent } from '../content/tiimi.md';
import Tiimi from '@components/Tiimi';

export default function Me() {
    let { title, persons } = attributes;
    return(
        <div>
            {title}
            <Tiimi items={persons}/>
        </div>
    )
  }
  