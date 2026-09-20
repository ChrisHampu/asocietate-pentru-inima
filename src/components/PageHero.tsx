import type { ReactNode } from 'react'
import styles from '../styles/page.module.css'

interface PageHeroProps {
  eyebrow?: string
  title: ReactNode
  image: string
  imageAlt: string
  shape?: 'landscape' | 'portrait' | 'banner' | 'natural'
  children?: ReactNode
}

const shapeClasses = {
  landscape: '',
  portrait: styles.portrait,
  banner: styles.banner,
  natural: styles.natural,
}

export function PageHero({
  eyebrow,
  title,
  image,
  imageAlt,
  shape = 'landscape',
  children,
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>
        <div>
          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
          <h1 className={styles.title}>{title}</h1>
          {children}
        </div>
        <img
          className={`${styles.heroImage} ${shapeClasses[shape]}`}
          src={image}
          alt={imageAlt}
          loading="lazy"
        />
      </div>
    </section>
  )
}
