import { Link } from 'react-router-dom'
import logoFull from '../assets/logo-full.png'
import styles from './Logo.module.css'

export function Logo() {
  return (
    <Link to="/" className={styles.logo} aria-label="Association — home">
      <img className={styles.image} src={logoFull} alt="Association" />
    </Link>
  )
}
