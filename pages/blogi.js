import { attributes } from '../content/blogs.md';
import GeneralHeader from '@components/GeneralHeader';
import BlogBox from '@components/BlogBox';

export default function Blogi({ lan }) {
    let { title, description, headerIMG, blogs } = attributes;
    return(
        <div className='powder'>
            <GeneralHeader title={attributes.title} img={attributes.headerIMG} lan={lan}/>
            <BlogBox lan={lan} />
        </div>
    )
  }
  