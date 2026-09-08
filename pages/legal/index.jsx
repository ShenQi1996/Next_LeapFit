import PageShell from '../../components/PageShell';
import {
  CONTACT_EMAIL,
  LEGAL_DISCLAIMER,
  LEGAL_EFFECTIVE_DATE,
  LEGAL_POLICIES,
} from '../../lib/legalPolicies';
import styles from '../style/legal.module.scss';

const LegalIndexPage = () => (
  <PageShell
    current="legal"
    title="Legal policies | Secure Fit LLC"
    description="Public service, booking, privacy, records, and website policies for Secure Fit LLC."
  >
    <section className={styles.hero}>
      <p className={styles.kicker}>Legal</p>
      <h1>Website legal and service policies</h1>
      <p className={styles.lead}>
        These public policies describe Secure Fit LLC’s current website and fit-testing service.
        Effective date: {LEGAL_EFFECTIVE_DATE}.
      </p>
      <p className={styles.meta}>
        Provider: Secure Fit LLC · Contact:{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </section>

    <p className={styles.note}>{LEGAL_DISCLAIMER}</p>

    <div className={styles.grid}>
      {LEGAL_POLICIES.map((policy) => (
        <a className={styles.policyCard} href={`/legal/${policy.slug}`} key={policy.slug}>
          <span className={styles.policyNumber}>{policy.number}</span>
          <h2>{policy.title}</h2>
          <p>{policy.summary}</p>
        </a>
      ))}
    </div>

    <p className={styles.printHint}>
      Each policy page is printable from your browser. Internal operating checklists, consent-form
      templates, and future product addenda are not published here.
    </p>
  </PageShell>
);

export default LegalIndexPage;
