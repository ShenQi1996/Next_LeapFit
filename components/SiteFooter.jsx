import React from 'react';
import CtaLink from './CtaLink';
import BrandLogo from './BrandLogo';
import { LEGAL_POLICIES } from '../lib/legal';
import { FOOTER_LINKS, createSectionHref } from '../lib/nav';
import { HOME_HASH, legalPath } from '../lib/routes';
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

const SiteFooter = ({ home = false, onSampleEcard }) => {
  const section = createSectionHref(home);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <BrandLogo className={styles.footerLogo} />
          <div>
            <h3>{SITE_NAME}</h3>
            <p>{TAGLINE}</p>
          </div>
        </div>
        <ul className={styles.footerNav}>
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
          {onSampleEcard ? (
            <li>
              <a
                href={HOME_HASH.sampleEcard}
                onClick={(event) => {
                  event.preventDefault();
                  onSampleEcard();
                }}
              >
                Sample e-card
              </a>
            </li>
          ) : null}
        </ul>
        <div className={styles.footerContact}>
          <a href={mailto(CONTACT_EMAIL)}>{CONTACT_EMAIL}</a>
          <a href={mailto(BROOKLYN_EMAIL)}>Brooklyn: {BROOKLYN_EMAIL}</a>
          <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a>
          <p>{SERVICE_AREA}</p>
          {BOOKING_SITES.map((site) => (
            <CtaLink key={site.id} href={site.calendly} external>
              {site.scheduleLabel}
            </CtaLink>
          ))}
        </div>
      </div>
      <div className={styles.footerLegal}>
        <p className={styles.footerLegalTitle}>Legal</p>
        <ul>
          <li>
            {LEGAL_POLICIES.map((policy, index) => (
              <React.Fragment key={policy.slug}>
                {index > 0 ? ' · ' : null}
                <CtaLink href={legalPath(policy.slug)}>{policy.navLabel}</CtaLink>
              </React.Fragment>
            ))}
          </li>
          {FOOTER_DISCLAIMERS.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {COPYRIGHT_YEAR} {SITE_NAME}. People protected. Healthier tomorrows.</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
