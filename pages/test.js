// Components
import GeneralHeader from "@components/GeneralHeader";
import FullWidthTextModule from "@components/general_components/FullWidthTextModule";
import TextAndImageModule from "@components/general_components/TextAndImageModule";
import TitleModule from "@components/general_components/TitleModule";
import ShortBallsModule from "@components/general_components/ShortBallsModule";

// Content
import { attributes as flou} from '../content/flou.md';
import { attributes as categories} from '../content/competences_list.md';

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
        <ShortBallsModule 
          categories={categories.category}
          lan = {lan}
        />
      </div>
    </>
  );
}