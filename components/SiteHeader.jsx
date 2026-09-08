import React, { useState } from 'react';
import Image from 'next/image';
import logoMark from '../pages/images/logo.png';
import { RESEND_ECARD_URL } from '../lib/site';
import styles from '../pages/style/index.module.scss';

const SiteHeader = ({ home = false, current }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const section = (hash) => (home ? hash : `/${hash}`);

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
          <a
            href="/contact"
            className={current === 'contact' ? styles.navCurrent : undefined}
            onClick={closeMenu}
          >
            Contact
          </a>
          <a
            href="/legal"
            className={current === 'legal' ? styles.navCurrent : undefined}
            onClick={closeMenu}
          >
            Legal
          </a>
        </div>

        <div className={styles.navActions}>
          <a
            className={styles.navGhost}
            href={RESEND_ECARD_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Lost E-Card
          </a>
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
