import { Link } from 'react-router-dom'
import styles from './Logo.module.css'

export function Logo() {
  return (
    <Link to="/" className={styles.logo} aria-label="Association — home">
      <svg
        className={styles.mark}
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="12.5" cy="16" r="8.5" fill="#63ba49" />
        <circle
          cx="21"
          cy="16"
          r="8.5"
          fill="none"
          stroke="#d8ac53"
          strokeWidth="3"
        />
      </svg>
      <span className={styles.text}>Association</span>
    </Link>
  )
}
