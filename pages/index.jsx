import React, { useEffect } from 'react';
import CtaLink from '../components/CtaLink';
import ExternalLink from '../components/ExternalLink';
import PageShell from '../components/PageShell';
import SampleEcard from '../components/SampleEcard';
import { HERO_TRUST, HOME_REVIEWS, HOME_SERVICES, HOME_STEPS } from '../lib/home';
import { HOME_HASH } from '../lib/routes';
import {
  BOOKING_SITES,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  FIT_TEST_PRICE,
  RESEND_ECARD_URL,
  VERIFY_ECARD_URL,
  mailto,
} from '../lib/site';
import styles from '../styles/home.module.scss';

const ICONS = {
  mask: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 11h8M9 15h6M12 4c3.5 0 6 2.2 6 5.5V11c0 3.2-2 6.2-5 7.5v1.2c0 .7-.6 1.3-1.3 1.3h-1.4c-.7 0-1.3-.6-1.3-1.3V18.5C8 17.2 6 14.2 6 11V9.5C6 6.2 8.5 4 12 4Z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 5 6v6c0 4.2 2.8 7.8 7 8.8 4.2-1 7-4.6 7-8.8V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  school: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 10 9-5 9 5-9 5-9-5Z" />
      <path d="M7 12.2V17c0 .6 2.2 2 5 2s5-1.4 5-2v-4.8" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="8" r="2.2" />
      <circle cx="15.5" cy="8.5" r="1.8" />
      <path d="M4.5 18c.4-2.6 2.4-4 4.5-4s4.1 1.4 4.5 4" />
      <path d="M13 16.4c.6-1.5 2-2.4 3.5-2.4 1.6 0 3 .9 3.5 2.5" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  ),
  card: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </svg>
  ),
  verify: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="6" y="10" width="12" height="9" rx="2" />
      <path d="M8 10V8a4 4 0 0 1 8 0v2" />
    </svg>
  ),
};

const CAPABILITIES = [
  { icon: 'verify', label: 'Instant QR Authenticity' },
  { icon: 'lock', label: 'Privacy-First Lookup' },
  { icon: 'card', label: '3-Year Compliance Archive' },
];

const Icon = ({ name }) => ICONS[name] || null;

