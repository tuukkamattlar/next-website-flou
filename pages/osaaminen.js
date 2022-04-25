import { attributes} from '../content/competence_content.md';
import GeneralHeader from '@components/GeneralHeader';
import Competences from '@components/Competences';
import Markdown from 'markdown-to-jsx';
import { attributes as seoContent } from '../content/SEO/competences.md';
import SEO from '@components/metacomponents/SEO';


export default function Projects({ lan }) {
    let { title, headerIMG, description, items } = attributes;
    return(
        <>
            <SEO 
                title={'FLOU - '+title[lan]} 
                OGimage={seoContent.OGPimg} 
                metadata={seoContent.metatags} 
                OGdata={seoContent.ogp} 
                keywords={seoContent.keywords}
            />
            <div className='powder'>
                <GeneralHeader title={title} img={headerIMG} lan={lan} description={''}/>
                <div className="min-height-page">
                <Markdown className='generalContainer'>{description[lan]}</Markdown>
                <Competences lan={lan}/>
                </div>
            </div>
        </>
    )
  }
/* KOODIN HAUTAUSMAA

<SkillCategoryBox items={items} lan={lan}/>
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