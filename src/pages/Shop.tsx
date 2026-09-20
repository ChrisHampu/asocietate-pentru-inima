import { Link } from 'react-router-dom'
import { site } from '../site-data'
import styles from '../styles/page.module.css'

const collections = [
  {
    title: 'Tricouri și hoodies',
    color: styles.cardPurple,
    message: '„Împreună schimbăm vieți”',
  },
  {
    title: 'Căni',
    color: styles.cardGreen,
    message: '„Binele se construiește împreună”',
  },
  {
    title: 'Produse cu motto-ul asociației',
    color: styles.cardGold,
    message: '„O singură inimă. O comunitate. Oamenii contează.”',
  },
]

export default function Shop() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.narrow}>
            <p className={styles.eyebrow}>Shop · În curând</p>
            <h1 className={styles.title}>Poartă binele mai departe!</h1>
            <p className={styles.lead}>
              Fiecare produs spune o poveste și susține o cauză.
            </p>
            <p className={styles.text}>
              Pregătim ceva special: produse create pentru a purta mai departe
              mesajul nostru și pentru a susține proiectele comunității.
              Împreună, transformăm fiecare gest într-un bine care merge mai
              departe.
            </p>
          </div>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>Ce pregătim</h2>
        <p className={styles.sectionLead}>
          Mini-colecții pe care le lansăm pas cu pas, cu logo-ul asociației
          purtat discret.
        </p>
        <ul className={styles.cardGrid}>
          {collections.map((collection) => (
            <li
              key={collection.title}
              className={`${styles.card} ${collection.color}`}
            >
              <h3>{collection.title}</h3>
              <p className={styles.cardTag}>{collection.message}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.sectionSoft}>
        <div className={`container ${styles.narrow}`}>
          <h2>Până atunci, ne poți susține direct.</h2>
          <p className={styles.text}>
            Magazinul se deschide în curând. Până atunci, poți susține
            proiectele {site.nameGenitive} printr-o donație sau prin
            voluntariat.
          </p>
          <div className={styles.actions}>
            <Link to="/donate" className="btn btn-primary">
              Donează
            </Link>
            <Link to="/get-involved" className="btn btn-outline">
              Implică-te
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
