import { attributes } from '../content/flou.md';
import Header from '@components/Header';

export default function Flou({ lan }) {
    let {title, headerIMG, description, bodyIMG} = attributes

    // TODO KAIKKI VISUALISOINTI, MUTTA TOSSA ON ELEMENTIT
    return(
        <div>
            <h1>{title[lan]}</h1>
            <a>Headerin kuva:</a>
            <img src={headerIMG} width={300}></img>
            <p>{description[lan]}</p>
            <a>Lisäkuva:</a>
            <img src={bodyIMG} width={300}></img>
        </div>
    )
  }
  