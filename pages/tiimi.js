import { attributes } from '../content/tiimi.md';
import Tiimilista from '@components/Tiimilista';
import GeneralHeader from '@components/GeneralHeader';

export default function Tiimi({lan}) {
    let { title, headerIMG, persons } = attributes;
    return(
        <div className="powder">
            <GeneralHeader title={title} img={headerIMG} lan={lan} description={''}/>
            <Tiimilista items={persons} lan={lan}/>
        </div>
    )
  }