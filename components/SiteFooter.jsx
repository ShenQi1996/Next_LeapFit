import React from 'react';
import Link from 'next/link';
import BrandLogo from './BrandLogo';
import ExternalLink from './ExternalLink';
import { LEGAL_POLICIES } from '../lib/legal';
import { createSectionHref } from '../lib/nav';
import {
  BROOKLYN_CALENDLY,
  BROOKLYN_EMAIL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  MANHATTAN_CALENDLY,
  RESEND_ECARD_URL,
  VERIFY_ECARD_URL,
  SERVICE_AREA,
} from '../lib/site';
import styles from '../styles/footer.module.scss';

const SiteFooter = ({ home = false, onSampleEcard }) => {
  const section = createSectionHref(home);

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
          <li><Link href="/contact">Contact</Link></li>
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
            <ExternalLink href={VERIFY_ECARD_URL}>Verify e-card</ExternalLink>
          </li>
          <li>
            <ExternalLink href={RESEND_ECARD_URL}>Resend e-card</ExternalLink>
          </li>
          <li><Link href="/legal">Legal policies</Link></li>
        </ul>
        <div className={styles.footerContact}>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <a href={`mailto:${BROOKLYN_EMAIL}`}>Brooklyn: {BROOKLYN_EMAIL}</a>
          <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a>
          <p>{SERVICE_AREA}</p>
          <ExternalLink href={MANHATTAN_CALENDLY}>Schedule Manhattan</ExternalLink>
          <ExternalLink href={BROOKLYN_CALENDLY}>Schedule Brooklyn</ExternalLink>
        </div>
      </div>
      <div className={styles.footerLegal}>
        <p className={styles.footerLegalTitle}>Legal</p>
        <ul>
          <li>
            {LEGAL_POLICIES.map((policy, index) => (
              <React.Fragment key={policy.slug}>
                {index > 0 ? ' · ' : null}
                <Link href={`/legal/${policy.slug}`}>{policy.navLabel}</Link>
              </React.Fragment>
            ))}
          </li>
          <li>
            Fit testing follows OSHA 29 CFR 1910.134 Appendix A protocols. A pass applies only to the listed respirator.
            A next-test date is not a guarantee of protection until then. Three years of record storage is not a three-year testing interval.
          </li>
          <li>A fit-test record is not a medical clearance. The employer remains responsible for its respiratory-protection program.</li>
          <li>The sample e-card is for demonstration only and is not a valid fit-test record. Scan a real card to verify.</li>
        </ul>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Secure Fit LLC. People protected. Healthier tomorrows.</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
