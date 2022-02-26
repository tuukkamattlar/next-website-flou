import { attributes } from '../content/tiimi.md';
import Tiimilista from '@components/Tiimilista';

export default function Tiimi({lan}) {
    let { title, headerIMG, persons } = attributes;
    return(
        <div>
            <h1>{title[lan]}</h1>
            <a>Headerin kuva:</a>
            <img src={headerIMG} width={300}></img>
            { persons.map((p,k) => (
                <div>
                    <a>{p.name}</a>
                    <a>{p.description[lan]}</a>
                    {p.skills.map((v, key) => (
                        <>
                            <a>Skill {key}: </a>
                            <a>{v[lan]}</a>
                        </>
                    ))}
                </div>
            ))}
            <Tiimilista items={persons} lan={lan}/>
        </div>
    )
  }