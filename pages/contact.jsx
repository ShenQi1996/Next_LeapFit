import PageShell from '../components/PageShell';
import {
  BROOKLYN_CALENDLY,
  BROOKLYN_EMAIL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  MANHATTAN_CALENDLY,
  RESEND_ECARD_URL,
  SERVICE_AREA,
} from '../lib/site';
import homeStyles from './style/index.module.scss';
import styles from './style/legal.module.scss';

const ContactPage = () => (
  <PageShell
    current="contact"
    title="Contact Secure Fit LLC | Respiratory Fit Testing"
    description="Call or email Secure Fit LLC, schedule a Manhattan or Brooklyn appointment, or resend a lost e-card."
  >
    <section className={styles.hero}>
      <p className={styles.kicker}>Contact</p>
      <h1>How to reach Secure Fit LLC</h1>
      <p className={styles.lead}>
        Use phone or email for questions, Calendly for appointments, and the resend tool for a lost e-card.
        Our inbox and phone are not emergency services.
      </p>
    </section>

    <div className={styles.contactGrid}>
      <article className={styles.contactCard}>
        <h2>Call or email</h2>
        <p>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
        <p>
          <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a>
        </p>
        <p>Use these for questions, cancellations, records, accessibility requests, and complaints.</p>
      </article>
      <article className={styles.contactCard}>
        <h2>Service area</h2>
        <p>{SERVICE_AREA}</p>
        <p>Your booking confirmation identifies the actual testing location and provider for that appointment.</p>
      </article>
      <article className={styles.contactCard}>
        <h2>Schedule Manhattan</h2>
        <p>
          <a href={MANHATTAN_CALENDLY} target="_blank" rel="noopener noreferrer">
            Book a Manhattan appointment
          </a>
        </p>
        <p>$75 for one person and one selected respirator configuration.</p>
      </article>
      <article className={styles.contactCard}>
        <h2>Schedule Brooklyn</h2>
        <p>
          <a href={BROOKLYN_CALENDLY} target="_blank" rel="noopener noreferrer">
            Book a Brooklyn appointment
          </a>
        </p>
        <p>
          Brooklyn questions:{' '}
          <a href={`mailto:${BROOKLYN_EMAIL}`}>{BROOKLYN_EMAIL}</a>
        </p>
        <p>
          A linked booking page is not automatically the same legal provider. Check the confirmation
          for the entity, location, and contact details for that appointment.
        </p>
      </article>
      <article className={styles.contactCard}>
        <h2>Lost e-card</h2>
        <p>
          <a href={RESEND_ECARD_URL} target="_blank" rel="noopener noreferrer">
            Resend your most recent e-card
          </a>
        </p>
        <p>Use the name, date of birth, and email from your original fit test.</p>
      </article>
      <article className={styles.contactCard}>
        <h2>Group or on-site testing</h2>
        <p>
          Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> for a written quote.
        </p>
        <p>A request for a quote does not reserve a date or authorize charges.</p>
      </article>
    </div>

    <p className={styles.note}>
      Call 911 for an emergency. Do not email payment-card numbers, Social Security numbers, full
      medical questionnaires, diagnoses, or identification scans to the general inbox. Send only the
      clearance information reasonably needed to decide whether testing may proceed.
    </p>

    <div className={styles.actions}>
      <a className={homeStyles.ctaButton} href={CONTACT_PHONE_HREF}>
        Call {CONTACT_PHONE}
      </a>
      <a className={homeStyles.ctaButtonGhost} href={`mailto:${CONTACT_EMAIL}`}>
        Email Secure Fit LLC
      </a>
      <a className={homeStyles.ctaButtonGhost} href="/legal">
        Read legal policies
      </a>
    </div>
  </PageShell>
);

export default ContactPage;
