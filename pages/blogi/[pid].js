import { useRouter } from 'next/router'
import { attributes } from '../../content/blogs.md';
import { attributesTeam } from '../../content/tiimi.md';
import Link from 'next/link'
import GeneralHeader from '@components/GeneralHeader'
import { useEffect, useState } from 'react';
import GetBlogTeam from '@components/BlogTeam';


export default function SingleBlog({ lan }) {
    const [loading, setLoading] = useState(true)
    const [blogItem, setBlogItem] = useState({})
    const router = useRouter()
    const { pid } = router.query
    let { blogs } = attributes;
    function filterBlog(){
        for (let i = 0; i < blogs.length; i++) {
            if(blogs[i].url === pid){
                setBlogItem(blogs[i])
                setLoading(false)
                return(0)
            }
        }
    }
    useEffect(()=> {
        filterBlog()
        
    })
    return(
        <div className='powder'>
            { 
            loading
            ? 
            <div>
                Loading or not found
            </div>
            :
            <>
                <GeneralHeader title={blogItem.title} img={blogItem.img} lan={lan} description={blogItem.title}/>
                <Link href='/blogi'><a>Takaisin</a></Link>
                <h2>TODO content</h2>
                <p>
                    {blogItem.long[lan]}
                </p>
            </>
            }
        </div>
    )
}
