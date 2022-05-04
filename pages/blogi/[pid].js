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
//import { attributes as seoContent } from '../../content/SEO/competences.md';

// Styles
import GeneralCSS from '@components/general_components/styles/General.module.css'


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
            content: attributes
        }
    ]

    return(
        <>
            <div className={GeneralCSS.container}>
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
                        OGimage={blogItem.seo.OGPimg.replace("](img/", "](../img/")} 
                        metadata={[{property: "description",content: blogItem.short['fi']}]}
                        OGdata={[]} 
                        keywords={blogItem.seo.keywords ? blogItem.seo.keywords : []}
                    />
                    <GeneralHeader title={blogItem.title} img={blogItem.img} lan={lan} description={''}/>
                    <BlogView blogItem={blogItem} lan={lan}/>
                </>
                }
            </div>
        </>
    )
}
