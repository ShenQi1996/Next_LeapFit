import React from 'react';
import styles from './SampleEcard.module.scss';

const BOOKING_URL = 'https://calendly.com/Securefit2024';
const QR_IMAGE = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(BOOKING_URL)}`;

const SAMPLE_DETAILS = [
  { label: 'Test Location', value: 'Manhattan' },
  { label: 'Issue Date', value: '09/04/2026' },
  { label: 'Expiration Date', value: '09/04/2027' },
  { label: 'Fit Test Type', value: 'Qualitative' },
  { label: 'Respirator MFG', value: '3M' },
  { label: 'Testing Agent', value: 'Bitrex' },
  { label: 'Mask Size', value: 'Medium' },
  { label: 'Model', value: '1860' },
];

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
        <div className={styles.watermark} aria-hidden="true">
          SAMPLE
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
      </article>

      <div className={styles.helpBox}>
        <h3>Lost your e-card?</h3>
        <p>
          We keep every fit-test result in our records system for up to 3 years. We work with
          schools and other locations, so we can look yours up quickly and send it documented.
          Email us at{' '}
          <a href="mailto:SecureFit2024@gmail.com">SecureFit2024@gmail.com</a>
          {' '}with your name and test date. We can resend the e-card, and we can send a PDF too.
        </p>
      </div>
    </div>
  );
};

export default SampleEcard;
