import React from 'react';
import BrandLogo from './BrandLogo';
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
import styles from '../pages/style/index.module.scss';

const SiteFooter = ({ home = false, onSampleEcard }) => {
  const section = (hash) => (home ? hash : `/${hash}`);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <BrandLogo className={styles.footerLogo} />
          <div>
            <h3>Secure Fit LLC</h3>
            <p>Precision in every breath</p>
          </div>
        </div>
        <ul className={styles.footerNav}>
          <li><a href={section('#services')}>Our Services</a></li>
          <li><a href="/contact">Contact</a></li>
          {onSampleEcard ? (
            <li>
              <a
                href="#sample-ecard"
                onClick={(event) => {
                  event.preventDefault();
                  onSampleEcard();
                }}
              >
                Sample e-card
              </a>
            </li>
          ) : null}
          <li>
            <a href={RESEND_ECARD_URL} target="_blank" rel="noopener noreferrer">
              Resend e-card
            </a>
          </li>
          <li><a href="/legal">Legal policies</a></li>
        </ul>
        <div className={styles.footerContact}>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <a href={`mailto:${BROOKLYN_EMAIL}`}>Brooklyn: {BROOKLYN_EMAIL}</a>
          <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a>
          <p>{SERVICE_AREA}</p>
          <a href={MANHATTAN_CALENDLY} target="_blank" rel="noopener noreferrer">Schedule Manhattan</a>
          <a href={BROOKLYN_CALENDLY} target="_blank" rel="noopener noreferrer">Schedule Brooklyn</a>
        </div>
      </div>
      <div className={styles.footerLegal}>
        <p className={styles.footerLegalTitle}>Legal</p>
        <ul>
          <li>
            <a href="/legal/service">Service</a>
            {' · '}
            <a href="/legal/booking">Booking</a>
            {' · '}
            <a href="/legal/terms">Terms</a>
            {' · '}
            <a href="/legal/privacy">Privacy</a>
            {' · '}
            <a href="/legal/cookies">Cookies</a>
            {' · '}
            <a href="/legal/records">Records</a>
            {' · '}
            <a href="/legal/onsite">On-site</a>
            {' · '}
            <a href="/legal/communications">Email and texts</a>
            {' · '}
            <a href="/legal/accessibility">Accessibility</a>
            {' · '}
            <a href="/legal/reviews">Reviews</a>
          </li>
          <li>
            Fit testing follows OSHA 29 CFR 1910.134 Appendix A protocols. A pass applies only to the listed respirator.
            A next-test date is not a guarantee of protection until then. Three years of record storage is not a three-year testing interval.
          </li>
          <li>A fit-test record is not a medical clearance. The employer remains responsible for its respiratory-protection program.</li>
          <li>The sample e-card is for demonstration only and is not a valid fit-test record.</li>
        </ul>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Secure Fit LLC. People protected. Healthier tomorrows.</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
