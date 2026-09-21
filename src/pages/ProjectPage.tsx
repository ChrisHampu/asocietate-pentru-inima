import { Link, Navigate, useParams } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { projects } from '../projects-data'
import styles from '../styles/page.module.css'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <>
      <PageHero
        eyebrow={`${project.kind} · ${project.period}`}
        title={project.title}
        image={project.image}
        imageAlt={project.imageAlt}
        shape="natural"
      >
        <p className={styles.lead}>{project.intro}</p>
      </PageHero>

      <section className={`container ${styles.section}`}>
        <div className={styles.narrow}>
          {project.body.map((paragraph) => (
            <p key={paragraph} className={styles.text}>
              {paragraph}
            </p>
          ))}
          <div className={styles.quote}>
            {project.closing.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className={styles.motto}>{project.motto}</p>
          <Link to="/projects" className={styles.backLink}>
            ← Toate proiectele
          </Link>
        </div>
      </section>

      <section className={styles.sectionSoft}>
        <div className={`container ${styles.narrow}`}>
          <h2>Fii alături de noi în acest {project.kind.toLowerCase()}</h2>
          <p className={styles.text}>
            Fiecare contribuție — o donație, timpul petrecut ca voluntar sau un
            parteneriat — se transformă în ajutor concret pentru oamenii din
            spatele acestui {project.kind.toLowerCase()}.
          </p>
          <div className={styles.actions}>
            <Link to="/donate" className="btn btn-primary">
              Susține acest proiect →
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
