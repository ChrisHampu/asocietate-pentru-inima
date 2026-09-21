import { site } from '../site-data'
import styles from './Motto.module.css'

const fragmentClasses = [
  styles.fragmentPrimary,
  styles.fragmentGreen,
  styles.fragmentGold,
]

export function Motto() {
  const fragments = site.motto
    .split('. ')
    .map((fragment, index, all) =>
      index === all.length - 1 ? fragment : `${fragment}.`,
    )

  return (
    <>
      {fragments.map((fragment, index) => (
        <span key={fragment} className={fragmentClasses[index % 3]}>
          {fragment}
          {index < fragments.length - 1 ? ' ' : null}
        </span>
      ))}
    </>
  )
}
