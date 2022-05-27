import { Icon } from '@blueprintjs/core';
import Link from 'next/link';

import NavBar from '@components/Navbar';
import HomeSvg from './HomeSvg';
import HomeAnimation from './HomeAnimation';
import styles from './styles/Header.module.css';

export default function HomeHeaderAndNav({ title, lan }) {
  const placeholderTitle = {
    fi: (<span>
          Tarjoamme palveluita <span className={styles.highlight}>liikennejärjestelmiin ja riskienhallintaan</span> liittyvän päätöksenteon tueksi
        </span>),
    en: (<span>
          We offer services for <span className={styles.highlight}>transportation planning management and risk assessment</span> 
        </span>)
  }
    

  const ourTeam = {fi: "Tutustu meidän tiimiin", en: "Say hi to our team"}
  const flightTaxes = {
                  fi: "Lue lentoveroselvityksen tuloksista", 
                  en: "Read about our assessment on Flight Taxes"
                }

  return (
    <>
      <div className={styles.header}>
        <HomeAnimation className={styles.svgLayer} src="/img/animation/animate-smaller-2.html?v2" />
        <NavBar />
        <div className={styles.titlewrapper}>
          <div className={styles.title}>
            <h1>{placeholderTitle[lan]}</h1>

            <Link href={'/tiimi'}>
              <h3>
                {ourTeam[lan]} <Icon icon="arrow-right" />
              </h3>
            </Link>

            <Link href={'/blogi/lentovero'}>
              <h3>
                {flightTaxes[lan]} <Icon icon="arrow-right" />
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
