import { attributes } from '../content/blogs.md';
import GeneralHeader from '@components/GeneralHeader';
import BlogBox from '@components/BlogBox';

export default function Blogi({ lan }) {
    let { title, headerIMG, blogs } = attributes;
    return(
        <div className='powder'>
            <GeneralHeader title={title} img={headerIMG} lan={lan} description={''}/>
            <BlogBox items={blogs} lan={lan} />
        </div>
    )
  }
  