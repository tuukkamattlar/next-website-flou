import Link from 'next/link';

import styles from './styles/Footer.module.css';

export default function Footer() {



  return (
    <>
      <footer id="footer" className={styles.footer}>
        <div className={styles['row-centered']}>
          <div className={styles['col-left'] + ' ' + styles['footerbox']}>
            
          <img src="/img/logo-white-1.svg" height="50" style={{ cursor: 'pointer' }} className={styles['footerlogo'] } />
            <p>
             
              <a href="https://goo.gl/maps/BPSCtrcfcuUDTqcF6">
                Köydenpunojankatu 2a D,
                <br />
                00180 Helsinki
              </a>
            </p>
             <p>
              <a href="https://twitter.com/flou_ltd">
                <img src="/img/twitter-white.svg" className={styles.someicons} />
              </a>
              <a href="https://fi.linkedin.com/company/floultd">
                <img src="/img/linkedin.png" className={styles.someicons} />
              </a>
            </p>
             <p>
              <Link href={'/media'}>MEDIA</Link>
              <br />
              <Link href={'/jobs'}>TYÖPAIKAT</Link>
              <br />
              <Link href={'/yhteystiedot'}>YHTEYSTIEDOT</Link>
            </p>
          </div>
          <div className={styles['col-centered'] + ' ' + styles['footerbox']}>
           
          </div>
          <div className={styles['col-right'] + ' ' + styles['footerbox']}>
           
          </div>
        </div>
      </footer>
    </>
  );
}


