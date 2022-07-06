import FullWidthTextCSS from './styles/FullWidthText.module.css'
import Markdown from 'markdown-to-jsx';

export default function FullWidthTextModule({text, lan}) {
    return (
        <div className={FullWidthTextCSS.content}>
            <div className={FullWidthTextCSS.text}>
                <Markdown>{text[lan]}</Markdown>
            </div>
        </div>
    )
}