import { PageHero } from '../components/PageHero'
import partnersImage from '../assets/partners.jpeg'
import { preventSubmit } from '../forms'
import { site } from '../site-data'
import styles from '../styles/page.module.css'

const contributions = [
  'Sponsorizări',
  'Susținerea unui proiect',
  'Donații de produse sau servicii',
  'Voluntariat corporativ',
  'Dezvoltarea unor inițiative comune',
]

export default function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Parteneri și sponsori"
        title="Împreună putem face mai mult."
        image={partnersImage}
        imageAlt="Reprezentanți ai unor companii și organizații care colaborează"
      >
        <p className={styles.lead}>
          Schimbările importante într-o comunitate nu se construiesc de un
          singur om sau de o singură organizație. Ele devin posibile atunci când
          oameni, companii, instituții și organizații aleg să își unească
          resursele, experiența și dorința de a face bine.
        </p>
        <p className={styles.text}>
          Ne dorim să construim parteneriate bazate pe încredere, transparență
          și obiective comune, prin care să putem răspunde unor nevoi reale ale
          comunității din {site.county}.
        </p>
      </PageHero>

      <section className={`container ${styles.section}`}>
        <div className={styles.narrow}>
          <h2>Cum ne putem susține reciproc</h2>
          <p className={styles.text}>
            Companiile și organizațiile care aleg să ne fie alături pot
            contribui prin:
          </p>
          <ul className={styles.bulletList}>
            {contributions.map((contribution) => (
              <li key={contribution}>{contribution}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.narrow}>
          <h2>Construim împreună.</h2>
          <p className={styles.text}>
            Fiecare parteneriat poate însemna mai mult decât un sprijin
            financiar. Poate însemna o idee transformată într-un proiect,
            resurse care ajung acolo unde este nevoie de ele și oameni care
            primesc o șansă în plus.
          </p>
          <p className={styles.text}>
            Suntem la început, vrem să construim parteneriate serioase și vă
            invităm să vă alăturați. Mulțumim tuturor celor care aleg să susțină
            comunitatea și să fie parte din schimbare.
          </p>
        </div>
      </section>

      <section className={styles.sectionSoft}>
        <div className={`container ${styles.narrow}`}>
          <h2>Hai să construim împreună →</h2>
          <p className={styles.text}>
            Dacă împărtășești valorile noastre și îți dorești să construim ceva
            bun pentru comunitate, ne-ar face plăcere să discutăm.
          </p>
          <form className={styles.form} onSubmit={preventSubmit}>
            <div className={styles.field}>
              <label htmlFor="partner-company">Numele companiei</label>
              <input id="partner-company" name="company" type="text" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="partner-contact">Persoană de contact</label>
              <input id="partner-contact" name="contact" type="text" required />
            </div>
            <div className={styles.formRow}>
              <div className={styles.field}>
                <label htmlFor="partner-email">E-mail</label>
                <input id="partner-email" name="email" type="email" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="partner-phone">Telefon</label>
                <input id="partner-phone" name="phone" type="tel" />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="partner-message">
                Cum ai dori să te implici?
              </label>
              <textarea id="partner-message" name="message" required />
            </div>
            <button type="submit" className="btn btn-primary">
              Trimite mesajul →
            </button>
            <p className={styles.formNote}>
              Formularul va fi activat în curând.
              {site.email
                ? ` Până atunci, ne poți scrie direct la ${site.email}.`
                : ' Adresa de e-mail de contact va fi publicată în curând.'}
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
