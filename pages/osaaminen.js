import { attributes} from '../content/competences.md';
import GeneralHeader from '@components/GeneralHeader';
import SkillCategoryBox from '@components/SkillCategoryBox';

export default function Projects({ lan }) {
    let { title, headerIMG, description, items } = attributes;
    const areas = [{
        title: "Vaikutusten arviointi",
        description: "Taloudelliset arviot jne"
    },{
        title: "Strategia",
        description: "Taloudelliset arviot jne"
    },{
        title: "Riskienhallinta",
        description: "Taloudelliset arviot jne"
    }]
    return(
        <div className='powder'>
            <GeneralHeader title={title} img={headerIMG} lan={lan} description={description}/>
            <div className="min-height-page">
            <SkillCategoryBox items={items} lan={lan}/>
            </div>
        </div>
    )
  }
/* KOODIN HAUTAUSMAA


<SmallRef items={items}/>
            <h1>{title[lan]}</h1>
            <p>{description[lan]}</p>
            {items.map((v,k) => (
                <div key={k}>
                    <a>{v.title[lan]}</a>
                    <img src={v.skillIMG} width={300}></img>
                </div>
            ))}




*/