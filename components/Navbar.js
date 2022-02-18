import Link from "next/link"
import styles from './styles/Navbar.module.css'

export default function NavBar({setLan, lan}) {

    const pages = [
        {
            fi: 'FLOU',
            en: 'FLOU',
            to: '/'
        },
        {
            fi: 'Projektit',
            en: 'Projects',
            to: '/projektit'
        },
        {
            fi: 'Me',
            en: 'We',
            to: '/me'
        },
        {
            fi: 'Yhteystiedot',
            en: 'Contact',
            to: '/yhteystiedot'
        },
    ]

    return(
        <div className={styles.mainNav}>
            <div className={styles.name}>
                FLOU
            </div>
            <div className={styles.links}>
                <nav>
                    {pages.map((val, i) => (
                        <Link key={i} href={val.to}>{val[lan]}</Link>
                    ) )}
                    <button onClick={() => setLan('fi')}>FI</button>
                    <button onClick={() => setLan('en')}>EN</button>
                </nav>
            </div>
        </div>
    )
  }
  