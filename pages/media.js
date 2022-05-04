
import GeneralHeader from '@components/GeneralHeader';

// content
import { attributes } from '../content/media.md';

// Styles
import GeneralCSS from '@components/general_components/styles/General.module.css'
import styles from '../components/styles/Media.module.css';

export default function Media({ lan }) {
  let { title, headerIMG, description, items } = attributes;
  return (
    <div className={GeneralCSS.container}>
      <GeneralHeader title={title} img={headerIMG} lan={lan} description={description} />
      <div className={styles.frame}>
        <div className={styles.content}>
          <div className={`${styles.media} ${styles.black}`}>
            <h1>Logo black</h1>
            <a href="/img/media/logo-black-1.svg" download="logo_black">
              <img src="/img/media/logo-black-1.svg" />
            </a>
            <br />
            <a href="/img/media/logo-black-2.svg" download>
              <img src="/img/media/logo-black-2.svg" />
            </a>
            <br />
            <a href="/img/media/logo-black-3.svg" download>
              <img src="/img/media/logo-black-3.svg" />
            </a>
            <br />
          </div>
          <div className={`${styles.media} ${styles.plum}`}>
            <h1>Logo plum</h1>
            <a href="/img/media/logo-plum-1.svg">
              <img src="/img/media/logo-plum-1.svg" />
            </a>
            <br />
            <a href="/img/media/logo-plum-2.svg">
              <img src="/img/media/logo-plum-2.svg" />
            </a>
            <br />
            <a href="/img/media/logo-plum-3.svg">
              <img src="/img/media/logo-plum-3.svg" />
            </a>
            <br />
          </div>
          <div className={`${styles.media} ${styles.powder}`}>
            <h1>Logo powder</h1>
            <a href="/img/media/logo-powder-1.svg">
              <img src="/img/media/logo-powder-1.svg" />
            </a>
            <br />
            <a href="/img/media/logo-powder-2.svg">
              <img src="/img/media/logo-powder-2.svg" />
            </a>
            <br />
            <a href="/img/media/logo-powder-3.svg">
              <img src="/img/media/logo-powder-3.svg" />
            </a>
            <br />
          </div>
          <div className={`${styles.media} ${styles.white}`}>
            <h1>Logo white</h1>
            <a href="/img/media/logo-white-1.svg">
              <img src="/img/media/logo-white-1.svg" />
            </a>
            <br />
            <a href="/img/media/logo-white-2.svg">
              <img src="/img/media/logo-white-2.svg" />
            </a>
            <br />
            <a href="/img/media/logo-white-3.svg">
              <img src="/img/media/logo-white-3.svg" />
            </a>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
