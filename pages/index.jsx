import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CtaLink from '../components/CtaLink';
import ExternalLink from '../components/ExternalLink';
import PageShell from '../components/PageShell';
import SampleEcard from '../components/SampleEcard';
import heroPhoto from '../assets/hero-clinician.jpg';
import maskHands from '../assets/mask-hands.jpg';
import nycSkyline from '../assets/nyc-skyline.jpg';
import { HOME_REVIEWS, HOME_SERVICES, HOME_STEPS, HOME_TRUST } from '../lib/home';
import { HOME_HASH } from '../lib/routes';
import {
  BOOKING_SITES,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  FIT_TEST_PRICE,
  MOTTO,
  OSHA_SHORT,
  RECORD_YEARS,
  RESEND_ECARD_URL,
  SITE_NAME,
  VERIFY_ECARD_URL,
} from '../lib/site';
import buttons from '../styles/buttons.module.scss';
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
  person: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M6.5 19c.6-3 2.8-4.5 5.5-4.5s4.9 1.5 5.5 4.5" />
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
};

const Icon = ({ name }) => ICONS[name] || null;

const HomePage = () => {
  const [ecardOpen, setEcardOpen] = useState(false);

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const openEcard = () => {
    setEcardOpen(true);
    window.history.replaceState(null, '', HOME_HASH.sampleEcard);
    scrollToId('sample-ecard');
  };

  const toggleEcard = () => {
    if (ecardOpen) {
      setEcardOpen(false);
      if (window.location.hash === HOME_HASH.sampleEcard) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      return;
    }
    openEcard();
  };

  useEffect(() => {
    if (window.location.hash === HOME_HASH.sampleEcard) {
      setEcardOpen(true);
    }
    const id = window.location.hash.replace('#', '');
    if (id) {
      window.setTimeout(() => scrollToId(id), 50);
    }
  }, []);

  return (
    <PageShell
      home
      onSampleEcard={openEcard}
      title={DEFAULT_TITLE}
      description={DEFAULT_DESCRIPTION}
    >
      <section className={styles.hero} id="top">
        <div className={styles.heroMedia}>
          <Image
            className={styles.heroImg}
            src={heroPhoto}
            alt="Healthcare professional wearing a protective respirator"
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>Respiratory Fit Testing | New York</p>
            <h1>Fit Today. <span>Healthier Tomorrows.</span></h1>
            <p className={styles.heroMission}>Same mission. A brighter tomorrow.</p>
            <p className={styles.heroLead}>
              OSHA-compliant respiratory fit testing for individuals, workplaces, and schools.
              After your test, we email a documented e-card you can scan to verify, and we keep it
              on file for up to {RECORD_YEARS} years.
            </p>
            <div className={styles.heroButtons}>
              <a className={buttons.ctaButton} href={HOME_HASH.schedule}>
                Schedule Appointment →
              </a>
              <ExternalLink className={buttons.ctaButtonGhost} href={VERIFY_ECARD_URL}>
                Verify an e-card
              </ExternalLink>
            </div>
            <p className={styles.heroMotto}>{MOTTO}</p>
            <ul className={styles.trustBar}>
              {HOME_TRUST.map((item) => (
                <li key={item.label}>
                  <Icon name={item.icon} />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.verifyBanner} id="verify-ecard">
        <div>
          <h2>Verify an e-card</h2>
          <p>
            Scan the QR on a Secure Fit e-card or enter the confirm code. We show whether the
            record is on file, still valid, expired, or did not pass — without a public name search.
          </p>
        </div>
        <ExternalLink className={buttons.ctaButton} href={VERIFY_ECARD_URL}>
          Verify an e-card
        </ExternalLink>
      </section>

      <section className={styles.resendBanner} id="lost-ecard">
        <div>
          <h2>Lost your e-card?</h2>
          <p>
            Enter the name, date of birth, and email from your original fit test.
            We will send your most recent card to the email on file.
          </p>
        </div>
        <ExternalLink className={buttons.ctaButton} href={RESEND_ECARD_URL}>
          Resend via email
        </ExternalLink>
      </section>

      <section className={styles.services} id="services">
        <div className={`${styles.sectionHeader} ${styles.sectionHeaderLeft}`}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.sectionLead}>
            Professional respiratory fit testing, documented e-cards, and pop-up locations throughout New York.
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
              {service.href === HOME_HASH.sampleEcard ? (
                <a
                  href={service.href}
                  onClick={(event) => {
                    event.preventDefault();
                    openEcard();
                  }}
                >
                  {service.linkLabel} →
                </a>
              ) : (
                <CtaLink href={service.href} external={service.external}>
                  {service.linkLabel} →
                </CtaLink>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className={styles.process} id="how-it-works">
        <div className={`${styles.sectionHeader} ${styles.sectionHeaderLeft}`}>
          <h2 className={styles.sectionTitle}>How Fit Testing Works</h2>
          <p className={styles.sectionLead}>A simple process. A safer tomorrow.</p>
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

      <section className={styles.pricingWhy} id="schedule">
        <div className={styles.pricingCard}>
          <p className={styles.pricingKicker}>Clear pricing</p>
          <h2>{FIT_TEST_PRICE} <span>per fit test</span></h2>
          <ul>
            <li>OSHA-compliant testing protocols</li>
            <li>Documented e-card emailed after your test</li>
            <li>Scan the QR to verify the record</li>
            <li>Records kept on file for up to {RECORD_YEARS} years</li>
            <li>Manhattan and Brooklyn appointments</li>
            <li>No hidden fees</li>
          </ul>
          <div className={styles.pricingButtons}>
            {BOOKING_SITES.map((site, index) => (
              <ExternalLink
                key={site.id}
                className={index === 0 ? buttons.ctaButton : buttons.ctaButtonOnDark}
                href={site.calendly}
              >
                {site.scheduleLabel}
              </ExternalLink>
            ))}
          </div>
        </div>

        <div className={styles.whyPanel} id="why-pick-us">
          <h2>Why choose {SITE_NAME}?</h2>
          <p>
            OSHA-compliant testing, a records system that keeps your e-card on file for up to {RECORD_YEARS} years,
            and locations that come to you — including schools and other worksites.
          </p>
          <ul>
            <li><strong>Experienced technicians.</strong> Accurate testing with clear documentation.</li>
            <li><strong>Convenient & accessible.</strong> Pop-up stations throughout New York.</li>
            <li><strong>Scan to verify.</strong> Employers and schools can confirm a card is authentic.</li>
            <li><strong>Fast, reliable documentation.</strong> Look up and resend a lost e-card quickly.</li>
            <li><strong>Transparent pricing.</strong> {FIT_TEST_PRICE} per fit test. No hidden fees.</li>
            <li><strong>OSHA-compliant protocols.</strong> Testing follows {OSHA_SHORT}.</li>
          </ul>
          <div className={styles.whyVisual}>
            <Image className={styles.featureImg} src={maskHands} alt="Gloved hands holding a respirator mask" />
          </div>
        </div>
      </section>

      <section className={styles.ecardSection} id="sample-ecard" aria-label="Sample results e-card">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Your documented e-card</h2>
          <p className={styles.sectionLead}>
            After your test, we email a documented e-card with a QR code to verify it. We keep the
            record on file for up to {RECORD_YEARS} years.
          </p>
        </div>
        <ul className={styles.ecardFacts}>
          <li><strong>Scan to verify</strong></li>
          <li>Records kept on file <strong>{RECORD_YEARS} years</strong></li>
          <li><strong>{FIT_TEST_PRICE}</strong> per fit test</li>
        </ul>
        <div className={styles.ecardActions}>
          <button
            type="button"
            className={styles.ecardButton}
            onClick={toggleEcard}
            aria-expanded={ecardOpen}
            aria-controls="sample-ecard-preview"
          >
            {ecardOpen ? 'Hide sample e-card' : 'View sample e-card'}
          </button>
          <ExternalLink className={buttons.ctaButtonGhost} href={VERIFY_ECARD_URL}>
            Verify an e-card
          </ExternalLink>
          <ExternalLink className={buttons.ctaButtonGhost} href={RESEND_ECARD_URL}>
            Resend a lost e-card
          </ExternalLink>
        </div>
        <div
          id="sample-ecard-preview"
          className={`${styles.ecardPanel} ${ecardOpen ? styles.ecardPanelOpen : ''}`}
          inert={ecardOpen ? undefined : ''}
          aria-hidden={!ecardOpen}
        >
          <div className={styles.ecardPanelInner}>
            <SampleEcard />
          </div>
        </div>
      </section>

      <section className={styles.reviews} id="reviews">
        <div className={styles.reviewContent}>
          <div className={`${styles.sectionHeader} ${styles.sectionHeaderLeft}`}>
            <h2 className={styles.sectionTitle}>What people say</h2>
          </div>
          <div className={styles.reviewGrid}>
            {HOME_REVIEWS.map((review) => (
              <blockquote className={styles.reviewCard} key={review.author}>
                <span className={styles.reviewMark} aria-hidden="true">“</span>
                <p>{review.text}</p>
                <cite>— {review.author}</cite>
              </blockquote>
            ))}
          </div>
        </div>
        <div className={styles.reviewSkyline}>
          <Image src={nycSkyline} alt="New York City skyline" fill sizes="(min-width: 1024px) 32vw, 100vw" />
        </div>
      </section>
    </PageShell>
  );
};

export default HomePage;
