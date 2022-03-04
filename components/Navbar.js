import Link from 'next/link';
import { Button, Drawer, Icon, Menu, MenuItem, Position } from '@blueprintjs/core';
import { PageContext } from 'pages/_app';
import { useContext, useState } from 'react';
import styles from './styles/Navbar.module.css';
import useWindowSize from './hooks/useWindowSize';

export default function NavBar() {
  const size = useWindowSize();
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
      en: 'skills',
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

  return (
    <>
      <Drawer
        isOpen={drawerOpen}
        title={'Menu'}
        position={Position.TOP}
        onClose={() => setDrawer(!drawerOpen)}
      >
        <div>
          <Menu>
            {pages.map((val, i) => (
              <MenuItem
                key={i}
                text={
                  <Link key={i} href={val.to}>
                    {val[lan]}
                  </Link>
                }
              />
            ))}
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
