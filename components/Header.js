import { Icon } from '@blueprintjs/core';
import Link from 'next/link';

import NavBar from '@components/Navbar';
import HomeSvg from './HomeSvg';
import HomeAnimation from './HomeAnimation';
import styles from './styles/Header.module.css';

import { attributes as HomeContent } from '../content/home.md';


export default function HomeHeaderAndNav({ lan }) {
  const headerText = HomeContent.title
  const linkItems = HomeContent.items
  const titleItem = {
    fi: (
        <span>
          {headerText.firstPart.fi+" "}
          <span className={styles.highlight}>
            {headerText.highlight.fi+" "}
          </span> 
          {headerText.lastPart.fi}
        </span>),
    en: (
        <span>
          {headerText.firstPart.en+" "} 
          <span className={styles.highlight}>
            {headerText.highlight.en+" "}
          </span> 
          {headerText.lastPart.en}
        </span>)
    }


  return (
    <>
      <div className={styles.header}>
        <HomeAnimation className={styles.svgLayer} src="/img/animation/animate-smaller-2.html?v2" />
        <NavBar />
        <div className={styles.titlewrapper}>
          <div className={styles.title}>
            <h1>{titleItem[lan]}</h1>
            { linkItems.map((value, key) => (
              <Link href={value.links.url} key={key}>
                <h3>
                  {value.links[lan]} <Icon icon="arrow-right" />
                </h3>
              </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
