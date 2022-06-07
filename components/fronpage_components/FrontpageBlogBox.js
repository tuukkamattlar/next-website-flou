import blogBoxes from './styles/FrontpageBlogBox.module.css'
import Link from 'next/link'


export default function FrontpageBlogBox({ item, lan }) {
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

                  <p className={blogBoxes.devdate}>12.5.2022</p>
            <p className={blogBoxes.realdate}>{item.date}</p>
            {
              /**.date tosiaan on datetime-kenttä. 
               * Tohon voi heittää varmaan valmiin 
               * parserin tai voin muotoilla tosta 
               * oleelliset tiedot erikseen 
              */}
                
                <p className={blogBoxes.mainText}>
                    {item.short[lan]}
                </p>
                 <img src="img/arrow-waved.svg"  className={blogBoxes.arrow} />
            </div>
          </div>
        </Link>

  )
}
