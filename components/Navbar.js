import Link from 'next/link';
import { PageContext } from 'pages/_app';
import { useContext } from 'react';
import styles from './styles/Navbar.module.css';

export default function NavBar() {
  const { lan, setLan } = useContext(PageContext);

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
    <div className={styles.mainNav}>
      <div className={styles.logo}>
        <Link href={'/'}>
          <img src="/img/logo-white-1.svg" height="30" />
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
    </div>
  );
}
