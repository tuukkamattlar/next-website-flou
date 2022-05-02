import TitleCSS from './styles/Title.module.css'

export default function TitleModule({title, lan}) {
    return (
        <div className={TitleCSS.container}>
            <h1>{title[lan]}</h1>
        </div>
    )
  }
  