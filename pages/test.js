// Components
import GeneralHeader from "@components/GeneralHeader";
import FullWidthTextModule from "@components/general_components/FullWidthText";
import TextAndImageModule from "@components/general_components/TextAndImageModule";
import TitleModule from "@components/general_components/TitleModule";

// Content
import { attributes as flou} from '../content/flou.md';

// Styles
import GeneralCSS from '../components/general_components/styles/General.module.css'

export default function Test({lan}) {
  return (
    <>
      <GeneralHeader 
        title={flou.title} 
        img={flou.headerIMG} 
        lan={lan} 
      />
      <div className={GeneralCSS.container}>
        <TitleModule 
          title={flou.title} 
          lan={lan}
        />
        <TextAndImageModule 
          lan={lan}
          image={flou.headerIMG} 
          imagealt={'img alt'}
          text = {flou.description}
          hideIfMobile = {false}
        />
        <FullWidthTextModule 
          text={flou.description}
          lan = {lan}
        />
      </div>
    </>
  );
}