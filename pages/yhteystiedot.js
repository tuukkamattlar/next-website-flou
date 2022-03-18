import { attributes } from '../content/contact.md';
import ContactInfo from '@components/ContactInfo';
import GeneralHeader from '@components/GeneralHeader';

export default function Contact({ lan }) {
    return(
        <div>
            <GeneralHeader title={attributes.title} img={attributes.headerIMG} lan={lan} description={''}/>
            <ContactInfo item={attributes} lan={lan}/>
        </div>
    )
  }
  