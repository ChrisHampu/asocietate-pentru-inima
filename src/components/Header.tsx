import { NavLink } from 'react-router-dom'
import { navItems } from '../nav-items'
import { Logo } from './Logo'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Logo />
        <nav aria-label="Navigare principală">
          <ul className={styles.navList}>
            {navItems.map((item) => {
              const isDonate = item.path === '/donate'
              return (
                <li
                  key={item.path}
                  className={item.children ? styles.itemWithMenu : undefined}
                >
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
                    {item.children ? (
                      <span className={styles.caret} aria-hidden="true">
                        ▾
                      </span>
                    ) : null}
                  </NavLink>
                  {item.children ? (
                    <ul className={styles.menu}>
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <NavLink
                            to={child.path}
                            className={({ isActive }) =>
                              isActive
                                ? `${styles.menuLink} ${styles.menuLinkActive}`
                                : styles.menuLink
                            }
                          >
                            <span className={styles.menuTitle}>{child.label}</span>
                            <span className={styles.menuPeriod}>{child.period}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
