import { Link } from 'react-router-dom'
import { navItems } from '../nav-items'
import { Logo } from './Logo'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <Logo />
        <nav aria-label="Footer">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Association. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>
    </footer>
  )
}
