import React, { useState } from 'react';
import Image from 'next/image';
import CtaLink from './CtaLink';
import logoMark from '../assets/logo.png';
import {
  HEADER_ACTIONS,
  HEADER_LINKS,
  HEADER_MOBILE_ACTIONS,
  createSectionHref,
} from '../lib/nav';
import { HOME_HASH } from '../lib/routes';
import { SITE_SHORT_NAME, TAGLINE } from '../lib/site';
import styles from '../styles/header.module.scss';

const SiteHeader = ({ home = false, current }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const section = createSectionHref(home);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <a className={styles.navBrand} href={home ? HOME_HASH.top : '/'} onClick={closeMenu}>
          <Image
            className={styles.navLogo}
            src={logoMark}
            alt=""
            quality={100}
            priority
          />
          <span>
            <span className={styles.navTitle}>
              {SITE_SHORT_NAME} <span>LLC</span>
            </span>
            <span className={styles.navTagline}>{TAGLINE}</span>
          </span>
        </a>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>

        <div id="site-nav" className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
          {HEADER_LINKS.map((link) => {
            const href = link.kind === 'section' ? section(link.hash) : link.href;
            return (
              <CtaLink
                key={link.label}
                href={href}
                className={current && current === link.current ? styles.navCurrent : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </CtaLink>
            );
          })}
          {HEADER_MOBILE_ACTIONS.map((link) => (
            <CtaLink
              key={link.label}
              className={styles.navMobileOnly}
              href={link.href}
              external={link.external}
              onClick={closeMenu}
            >
              {link.label}
            </CtaLink>
          ))}
        </div>

        <div className={styles.navActions}>
          {HEADER_ACTIONS.map((link) => (
            <CtaLink
              key={link.label}
              className={`${styles.navGhost}${link.compactHide ? ` ${styles.navGhostExtra}` : ''}`}
              href={link.href}
              external={link.external}
            >
              {link.label}
            </CtaLink>
          ))}
          <a className={styles.navButton} href={section(HOME_HASH.schedule)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="6" width="16" height="14" rx="2" />
              <path d="M8 4v4M16 4v4M4 10h16" />
            </svg>
            Schedule<span className={styles.navButtonRest}> Appointment</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
