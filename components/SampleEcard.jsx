import React from 'react';
import { CONTACT_EMAIL, MANHATTAN_CALENDLY, RESEND_ECARD_URL } from '../lib/site';
import styles from './SampleEcard.module.scss';

const QR_IMAGE = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(MANHATTAN_CALENDLY)}`;

const SAMPLE_DETAILS = [
  { label: 'Test Location', value: 'Manhattan' },
  { label: 'Issue Date', value: '09/04/2026' },
  { label: 'Next routine fit test due', value: '09/04/2027' },
  { label: 'Fit Test Type', value: 'Qualitative' },
  { label: 'Protocol', value: 'OSHA 29 CFR 1910.134 App. A' },
  { label: 'Respirator MFG', value: '3M' },
  { label: 'Testing Agent', value: 'Bitrex' },
  { label: 'Mask Size', value: 'Medium' },
  { label: 'Model', value: '1860' },
];

const WATERMARK_MARKS = Array.from({ length: 12 }, (_, index) => index);

const SampleEcard = () => {
  return (
    <div className={styles.preview}>
      <p className={styles.kicker}>Sample only</p>
      <p className={styles.lead}>
        After your appointment, we email a card like this. You can save it or share it with
        your employer. We keep a copy in our records for up to 3 years. The details below are
        examples, not a real test.
      </p>

      <article className={styles.cardWrap} aria-label="Sample fit testing results e-card">
        <div className={styles.cardMain}>
          <div className={styles.watermark} aria-hidden="true">
            <div className={styles.watermarkGrid}>
              {WATERMARK_MARKS.map((index) => (
                <span key={index}>SAMPLE</span>
              ))}
            </div>
            <span className={styles.watermarkCenter}>SAMPLE</span>
          </div>
          <div className={styles.cardHeader}>
            <div className={styles.logo} role="img" aria-label="Secure Fit llc logo" />
            <h3>Secure Fit llc</h3>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.titleRow}>
              <h4>Fit Testing Results E-card</h4>
              <span className={styles.tagline}>Secure Fit: Precision in every breath.</span>
            </div>
            <div className={styles.pills}>
              <span className={styles.pillTeal}>OSHA-Aligned Protocols</span>
              <span className={styles.pillBlue}>Experienced technicians</span>
            </div>
            <div className={styles.panel}>
              <div className={styles.qrBlock}>
                <p className={styles.qrLabel}>Need to reschedule?</p>
                <img
                  className={styles.qrImage}
                  src={QR_IMAGE}
                  alt="Sample QR code linking to Secure Fit scheduling"
                  width={150}
                  height={150}
                />
                <div className={styles.field}>
                  <label>Client Name:</label>
                  <div className={styles.fieldValue}>Alex Rivera</div>
                </div>
                <div className={styles.field}>
                  <label>DOB:</label>
                  <div className={styles.fieldValue}>MM/DD/YYYY</div>
                </div>
              </div>
              <table className={styles.details}>
                <tbody>
                  {SAMPLE_DETAILS.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}:</th>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                  <tr>
                    <th scope="row">Result:</th>
                    <td className={styles.pass}>Pass</td>
                  </tr>
                  <tr>
                    <th scope="row">Fit tester:</th>
                    <td>Jordan Lee</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <footer className={styles.legalFooter}>
          <p className={styles.legalBanner}>Sample only — not a valid fit-test record</p>
          <ul className={styles.legalClaims}>
            <li>OSHA 29 CFR 1910.134 App. A protocols.</li>
            <li>Pass applies only to the listed respirator. A next-test date is not a guarantee of protection until then.</li>
            <li>Not a medical clearance. Employer remains responsible for its program.</li>
          </ul>
          <p className={styles.legalFine}>
            Demo only. Do not copy or use as official documentation. © 2026 Secure Fit llc.
          </p>
        </footer>
      </article>

      <div className={styles.helpBox}>
        <h3>Lost your e-card?</h3>
        <p>
          We keep every fit-test result in our records system for up to 3 years. Look it up with
          the name, date of birth, and email from your original test.{' '}
          <a href={RESEND_ECARD_URL} target="_blank" rel="noopener noreferrer">
            Resend your e-card
          </a>
          . If you need a PDF or the lookup does not match, email{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </div>
    </div>
  );
};

export default SampleEcard;
