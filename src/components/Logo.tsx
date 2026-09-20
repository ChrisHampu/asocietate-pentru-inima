import { Link } from 'react-router-dom'
import logoFull from '../assets/logo-full.png'
import { site } from '../site-data'
import styles from './Logo.module.css'

export function Logo() {
  return (
    <Link to="/" className={styles.logo} aria-label={`${site.name} — pagina principală`}>
      <img className={styles.image} src={logoFull} alt={site.name} />
    </Link>
  )
}
