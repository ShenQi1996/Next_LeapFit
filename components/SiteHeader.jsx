import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ExternalLink from './ExternalLink';
import logoMark from '../assets/logo.png';
import { createSectionHref } from '../lib/nav';
import { RESEND_ECARD_URL, VERIFY_ECARD_URL } from '../lib/site';
import styles from '../styles/header.module.scss';

const SiteHeader = ({ home = false, current }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const section = createSectionHref(home);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <a className={styles.navBrand} href={home ? '#top' : '/'} onClick={closeMenu}>
          <Image
            className={styles.navLogo}
            src={logoMark}
            alt=""
            quality={100}
            priority
          />
          <span>
            <span className={styles.navTitle}>
              Secure Fit <span>LLC</span>
            </span>
            <span className={styles.navTagline}>Precision in every breath</span>
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
          <a href={section('#services')} onClick={closeMenu}>Our Services</a>
          <a href={section('#how-it-works')} onClick={closeMenu}>How It Works</a>
          <a href={section('#why-pick-us')} onClick={closeMenu}>Why Pick Us</a>
          <Link
            href="/contact"
            className={current === 'contact' ? styles.navCurrent : undefined}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            href="/legal"
            className={current === 'legal' ? styles.navCurrent : undefined}
            onClick={closeMenu}
          >
            Legal
          </Link>
          <ExternalLink
            className={styles.navMobileOnly}
            href={VERIFY_ECARD_URL}
            onClick={closeMenu}
          >
            Verify e-card
          </ExternalLink>
          <ExternalLink
            className={styles.navMobileOnly}
            href={RESEND_ECARD_URL}
            onClick={closeMenu}
          >
            Lost E-Card
          </ExternalLink>
        </div>

        <div className={styles.navActions}>
          <ExternalLink className={styles.navGhost} href={VERIFY_ECARD_URL}>
            Verify e-card
          </ExternalLink>
          <ExternalLink className={styles.navGhost} href={RESEND_ECARD_URL}>
            Lost E-Card
          </ExternalLink>
          <a className={styles.navButton} href={section('#schedule')}>
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
