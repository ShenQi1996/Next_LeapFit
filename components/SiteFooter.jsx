import React from 'react';
import CtaLink from './CtaLink';
import BrandLogo from './BrandLogo';
import { LEGAL_POLICIES } from '../lib/legal';
import { FOOTER_LINKS, createSectionHref } from '../lib/nav';
import { ROUTES, legalPath } from '../lib/routes';
import {
  BOOKING_SITES,
  BROOKLYN_EMAIL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  COPYRIGHT_YEAR,
  FOOTER_DISCLAIMERS,
  SERVICE_AREA,
  SITE_NAME,
  TAGLINE,
  mailto,
} from '../lib/site';
import styles from '../styles/footer.module.scss';

const LEGAL_LINK_LABELS = {
  communications: 'Email & Texts',
};

const SiteFooter = ({ home = false }) => {
  const section = createSectionHref(home);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <div className={styles.brandRow}>
            <BrandLogo className={styles.footerLogo} alt="" />
            <div>
              <p className={styles.brandName}>{SITE_NAME}</p>
              <p className={styles.tagline}>{TAGLINE}</p>
            </div>
          </div>
          <p className={styles.summary}>
            Qualitative respiratory fit testing for individuals, schools, and workplaces in
            Manhattan, Brooklyn, and New York pop-up locations. Every test includes a QR e-card.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className={styles.footerHeading}>Explore</h2>
          <ul className={styles.linkList}>
            {FOOTER_LINKS.map((link) => {
              const href = link.kind === 'section' ? section(link.hash) : link.href;
              return (
                <li key={link.label}>
                  <CtaLink href={href} external={link.kind === 'external'}>
                    {link.label}
                  </CtaLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div>
          <h2 className={styles.footerHeading}>Book & contact</h2>
          <ul className={styles.linkList}>
            {BOOKING_SITES.map((site) => (
              <li key={site.id}>
                <CtaLink href={site.calendly} external>
                  {site.scheduleLabel}
                </CtaLink>
              </li>
            ))}
            <li>
              <a href={mailto(CONTACT_EMAIL)}>{CONTACT_EMAIL}</a>
            </li>
            <li>
              <a href={mailto(BROOKLYN_EMAIL)}>{BROOKLYN_EMAIL}</a>
            </li>
            <li>
              <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a>
            </li>
            <li>
              <p>{SERVICE_AREA}</p>
            </li>
          </ul>
        </div>

        <nav aria-label="Legal policies">
          <h2 className={styles.footerHeading}>
            <CtaLink href={ROUTES.legal}>Legal policies</CtaLink>
          </h2>
          <ul className={styles.legalGrid}>
            {LEGAL_POLICIES.map((policy) => (
              <li key={policy.slug}>
                <CtaLink href={legalPath(policy.slug)}>
                  {LEGAL_LINK_LABELS[policy.slug] || policy.navLabel}
                </CtaLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.footerBottom}>
        <ul className={styles.disclaimers}>
          {FOOTER_DISCLAIMERS.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
        <p>&copy; {COPYRIGHT_YEAR} {SITE_NAME}</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
