import { Link } from 'react-router-dom'
import { navItems } from '../nav-items'
import { orPending, site } from '../site-data'
import { Logo } from './Logo'
import { Motto } from './Motto'
import styles from './Footer.module.css'

const legalItems = [
  'Termeni și condiții',
  'Politica de confidențialitate',
  'Politica privind cookie-urile',
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.motto}>
            <Motto />
          </p>
        </div>

        <nav aria-label="Navigare footer">
          <h2 className={styles.columnTitle}>Navigare</h2>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={styles.columnTitle}>Contact</h2>
          <ul className={styles.contactList}>
            <li>{site.city}</li>
            <li>E-mail: {orPending(site.email)}</li>
            <li>Telefon: {orPending(site.phone)}</li>
            <li>CIF: {orPending(site.cif)}</li>
          </ul>
        </div>

        <div>
          <h2 className={styles.columnTitle}>Informații legale</h2>
          <ul className={styles.contactList}>
            {legalItems.map((item) => (
              <li key={item}>{item} — în curând</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  )
}
