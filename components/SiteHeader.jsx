import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import CtaLink from './CtaLink';
import logoMark from '../assets/logo.png';
import {
  HEADER_ACTIONS,
  HEADER_LINKS,
  HEADER_MOBILE_ACTIONS,
  createSectionHref,
} from '../lib/nav';
import { HOME_HASH } from '../lib/routes';
import { SITE_NAME } from '../lib/site';
import styles from '../styles/header.module.scss';

const SiteHeader = ({ home = false, current }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const closeMenu = () => setMenuOpen(false);
  const section = createSectionHref(home);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const onKey = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className={`${styles.header}${menuOpen ? ` ${styles.headerOpen}` : ''}`}>
      <nav className={styles.nav} aria-label="Primary">
        <a className={styles.navBrand} href={home ? HOME_HASH.top : '/'} onClick={closeMenu}>
          <Image
            className={styles.navLogo}
            src={logoMark}
            alt=""
            quality={100}
            priority
          />
          <span className={styles.navTitle}>{SITE_NAME}</span>
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
            const isCurrent = Boolean(current && current === link.current);
            return (
              <CtaLink
                key={link.label}
                href={href}
                className={isCurrent ? styles.navCurrent : undefined}
                aria-current={isCurrent ? 'page' : undefined}
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
              className={styles.navQuiet}
              href={link.href}
              external={link.external}
            >
              {link.label}
            </CtaLink>
          ))}
          <a className={styles.navButton} href={section(HOME_HASH.schedule)}>
            <span className={styles.bookFull}>Book a Test</span>
            <span className={styles.bookShort}>Book $75</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
