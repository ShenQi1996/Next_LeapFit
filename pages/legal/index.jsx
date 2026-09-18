import CtaLink from '../../components/CtaLink';
import PageShell from '../../components/PageShell';
import { LEGAL_DISCLAIMER, LEGAL_POLICIES } from '../../lib/legal';
import { legalPath } from '../../lib/routes';
import { CONTACT_EMAIL, LEGAL_EFFECTIVE_DATE, SITE_NAME, mailto, pageTitle } from '../../lib/site';
import styles from '../../styles/legal.module.scss';

const LegalIndexPage = () => (
  <PageShell
    current="legal"
    title={pageTitle('Legal policies')}
    description={`Public service, booking, privacy, records, and website policies for ${SITE_NAME}.`}
  >
    <section className={styles.hero}>
      <p className={styles.kicker}>Legal</p>
      <h1>Website legal and service policies</h1>
      <p className={styles.lead}>
        These public policies describe {SITE_NAME}’s current website and fit-testing service.
        Effective date: {LEGAL_EFFECTIVE_DATE}.
      </p>
      <p className={styles.meta}>
        Provider: {SITE_NAME} · Contact:{' '}
        <a href={mailto(CONTACT_EMAIL)}>{CONTACT_EMAIL}</a>
      </p>
    </section>

    <p className={styles.note}>{LEGAL_DISCLAIMER}</p>

    <div className={styles.grid}>
      {LEGAL_POLICIES.map((policy) => (
        <CtaLink className={styles.policyCard} href={legalPath(policy.slug)} key={policy.slug}>
          <span className={styles.policyNumber}>{policy.number}</span>
          <h2>{policy.title}</h2>
          <p>{policy.summary}</p>
        </CtaLink>
      ))}
    </div>

    <p className={styles.printHint}>
      Each policy page is printable from your browser. Internal operating checklists, consent-form
      templates, and future product addenda are not published here.
    </p>
  </PageShell>
);

export default LegalIndexPage;
