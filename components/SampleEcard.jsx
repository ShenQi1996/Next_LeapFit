import React from 'react';
import {
  CONTACT_EMAIL,
  MANHATTAN_CALENDLY,
  RESEND_ECARD_URL,
  VERIFY_ECARD_URL,
} from '../lib/site';
import styles from './SampleEcard.module.scss';

const QR_IMAGE = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(VERIFY_ECARD_URL)}`;

const SAMPLE_DETAILS = [
  { label: 'Test Location', value: 'Harlem' },
  { label: 'Issue Date', value: '09/04/2026' },
  { label: 'Expiration Date', value: '09/04/2027' },
  { label: 'Fit Test Type', value: 'N95' },
  { label: 'Respirator MFG', value: '3M' },
  { label: 'Testing Agent', value: 'Bitrex' },
  { label: 'Mask Size', value: 'Regular' },
  { label: 'Model', value: '1870+' },
];

const WATERMARK_MARKS = Array.from({ length: 12 }, (_, index) => index);

const SampleEcard = () => {
  return (
    <div className={styles.preview}>
      <p className={styles.kicker}>Sample only</p>
      <p className={styles.lead}>
        After your appointment, we email a card like this. The QR code is for verification — a
        school or employer can confirm the record is authentic without searching by name. The
        details below are examples, not a real test.
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
            <div className={styles.logo} role="img" aria-label="Secure Fit LLC logo" />
            <h3>Secure Fit LLC</h3>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.titleRow}>
              <h4>Fit Testing Results E-card</h4>
              <span className={styles.tagline}>Secure Fit: Precision in every breath.</span>
            </div>
            <div className={styles.pills}>
              <span className={styles.pillTeal}>OSHA-Aligned Protocols</span>
              <span className={styles.pillBlue}>Certified Technicians</span>
            </div>
            <div className={styles.panel}>
              <div className={styles.qrBlock}>
                <p className={styles.qrLabel}>Scan to verify this e-card</p>
                <a href={VERIFY_ECARD_URL} target="_blank" rel="noopener noreferrer">
                  <img
                    className={styles.qrImage}
                    src={QR_IMAGE}
                    alt="Sample QR code opening Secure Fit e-card verification"
                    width={150}
                    height={150}
                  />
                </a>
                <div className={styles.field}>
                  <label>Client Name:</label>
                  <div className={styles.fieldValue}>Alex Rivera</div>
                </div>
                <div className={styles.field}>
                  <label>DOB:</label>
                  <div className={styles.fieldValue}>MM/DD/YYYY</div>
                </div>
              </div>
              <div className={styles.detailsColumn}>
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
                <div className={styles.confirm}>
                  <p className={styles.confirmLabel}>Confirm this card</p>
                  <p className={styles.confirmCode}>Sample only</p>
                  <a
                    className={styles.followUp}
                    href={MANHATTAN_CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a follow-up
                  </a>
                </div>
              </div>
            </div>
            <p className={styles.disclaimer}>
              This record documents the result for the listed respirator and date. It is not medical
              clearance or an OSHA-issued certification.
            </p>
          </div>
        </div>
        <footer className={styles.legalFooter}>
          <p className={styles.legalBanner}>Sample only — not a valid fit-test record</p>
          <ul className={styles.legalClaims}>
            <li>OSHA 29 CFR 1910.134 App. A protocols.</li>
            <li>Pass applies only to the listed respirator. Storage time does not extend the testing interval.</li>
            <li>Not a medical clearance. Employer remains responsible for its program.</li>
          </ul>
          <p className={styles.legalFine}>
            Demo only. Do not copy or use as official documentation. © 2024 Secure Fit LLC.
          </p>
        </footer>
      </article>

      <div className={styles.helpBox}>
        <h3>Verify or resend an e-card</h3>
        <p>
          Scan the QR on a real card, or{' '}
          <a href={VERIFY_ECARD_URL} target="_blank" rel="noopener noreferrer">
            enter the confirm code
          </a>
          . Lost the email? Look it up with the name, date of birth, and email from the original
          test.{' '}
          <a href={RESEND_ECARD_URL} target="_blank" rel="noopener noreferrer">
            Resend your e-card
          </a>
          . If you need a PDF, email{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </div>
    </div>
  );
};

export default SampleEcard;