const HomePage = () => {
  useEffect(() => {
    const id = window.location.hash.replace('#', '');
    if (!id) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <PageShell home title={DEFAULT_TITLE} description={DEFAULT_DESCRIPTION}>
      <section className={styles.hero} id="top">
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>
              OSHA-Aligned Fit Testing across NYC and Pop-Up Locations
            </p>
            <h1>{FIT_TEST_PRICE} OSHA-Aligned Respiratory Fit Testing. QR E-Card Included.</h1>
            <p className={styles.heroLead}>
              Book in Manhattan, Brooklyn, or New York pop-up locations for individuals, schools,
              and workplaces. Receive a QR-verifiable e-card by email targeting delivery within two
              business days, kept on file for three years.
            </p>
            <div className={styles.heroButtons}>
              <a className={styles.heroPrimary} href={HOME_HASH.schedule}>
                Book a {FIT_TEST_PRICE} Fit Test
              </a>
              <ExternalLink className={styles.heroOutline} href={VERIFY_ECARD_URL}>
                Verify an E-Card
              </ExternalLink>
              <ExternalLink className={styles.heroQuiet} href={RESEND_ECARD_URL}>
                Lost your e-card?
              </ExternalLink>
            </div>
            <ul className={styles.trustBar}>
              {HERO_TRUST.map((item) => (
                <li key={item.label}>
                  <Icon name={item.icon} />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.heroPreview}>
            <SampleEcard variant="compact" />
          </div>
        </div>
      </section>

      <section className={styles.band} id="services">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Services</h2>
          <p className={styles.sectionLead}>
            Qualitative fit testing, QR e-cards, and pop-up locations throughout New York.
          </p>
        </div>
        <div className={styles.serviceGrid}>
          {HOME_SERVICES.map((service) => (
            <article className={styles.serviceCard} id={service.id} key={service.id}>
              <div className={styles.serviceIcon}>
                <Icon name={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <CtaLink href={service.href} external={service.external}>
                {service.linkLabel} →
              </CtaLink>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.band} id="how-it-works">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.sectionLead}>
            Book a test, complete it with a trained fit tester, and receive a QR e-card by email.
          </p>
        </div>
        <ol className={styles.processGrid}>
          {HOME_STEPS.map((step) => (
            <li className={styles.processStep} key={step.number}>
              <span className={styles.processNumber}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {step.number === '3' && (
                <ExternalLink className={styles.processLink} href={VERIFY_ECARD_URL}>
                  Verify an e-card
                </ExternalLink>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.band} id="why-pick-us">
        <div className={styles.whyGrid}>
          <article className={styles.priceCard} id="schedule">
            <p className={styles.priceAmount}>{FIT_TEST_PRICE}</p>
            <p className={styles.priceFees}>Flat pricing. No hidden fees.</p>
            <p className={styles.priceCopy}>
              Qualitative fit testing aligned with OSHA 29 CFR 1910.134 Appendix A by trained fit
              testers across Manhattan, Brooklyn, and NY pop-up locations for schools and workplaces.
              Fit testing only, not a medical clearance.
            </p>
            <div className={styles.scheduleActions}>
              {BOOKING_SITES.map((site) => (
                <ExternalLink key={site.id} className={styles.scheduleButton} href={site.calendly}>
                  {site.scheduleLabel}
                </ExternalLink>
              ))}
              <a className={styles.onsiteLink} href={mailto(CONTACT_EMAIL)}>
                On-site groups & schools
              </a>
            </div>
          </article>

          <article className={styles.portalCard}>
            <h2>E-Card & Verification Portal Showcase</h2>
            <p className={styles.portalLead}>
              Every test includes an emailed documented e-card targeting delivery within two business
              days, kept on file for up to three years and verifiable anytime by QR code or
              confirmation code.
            </p>
            <div className={styles.portalMain}>
              <SampleEcard variant="compact" />
              <div className={styles.portalTiles}>
                <ExternalLink className={styles.portalTile} href={VERIFY_ECARD_URL} id="verify-ecard">
                  <strong>Verify an E-Card</strong>
                  <span>Scan the QR or enter the confirmation code. No public name search.</span>
                </ExternalLink>
                <ExternalLink className={styles.portalTile} href={RESEND_ECARD_URL} id="lost-ecard">
                  <strong>Lost Your E-Card?</strong>
                  <span>Resend the card using the name, date of birth, and email from the original test.</span>
                </ExternalLink>
              </div>
            </div>
            <ul className={styles.capabilities}>
              {CAPABILITIES.map((item) => (
                <li key={item.label}>
                  <Icon name={item.icon} />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className={styles.band} id="sample-ecard" aria-label="Documented e-card">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Documented E-Card</h2>
          <p className={styles.sectionLead}>
            This sample is open so you can read every field. It is not a real fit-test record.
          </p>
        </div>
        <SampleEcard />
      </section>

      <section className={styles.band} id="reviews">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What people say</h2>
        </div>
        <div className={styles.reviewGrid}>
          {HOME_REVIEWS.map((review) => (
            <blockquote className={styles.reviewCard} key={review.author}>
              <span className={styles.reviewMark} aria-hidden="true">“</span>
              <p>{review.text}</p>
              <cite>{review.author}</cite>
            </blockquote>
          ))}
        </div>
        <aside className={styles.inquiry}>
          <div>
            <h3>Group and school fit testing</h3>
            <p>
              OSHA-aligned qualitative testing for schools and workplaces. Fit testing only, not a
              medical clearance.
            </p>
          </div>
          <div className={styles.inquiryLinks}>
            <a href={mailto(CONTACT_EMAIL)}>{CONTACT_EMAIL}</a>
            <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a>
          </div>
        </aside>
      </section>
    </PageShell>
  );
};

export default HomePage;
