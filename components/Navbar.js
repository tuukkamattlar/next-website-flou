import React from 'react';
import Link from 'next/link';
import { Button, Drawer, Icon, Menu, MenuDivider, MenuItem, Position } from '@blueprintjs/core';
import { PageContext } from 'pages/_app';
import { useContext, useState } from 'react';
import styles from './styles/Navbar.module.css';

export default function NavBar() {
  const { lan, setLan } = useContext(PageContext);
  const [drawerOpen, setDrawer] = useState(false);

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

  const NextMenuItem = React.forwardRef(({ onClick, href, text }, ref) => {
    return <MenuItem href={href} onClick={onClick} ref={ref} text={text} />;
  });

  return (
    <>
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
                <NextMenuItem text={val[lan]} />
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
            <img src="/img/logo-white-1.svg" height="30" style={{ cursor: 'pointer' }} />
          </Link>
        </div>
        <div className={styles.links}>
          <nav>
            {pages.map((val, i) => (
              <Link key={i} href={val.to}>
                {val[lan]}
              </Link>
            ))}
            <a onClick={() => setLan('fi')}>FI</a>
            <a onClick={() => setLan('en')}>EN</a>
          </nav>
        </div>
        <div className={styles.menubutton}>
          <Button onClick={() => setDrawer(!drawerOpen)} minimal>
            <Icon icon="menu" color="white" />
          </Button>
        </div>
      </div>
    </>
  );
}
