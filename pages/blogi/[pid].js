import { useRouter } from 'next/router'
import { attributes } from '../../content/blogs.md';
import { attributesTeam } from '../../content/tiimi.md';
import BlogView from '@components/BlogView';
import Link from 'next/link'
import GeneralHeader from '@components/GeneralHeader'
import { useEffect, useState } from 'react';
import GetBlogTeam from '@components/BlogTeam';
import Markdown from 'markdown-to-jsx';
import React from 'react';
import SEO from '@components/metacomponents/SEO';
import { attributes as seoContent } from '../../content/SEO/competences.md';


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
    const OGdata = [
        {
            property: "og:title",
            content: seoContent.OGPtitle
        }
    ]

    return(
        <>
            <div className='powder'>
                { 
                loading
                ? 
                <div>
                    Loading or not found
                </div>
                :
                <>
                    <SEO 
                        title={'FLOU - '+blogItem.title[lan]} 
                        OGimage={blogItem.img} 
                        metadata={seoContent.metatags} 
                        OGdata={OGdata} 
                        keywords={seoContent.keywords}
                    />
                    <GeneralHeader title={blogItem.title} img={blogItem.img} lan={lan} description={''}/>
                    <BlogView blogItem={blogItem} lan={lan}/>
                </>
                }
            </div>
        </>
    )
}
