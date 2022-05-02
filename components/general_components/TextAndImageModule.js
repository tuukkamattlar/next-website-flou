import TextAndImageCSS from './styles/TextAndImage.module.css'
import Markdown from 'markdown-to-jsx';

export default function TextAndImageModule({image, imagealt, text, hideIfMobile, lan}) {
    return (
        <div className={TextAndImageCSS.container}>
            <div className={TextAndImageCSS.text}>
            <Markdown>{text[lan]}</Markdown>
            </div>
            <div className={ hideIfMobile ? TextAndImageCSS.imageHiddenMobile : TextAndImageCSS.imageShownMobile}>
                <img src={image} alt={imagealt}/>
            </div>
        </div>
    )
  }
  