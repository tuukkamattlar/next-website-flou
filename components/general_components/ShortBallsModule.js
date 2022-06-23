import ShortBallsCSS from './styles/ShortBalls.module.css'
import Link from 'next/link';

export default function ShortBallsModule({categories, lan}) {
    return (
            <div className={ShortBallsCSS.container + " " +ShortBallsCSS.bgtriangle}>
        <div className={ShortBallsCSS.content}>
            {categories.map((value, index) => (
                <Link href={'/osaaminen/'+value.url} key={index}>
                <div className={ShortBallsCSS.ball}>
                    <h3>{value.title[lan]}</h3>
                    <p>{value.short[lan]}</p>
                    <img src="img/arrow-waved.svg"  className={ShortBallsCSS.arrow} />
                </div>
                </Link>
            ))}
            </div> 
        </div>
    )
  }
  