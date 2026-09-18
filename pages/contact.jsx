import CtaLink from '../components/CtaLink';
import PageShell from '../components/PageShell';
import { ROUTES } from '../lib/routes';
import {
  BOOKING_SITES,
  BROOKLYN_EMAIL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  FIT_TEST_PRICE,
  RESEND_ECARD_URL,
  SERVICE_AREA,
  SITE_NAME,
  VERIFY_ECARD_URL,
  mailto,
  pageTitle,
} from '../lib/site';
import buttons from '../styles/buttons.module.scss';
import styles from '../styles/legal.module.scss';

const ContactPage = () => (
  <PageShell
    current="contact"
    title={pageTitle('Contact')}
    description={`Call or email ${SITE_NAME}, schedule a Manhattan or Brooklyn appointment, verify an e-card, or resend a lost card.`}
  >
    <section className={styles.hero}>
      <p className={styles.kicker}>Contact</p>
      <h1>How to reach {SITE_NAME}</h1>
      <p className={styles.lead}>
        Use phone or email for questions, Calendly for appointments, verify an issued e-card, or
        resend a lost one. Our inbox and phone are not emergency services.
      </p>
    </section>

    <div className={styles.contactGrid}>
      <article className={styles.contactCard}>
        <h2>Call or email</h2>
        <p>
          <a href={mailto(CONTACT_EMAIL)}>{CONTACT_EMAIL}</a>
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
      {BOOKING_SITES.map((site) => (
        <article className={styles.contactCard} key={site.id}>
          <h2>{site.scheduleLabel}</h2>
          <p>
            <CtaLink href={site.calendly} external>
              {site.bookLabel}
            </CtaLink>
          </p>
          {site.email ? (
            <p>
              {site.name} questions:{' '}
              <a href={mailto(site.email)}>{site.email}</a>
            </p>
          ) : (
            <p>{FIT_TEST_PRICE} for one person and one selected respirator configuration.</p>
          )}
          {site.id === 'brooklyn' ? (
            <p>
              A linked booking page is not automatically the same legal provider. Check the confirmation
              for the entity, location, and contact details for that appointment.
            </p>
          ) : null}
        </article>
      ))}
      <article className={styles.contactCard}>
        <h2>Verify an e-card</h2>
        <p>
          <CtaLink href={VERIFY_ECARD_URL} external>
            Scan or enter the confirm code
          </CtaLink>
        </p>
        <p>Confirms the record is on file. It does not display date of birth or email.</p>
      </article>
      <article className={styles.contactCard}>
        <h2>Lost e-card</h2>
        <p>
          <CtaLink href={RESEND_ECARD_URL} external>
            Resend your most recent e-card
          </CtaLink>
        </p>
        <p>Use the name, date of birth, and email from the original test.</p>
      </article>
      <article className={styles.contactCard}>
        <h2>Group or on-site testing</h2>
        <p>
          Email <a href={mailto(CONTACT_EMAIL)}>{CONTACT_EMAIL}</a> for a written quote.
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
      <a className={buttons.ctaButton} href={CONTACT_PHONE_HREF}>
        Call {CONTACT_PHONE}
      </a>
      <a className={buttons.ctaButtonGhost} href={mailto(CONTACT_EMAIL)}>
        Email {SITE_NAME}
      </a>
      <CtaLink className={buttons.ctaButtonGhost} href={ROUTES.legal}>
        Read legal policies
      </CtaLink>
    </div>
  </PageShell>
);

export default ContactPage;
