import { NavLink } from 'react-router-dom'
import { navItems } from '../nav-items'
import { Logo } from './Logo'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Logo />
        <nav aria-label="Primary">
          <ul className={styles.navList}>
            {navItems.map((item) => {
              const isDonate = item.path === '/donate'
              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) => {
                      const base = isDonate ? styles.donate : styles.link
                      return isActive && !isDonate
                        ? `${base} ${styles.linkActive}`
                        : base
                    }}
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
