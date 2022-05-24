import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Drawer, Icon, Menu, MenuDivider, MenuItem, Position } from '@blueprintjs/core';
import { PageContext } from 'pages/_app';
import { useContext, useState } from 'react';
import styles from './styles/Navbar.module.css';
import useWindowSize from '@components/hooks/useWindowSize'

export default function NavBar() {
  const { lan, setLan } = useContext(PageContext);
  const [drawerOpen, setDrawer] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  // imo vois hardcodaa nää tänne,
  // koska jos noit lähtee webapin kautta muuttaa ni nykysellää menee hommat rikki :DD

  //TODO structure
  const pages = [
    {
      fi: 'Yritys',
      en: 'Company',
      to: '/flou'
    },
    {
      fi: 'Osaaminen',
      en: 'Skills',
      to: '/osaaminen'
    },
    {
      fi: 'Blogi',
      en: 'Blog',
      to: '/blogi'
    },
    {
      fi: 'Tiimi',
      en: 'Team',
      to: '/tiimi'
    },
    {
      fi: 'Yhteystiedot',
      en: 'Contact',
      to: '/yhteystiedot'
    }
  ];

  const homepage = {
    fi: 'Etusivu',
    en: 'Homepage',
    to: '/'
  };

  const NextMenuItem = React.forwardRef(({ onClick, href, text, isActive }, ref) => {
    return (
      <MenuItem
        href={href}
        onClick={onClick}
        ref={ref}
        text={text}
        className={isActive ? styles.highlight : undefined}
      />
    );
  });

  if (typeof window === "undefined") { 
    /* we're on the server */ 
  }  else {
      let firstHandlerScroll = debounce(handleScroll, 20);
      window.addEventListener('scroll',firstHandlerScroll);
      var scroller = document.getElementById('__next');
      scroller.addEventListener('scroll',firstHandlerScroll);

      function handleScroll(){
        let scrollPosition = scroller.pageYOffset || scroller.scrollY || scroller.scrollTop ;
        let scrollPosition2 = window.pageYOffset || window.scrollY || window.scrollTop ;
        if(scrollPosition >=50 || scrollPosition2 >=50){
         /* add scrolled class to nav */
          var element = document.getElementsByClassName(styles.mainNav);
          element[0].classList.add(styles.scrolled);
         //console.log('more than 50 ' +element[0].classList);
        } else {
         console.log('less than 50');
          var element = document.getElementsByClassName(styles.mainNav);
          element[0].classList.remove(styles.scrolled);
        }
   }
   
   function debounce(fn, delay) {
      let timer = null;
      return function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
          fn();
        }, delay);
      };
    }

}

  return (
    <>
      {useWindowSize().width > 900 
    ? 
      <div className={styles.mainNav}>
        <div className={styles.logo}>
          <Link href={'/'}>
            <img src="/img/logo-white-1.svg"  style={{ cursor: 'pointer' }} />
          </Link>
        </div>
        <div className={styles.links}>
          <nav>
            {pages.map((val, i) => (
              <Link key={i} href={val.to} passHref>
                <a>{val[lan]}</a>
              </Link>
            ))}
            <a key="fi" onClick={() => setLan('fi')} disabled={lan === 'fi'}>FI</a>
            <a key="en" onClick={() => setLan('en')} disabled={lan === 'en'}>EN</a>
          </nav>
        </div>
      </div>
    : 
      <div className={styles.mainNav}>
        <div className={styles.mobileLogos}>
          <Link href={'/'}>
            <img src="/img/logo-white-1.svg" height="50" style={{ cursor: 'pointer' }} />
          </Link>
          <button  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <img src="/img/bars-waves.svg" className={styles.waves} />
          </button>
        </div>
        <div className={mobileMenuOpen ? styles.mobileVisible : styles.mobileHidden}>
          {pages.map((val, i) => (
                <Link key={i} href={val.to} passHref>
                  <a >{val[lan]}</a>
                </Link>
          ))}
          <a key="fi" onClick={() => {setLan('fi');setMobileMenuOpen(!mobileMenuOpen)}} disabled={lan === 'fi'} >FI</a>
          <a key="en" onClick={() => {setLan('en'); setMobileMenuOpen(!mobileMenuOpen)}} disabled={lan === 'en'} >EN</a>
        </div>
      </div>
    }
    </>
  );
}




{/**



      <Drawer
        isOpen={drawerOpen}
        title={
          <Link href={'/'}>
            <img src="/img/logo-white-1.svg" height="30" style={{ cursor: 'pointer' }} />
          </Link>
        }
        position={Position.TOP}
        onClose={() => setDrawer(!drawerOpen)}
        size="280px"
        className={`bp3-dark ${styles.drawer}`}
      >
        <div>
          <Menu className={`${styles.drawer}`}>
            <Link key={0} href={homepage.to} passHref>
              <NextMenuItem text={homepage[lan]} />
            </Link>
            {pages.map((val, i) => (
              <Link key={i} href={val.to} passHref>
                <NextMenuItem text={val[lan]} isActive={router.pathname.startsWith(val.to)} />
              </Link>
            ))}
            <MenuDivider title={'Kieli'} />
            <MenuItem key="fi" onClick={() => setLan('fi')} text="FI" disabled={lan === 'fi'} />
            <MenuItem key="en" onClick={() => setLan('en')} text="EN" disabled={lan === 'en'} />
          </Menu>
        </div>
      </Drawer>
      <div className={styles.mainNav}>
        <div className={styles.logo}>
          <Link href={'/'}>
            <img src="/img/logo-white-1.svg"  style={{ cursor: 'pointer' }} />
          </Link>
        </div>
        <div className={styles.links}>
          <nav>
            {pages.map((val, i) => (
              <Link key={i} href={val.to}>
                <a className={router.pathname.startsWith(val.to) ? styles.highlight : undefined}>
                  {val[lan]}
                </a>
              </Link>
            ))}
            <a onClick={() => setLan('fi')}>FI</a>
            <a onClick={() => setLan('en')}>EN</a>
          </nav>
        </div>
        <div className={styles.menubutton}>
          <Button onClick={() => setDrawer(!drawerOpen)} minimal>
            
            <img src="/img/bars-waves.svg" className={styles.waves} />
          </Button>
        </div>
      </div>
*/}