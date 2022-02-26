import { attributes} from '../content/competences.md';
import GeneralHeader from '@components/GeneralHeader';

export default function Projects({ lan }) {
    let { title, headerIMG, description, items } = attributes;
    return(
        <div >
            <GeneralHeader title={title} img={headerIMG} lan={lan} description={description}/>
            <h1>{title[lan]}</h1>
            <p>{description[lan]}</p>
            {items.map((v,k) => (
                <div key={k}>
                    <a>{v.title[lan]}</a>
                    <img src={v.skillIMG} width={300}></img>
                </div>
            ))}
        </div>
    )
  }

/* KOODIN HAUTAUSMAA



<SmallRef items={items}/>





*/