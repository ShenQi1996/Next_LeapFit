import PageShell from './PageShell';
import {
  CONTACT_EMAIL,
  LEGAL_DISCLAIMER,
  LEGAL_EFFECTIVE_DATE,
  LEGAL_MAILING_LINE,
} from '../lib/legalPolicies';
import styles from '../pages/style/legal.module.scss';

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const LegalPolicyPage = ({ policy, previous, next }) => {
  if (!policy) {
    return null;
  }

  return (
    <PageShell
      current="legal"
      title={`${policy.title} | Secure Fit LLC`}
      description={policy.summary}
    >
      <p className={styles.crumbs}>
        <a href="/legal">Legal</a>
        {' / '}
        {policy.shortTitle}
      </p>

      <section className={`${styles.hero} ${styles.policyHero}`}>
        <p className={styles.kicker}>Policy {policy.number}</p>
        <h1>{policy.title}</h1>
        <p className={styles.meta}>
          Effective date: {LEGAL_EFFECTIVE_DATE}
          <br />
          Provider: Secure Fit LLC
          <br />
          {policy.contactLabel}: {CONTACT_EMAIL}
          {policy.mailing ? (
            <>
              <br />
              Mail: Secure Fit LLC, {LEGAL_MAILING_LINE}. Written requests may be sent to {CONTACT_EMAIL}.
            </>
          ) : null}
        </p>
      </section>

      <p className={styles.note}>{LEGAL_DISCLAIMER}</p>

      <nav className={styles.toc} aria-label="On this page">
        <h2>On this page</h2>
        <ol>
          {policy.sections.map((section) => (
            <li key={section.title}>
              <a href={`#${slugify(section.title)}`}>{section.title}</a>
            </li>
          ))}
        </ol>
      </nav>

      <article className={styles.article}>
        {policy.sections.map((section) => (
          <section id={slugify(section.title)} key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </article>

      <div className={styles.neighbors}>
        {previous ? (
          <a href={`/legal/${previous.slug}`}>← {previous.shortTitle}</a>
        ) : (
          <span />
        )}
        {next ? <a href={`/legal/${next.slug}`}>{next.shortTitle} →</a> : <a href="/legal">All policies</a>}
      </div>
    </PageShell>
  );
};

export default LegalPolicyPage;
