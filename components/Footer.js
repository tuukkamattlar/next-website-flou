import Link from 'next/link';

import styles from './styles/Footer.module.css';

export default function Footer() {



  return (
    <>
      <footer id="footer" className={styles.footer}>
        <div className={styles['row-centered']}>
          <div className={styles['col-left'] + ' ' + styles['footerbox']}>
            <p>
              FLOU
              <br />
              <a href="https://goo.gl/maps/BPSCtrcfcuUDTqcF6">
                Köydenpunojankatu 2a D,
                <br />
                00180 Helsinki
              </a>
            </p>
          </div>
          <div className={styles['col-centered'] + ' ' + styles['footerbox']}>
            <p>
              <a href="https://twitter.com/flou_ltd">
                <img src="/img/twitter-white.svg" />
              </a>
              <a href="https://fi.linkedin.com/company/floultd">
                <img src="/img/linkedin.png" />
              </a>
            </p>
          </div>
          <div className={styles['col-right'] + ' ' + styles['footerbox']}>
            <p>
              <Link href={'/media'}>MEDIA</Link>
              <br />
              <Link href={'/jobs'}>TYÖPAIKAT</Link>
              <br />
              <Link href={'/yhteystiedot'}>YHTEYSTIEDOT</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}


