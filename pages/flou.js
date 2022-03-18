import { attributes } from '../content/flou.md';
import HomeHeaderAndNav from '@components/Header';
import GeneralHeader from '@components/GeneralHeader';
import FlouPage from '@components/FlouPage';

export default function Flou({ lan }) {
    let {title, headerIMG, description, bodyIMG} = attributes
    return(
        <div>
            <GeneralHeader title={title} img={headerIMG} lan={lan} description={''}/>
            <FlouPage item={attributes} lan={lan}/>
        </div>
    )
  }
  