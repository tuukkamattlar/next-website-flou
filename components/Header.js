import { Icon } from '@blueprintjs/core';

import NavBar from '@components/Navbar';
import HomeSvg from './HomeSvg';
import styles from './styles/Header.module.css';

export default function HomeHeaderAndNav({ title }) {
  const placeholderTitle =
    'Tarjoamme palveluita liikennejärjestelmiin ja riskienhallintaan liittyvän päätöksenteon tueksi';

  return (
    <>
      <div className={styles.header}>
        <HomeSvg className={styles.svgLayer} src="/img/wave_white.svg" />
        <NavBar />

        {/* <div 
        className={styles.imgLayer}
        style={{
          backgroundImage: "url(/img/heading.jpg)",
          backgroundRepeat: 'no-repeat',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      </div> */}
        <div className={styles.titlewrapper}>
          <div className={styles.title}>
            <h1>{placeholderTitle}</h1>
            <h3>
              Tutustu asiakkaiden oppeihin <Icon color="white" icon="arrow-right" />
            </h3>
            <h3>
              Lue lentoveroselvityksen tuloksista <Icon color="white" icon="arrow-right" />
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
