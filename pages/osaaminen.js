import { attributes} from '../content/competences.md';

export default function Projects({ lan }) {
    let { title, headerIMG, description, items } = attributes;
    return(
        <div >
            <h1>{title[lan]}</h1>
            <a>Headerin kuva:</a>
            <img src={headerIMG} width={300}></img>
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