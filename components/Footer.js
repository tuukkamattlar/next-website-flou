import styles from './styles/Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer id="footer" class="container-fluid">
        <div className={styles['row-centered']}>
          <div className={styles['col-left'], styles['footerbox']}>
            <p>
              FLOU Oy
              <br />
              2733757-8
              <br />
              <a href="https://goo.gl/maps/BPSCtrcfcuUDTqcF6">
                Köydenpunojankatu 2a D,
                <br />
                00180 Helsinki
              </a>
              <br />
              tel. <a href="tel:+358503778123">+358 50 377 8123</a>
              <br />
              email. <a href="mailto:info@flou.io">info@flou.io</a>
            </p>
          </div>
          <div className={styles['col-centered'], styles['footerbox']}>
            <p>
              FLOU muualla:
              <br />
              <a href="https://twitter.com/flou_ltd">
                <img src="twitter.png" />
              </a>
              <a href="https://fi.linkedin.com/company/floultd">
                <img src="linkedin.png" />
              </a>
            </p>
          </div>
          <div class="col-right footerbox">
            <p>
              <a href="media.html">MEDIA</a>
              <br />
              <a href="ura.html">URA FLOUSSA</a>
              <br />
              <a href="tietosuojaseloste.pdf">TIETOSUOJA</a>
              <br />
              <a href="yhteystiedot.html">YHTEYSTIEDOT</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
