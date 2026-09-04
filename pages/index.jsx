import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import image2 from './images/images2.svg';
import image1 from './images/images1.svg';
import ChatWidget from '../components/ChatWidget';
import SampleEcard from '../components/SampleEcard';
import styles from "./style/index.module.scss";

const BROOKLYN_URL = 'https://next-leap-fit-bk-2026.vercel.app/';

const HomePage = () => {
  const [ecardOpen, setEcardOpen] = useState(false);
  const ecardRef = useRef(null);

  const openEcard = () => {
    setEcardOpen(true);
    window.history.replaceState(null, '', '#sample-ecard');
  };

  const toggleEcard = () => {
    if (ecardOpen) {
      setEcardOpen(false);
      if (window.location.hash === '#sample-ecard') {
        window.history.replaceState(null, '', window.location.pathname);
      }
      return;
    }
    openEcard();
  };

  useEffect(() => {
    if (window.location.hash === '#sample-ecard') {
      setEcardOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!ecardOpen) {
      return undefined;
    }
    const timer = window.setTimeout(() => {
      ecardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [ecardOpen]);

  return (
    <div className={styles.Homepage}>
      {/* Navigation Header */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navBrand}>
            <div className={styles.navLogo}></div>
            <span className={styles.navTitle}>Secure Fit LLC</span>
          </div>
          <div className={styles.navActions}>
            <a
              className={styles.navButtonSecondary}
              href={BROOKLYN_URL}
              target='_blank'
              rel='noopener noreferrer'
            >
              Brooklyn Location
            </a>
            <a 
              className={styles.navButton} 
              href='https://calendly.com/Securefit2024' 
              target='_blank'
              rel='noopener noreferrer'
            >
              Schedule Appointment
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroWave}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#00B499" fillOpacity="1" d="M0,256L120,224C240,192,480,128,720,96C960,64,1200,64,1320,64L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
          </svg>
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.brandSection}>
            <div className={styles.logo}></div>
            <h1 className={styles.brandTitle}>Secure Fit LLC</h1>
          </div>
          
          <div className={styles.tagline}>
            <h2>Precision in every <span>breath</span></h2>
            <p className={styles.subtitle}>Professional respiratory fit testing services for optimal workplace safety</p>
          </div>
          
          <div className={styles.heroImage}>
            <Image className={styles.heroImg} src={image2} alt='Medical mask illustration' priority />  
          </div>
          
          <div className={styles.heroReviews}>
            <div className={styles.heroReviewItem}>
              <div className={styles.reviewStars}>★★★★★</div>
              <p className={styles.reviewText}>"Quick, professional service. The technician was thorough and explained everything clearly."</p>
              <p className={styles.reviewAuthor}>— Sarah M., Construction Manager</p>
            </div>
            <div className={styles.heroReviewItem}>
              <div className={styles.reviewStars}>★★★★★</div>
              <p className={styles.reviewText}>"Very convenient location and fast turnaround. Highly recommend for workplace compliance."</p>
              <p className={styles.reviewAuthor}>— Michael R., Safety Coordinator</p>
            </div>
            <div className={styles.heroReviewItem}>
              <div className={styles.reviewStars}>★★★★★</div>
              <p className={styles.reviewText}>"Professional team and comprehensive reports. Made our OSHA compliance easy."</p>
              <p className={styles.reviewAuthor}>— Jennifer L., HR Director</p>
            </div>
            <div className={styles.heroReviewItem}>
              <div className={styles.reviewStars}>★★★★★</div>
              <p className={styles.reviewText}>"Excellent service! The process was smooth and the documentation was detailed."</p>
              <p className={styles.reviewAuthor}>— David K., Facility Manager</p>
            </div>
          </div>
          
          <section className={styles.ecardSection} aria-label="Sample results e-card">
            <p className={styles.ecardIntro}>
              OSHA-compliant respiratory fit testing for workplaces, schools, and other locations.
              After your test, we email a documented e-card and keep it in our records system for up to 3 years.
            </p>
            <ul className={styles.ecardFacts}>
              <li><strong>$75</strong> per fit test</li>
              <li>Records on file <strong>3 years</strong></li>
              <li>Fast e-card lookup</li>
            </ul>
            <button
              type="button"
              className={styles.ecardButton}
              onClick={toggleEcard}
              aria-expanded={ecardOpen}
              aria-controls="sample-ecard"
            >
              <span className={styles.ecardButtonIcon} aria-hidden="true" />
              {ecardOpen ? 'Hide sample e-card' : 'View sample e-card'}
            </button>
            <div
              id="sample-ecard"
              ref={ecardRef}
              className={`${styles.ecardPanel} ${ecardOpen ? styles.ecardPanelOpen : ''}`}
              inert={ecardOpen ? undefined : ''}
              aria-hidden={!ecardOpen}
            >
              <div className={styles.ecardPanelInner}>
                <SampleEcard />
              </div>
            </div>
          </section>

          <div className={styles.ctaSection}>
            <div className={styles.ctaButtons}>
              <div className={styles.ctaButtonRow}>
                <a 
                  className={styles.ctaButton} 
                  href='https://calendly.com/Securefit2024' 
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Schedule Fit Test
                </a>
                <a
                  className={styles.ctaButtonSecondary}
                  href={BROOKLYN_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Brooklyn Location
                </a>
              </div>
            </div>
            <p className={styles.ctaNote}>Quick and convenient appointments</p>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.titleUnderline}></div>
        </div>
        <div className={styles.featuresContent}>
          <div className={styles.featuresText}>
            <h3 className={styles.featuresTitle}>Professional Respiratory Fit Testing</h3>
            <div className={styles.featuresInfo}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location:</span>
                <span className={styles.infoValue}>Convenient pop-up stations throughout New York</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Pricing:</span>
                <span className={styles.infoValue}>
                  <span className={styles.price}>$75</span> per fit test
                </span>
              </div>
            </div>
            <p className={styles.featuresDescription}>
              Ensure your respiratory protection equipment fits perfectly with our professional fit testing services. 
              Our certified technicians provide accurate, reliable testing in compliance with OSHA standards at convenient 
              locations throughout New York. Every result goes into our records system and stays on file for up to 3 years. We work with schools and other locations, so if you need your e-card again we can look it up quickly and send it documented — by email or as a PDF.
            </p>
            <ul className={styles.featuresList}>
              <li>OSHA-compliant testing protocols</li>
              <li>Comprehensive fit testing reports</li>
              <li>Records system for schools and other locations — documented e-cards on file 3 years, looked up fast</li>
              <li>Multiple testing locations</li>
              <li>Flexible scheduling options</li>
            </ul>
          </div>

          <div className={styles.featuresVisual}>
            <div className={styles.featuresImage}>
              <Image className={styles.featureImg} src={image1} alt='Fit testing equipment' />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefits} id="why-pick-us">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why pick us?</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.sectionLead}>
            OSHA-compliant testing, a records system that keeps your e-card on file for up to 3 years, and locations that come to you — including schools and other worksites.
          </p>
        </div>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIconWrapper}>
              <div className={styles.benefitIcon}>✓</div>
            </div>
            <h4>Certified Technicians</h4>
            <p>Our team is fully certified and experienced in respiratory fit testing protocols, ensuring accurate and reliable results.</p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIconWrapper}>
              <div className={styles.benefitIcon}>📍</div>
            </div>
            <h4>Convenient Locations</h4>
            <p>Pop-up stations throughout New York, including schools and other worksites, so teams can get tested without a long trip.</p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIconWrapper}>
              <div className={styles.benefitIcon}>📁</div>
            </div>
            <h4>Records in Our System</h4>
            <p>Every fit-test result is stored in our records software for up to 3 years. Schools and other locations we work with can get a documented e-card back quickly — resent by email or sent as a PDF.</p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIconWrapper}>
              <div className={styles.benefitIcon}>💰</div>
            </div>
            <h4>Transparent Pricing</h4>
            <p>Competitive rates at $75 per fit test with no hidden fees. Clear, upfront pricing for all services.</p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIconWrapper}>
              <div className={styles.benefitIcon}>⚡</div>
            </div>
            <h4>Efficient Service</h4>
            <p>Fast, professional service that fits into your busy schedule. Quick turnaround times without compromising quality.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}></div>
              <h3>Secure Fit LLC</h3>
              <p>Professional respiratory fit testing services</p>
            </div>
          </div>
          <div className={styles.footerSection}>
            <h4>Services</h4>
            <ul>
              <li>Respiratory Fit Testing</li>
              <li>
                <a href="#sample-ecard" onClick={(event) => {
                  event.preventDefault();
                  openEcard();
                }}>
                  Sample results e-card
                </a>
              </li>
              <li>OSHA Compliance</li>
              <li>
                <a href="#why-pick-us">Why pick us?</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href='mailto:SecureFit2024@gmail.com'>SecureFit2024@gmail.com</a>
              </li>
              <li>New York Area</li>
              <li>
                <a href='https://calendly.com/Securefit2024' target='_blank' rel='noopener noreferrer'>
                  Schedule Appointment
                </a>
              </li>
              <li>
                <a href={BROOKLYN_URL} target='_blank' rel='noopener noreferrer'>
                  Brooklyn Location
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Secure Fit LLC. All rights reserved.</p>
        </div>
      </footer>
      <ChatWidget />
    </div>
  );
};

export default HomePage;
