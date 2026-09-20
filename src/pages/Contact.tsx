import { preventSubmit } from '../forms'
import { orPending, site } from '../site-data'
import styles from '../styles/page.module.css'

export default function Contact() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.narrow}>
            <p className={styles.eyebrow}>Contact</p>
            <h1 className={styles.title}>Suntem aici să te ascultăm.</h1>
            <p className={styles.lead}>
              Ai o întrebare, vrei să ne semnalezi o situație în care este
              nevoie de sprijin sau îți dorești să te implici? Scrie-ne. Ne-ar
              face plăcere să auzim de la tine.
            </p>
          </div>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={`${styles.split} ${styles.splitTop}`}>
          <div>
            <h2>Formular de contact</h2>
            <form className={styles.form} onSubmit={preventSubmit}>
              <div className={styles.field}>
                <label htmlFor="contact-name">Nume și prenume</label>
                <input id="contact-name" name="name" type="text" required />
              </div>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label htmlFor="contact-email">E-mail</label>
                  <input id="contact-email" name="email" type="email" required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-phone">Telefon (opțional)</label>
                  <input id="contact-phone" name="phone" type="tel" />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-subject">Subiect</label>
                <input id="contact-subject" name="subject" type="text" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-message">Mesaj</label>
                <textarea id="contact-message" name="message" required />
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

          <div>
            <h2>Contactează-ne</h2>
            <ul className={styles.infoList}>
              <li>
                <span className={styles.infoIcon} aria-hidden="true">
                  📞
                </span>
                <span>Telefon: {orPending(site.phone)}</span>
              </li>
              <li>
                <span className={styles.infoIcon} aria-hidden="true">
                  ✉️
                </span>
                <span>E-mail: {orPending(site.email)}</span>
              </li>
              <li>
                <span className={styles.infoIcon} aria-hidden="true">
                  📍
                </span>
                <span>{site.city}</span>
              </li>
              <li>
                <span className={styles.infoIcon} aria-hidden="true">
                  🕘
                </span>
                <span>{site.schedule}</span>
              </li>
            </ul>

            <div className={styles.dataBox}>
              <h3>Rămâi aproape de noi</h3>
              <p className={styles.text}>
                Urmărește activitatea asociației, proiectele noastre și
                poveștile oamenilor pe care îi sprijinim.
              </p>
              <p className={`${styles.text} ${styles.formNote}`}>
                Facebook · Instagram · TikTok — conturile vor fi anunțate în
                curând.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
