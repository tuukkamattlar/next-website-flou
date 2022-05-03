import blogBoxes from './styles/BlogBox.module.css'
import Link from 'next/link'


export default function BlogBox({ item, lan }) {
  // TODO: editoitavaa on
  return (
        <Link href={'/blogi/'+item.url}>
          <div className={blogBoxes.box}>
            <div 
              className={blogBoxes.bgimg}
              style={{
                  backgroundImage: "url(/"+item.img+")",
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: "cover",
                  }}
              >
            </div>
            <div className={blogBoxes.textLayer}>
              <h2 className={blogBoxes.title} >
                  {item.title[lan]}
                </h2>
                <p className={blogBoxes.mainText}>
                    {item.short[lan]}
                </p>
            </div>
          </div>
        </Link>

  )
}
