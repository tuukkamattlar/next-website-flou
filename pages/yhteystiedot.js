// Components
import GeneralHeader from "@components/GeneralHeader";
import TextAndImageModule from "@components/general_components/TextAndImageModule";
import TitleModule from "@components/general_components/TitleModule";
import ContactInfoLinks from '@components/ContactInfoLinks';
import SEO from '@components/metacomponents/SEO';

// Content
import { attributes as contact } from '../content/contact.md';
import { attributes as seoContent } from '../content/SEO/contact.md';

// Styles
import GeneralCSS from '@components/general_components/styles/General.module.css'




export default function Contact({ lan }) {
    console.log(contact)
    return(
        <div className='contactPage'>
            <SEO 
                title={'FLOU - '+contact.title[lan]} 
                OGimage={seoContent.OGPimg} 
                metadata={seoContent.metatags} 
                OGdata={seoContent.ogp} 
                keywords={seoContent.keywords}
            />
            <GeneralHeader title={contact.title} img={contact.headerIMG} lan={lan} description={''}/>
            <div className={GeneralCSS.container}>
                <TextAndImageModule 
                lan={lan}
                image={contact.fillIMG} 
                imagealt={'img alt'}
                text = {contact.bodyObject}
                hideIfMobile = {false}
                />
                <ContactInfoLinks item={contact} lan={lan}/>
            </div>
        </div>
    )
  }
  