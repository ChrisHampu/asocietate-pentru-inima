import { Link } from 'react-router-dom'
import heroImage from '../assets/hero-community.jpeg'
import valuesImage from '../assets/hearts-and-hands.jpeg'
import { site } from '../site-data'
import styles from './Home.module.css'

const focusAreas = [
  {
    title: 'Copii',
    color: 'green' as const,
    text: 'Sprijinim copiii și familiile care se confruntă cu dificultăți și construim oportunități care le oferă sprijin, siguranță și speranță.',
  },
  {
    title: 'Persoane vârstnice',
    color: 'gold' as const,
    text: 'Ne dorim ca persoanele vârstnice care au nevoie de ajutor să se simtă văzute, ascultate și sprijinite, dar mai ales să știe că nu sunt singure.',
  },
  {
    title: 'Persoane vulnerabile',
    color: 'purple' as const,
    text: 'Suntem alături de oamenii care trec prin perioade dificile, fie că se confruntă cu probleme de sănătate, dificultăți sociale sau alte situații care le afectează viața de zi cu zi.',
  },
]

const cardColorClasses = {
  green: styles.cardGreen,
  gold: styles.cardGold,
  purple: styles.cardPurple,
}

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>Asociație pentru comunitate · {site.county}</p>
          <h1>
            Împreună <span className="hl-blue">schimbăm vieți!</span>
          </h1>
          <p className={styles.lead}>
            Împreună construim o comunitate mai puternică. În județul Sibiu,
            suntem alături de oamenii care au nevoie de sprijin: copii,
            persoane vârstnice și persoane vulnerabile care se confruntă cu
            probleme de sănătate sau dificultăți sociale.
          </p>
          <p className={styles.lead}>
            Credem într-o comunitate în care fiecare om contează și în care
            ajutorul oferit la momentul potrivit poate schimba un destin.
          </p>
          <div className={styles.actions}>
            <Link to="/projects" className="btn btn-primary">
              Descoperă proiectele noastre
            </Link>
            <Link to="/get-involved" className="btn btn-outline">
              Implică-te
            </Link>
          </div>
        </div>
      </section>

      <section className="container">
        <img
          className={styles.heroBanner}
          src={heroImage}
          alt="Oameni din comunitate reuniți în jurul unei cauze comune"
        />
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.split}>
          <div>
            <h2>
              O singură inimă. O comunitate.{' '}
              <span className="hl-gold">Oamenii contează.</span>
            </h2>
            <p className={styles.bodyText}>
              Suntem {site.name}, o organizație dedicată oamenilor și
              comunității din județul Sibiu.
            </p>
            <p className={styles.bodyText}>
              Credem că o comunitate puternică se construiește atunci când
              oamenii aleg să fie alături unii de ceilalți. Prin implicare,
              solidaritate și responsabilitate, vrem să transformăm ajutorul în
              șanse reale, speranță și schimbări care contează.
            </p>
            <p className={styles.motto}>
              Ajutăm cu inima. Conducem cu integritate. Construim cu
              responsabilitate.
            </p>
            <div className={styles.actions}>
              <Link to="/about" className="btn btn-outline">
                Află povestea noastră →
              </Link>
            </div>
          </div>
          <img
            className={styles.valuesImage}
            src={valuesImage}
            alt="Mâini care se sprijină reciproc, alături de mesajul „Transformăm implicarea în fapte!”"
            loading="lazy"
          />
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>Pentru cine lucrăm</h2>
        <p className={styles.sectionLead}>
          Fiecare proiect pornește de la o nevoie reală și de la convingerea că,
          prin implicare și solidaritate, putem aduce o schimbare concretă în
          viața oamenilor.
        </p>
        <ul className={styles.cardGrid}>
          {focusAreas.map((area) => (
            <li
              key={area.title}
              className={`${styles.card} ${cardColorClasses[area.color]}`}
            >
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              <Link to="/projects" className={styles.cardLink}>
                Descoperă cum ne implicăm →
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2>Împreună putem face binele să ajungă mai departe.</h2>
          <p>
            Fiecare gest contează. Prin donația ta, ne ajuți să fim alături de
            copii, persoane vârstnice și oameni care trec prin momente dificile.
          </p>
          <Link to="/donate" className="btn btn-light">
            Donează acum
          </Link>
        </div>
      </section>
    </>
  )
}
