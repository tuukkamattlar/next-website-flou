import { attributes } from '../content/contact.md';
import GeneralHeader from '@components/GeneralHeader';

export default function Contact({ lan }) {
    let {title, headerIMG, bodyObject, fillIMG} = attributes
    return(
        <div>
            <GeneralHeader title={title} img={headerIMG} lan={lan} description={''}/>
            <h1>{title[lan]}</h1>
            <img src={headerIMG} width={300}></img>
            <p>{bodyObject[lan]}</p>
            <img src={fillIMG} width={300}></img>
        </div>
    )
  }
  