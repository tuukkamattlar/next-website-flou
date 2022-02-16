import Link from "next/link"
import styles from './styles/Navbar.module.css'

export default function NavBar() {

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
                        <Link href={val.to}>{val.fi}</Link>
                    ) )}
                </nav>
            </div>
        </div>
    )
  }
  