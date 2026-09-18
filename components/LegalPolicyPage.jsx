import CtaLink from './CtaLink';
import PageShell from './PageShell';
import { LEGAL_DISCLAIMER } from '../lib/legal';
import { ROUTES, legalPath } from '../lib/routes';
import { CONTACT_EMAIL, LEGAL_EFFECTIVE_DATE, LEGAL_MAILING_LINE, SITE_NAME, pageTitle } from '../lib/site';
import styles from '../styles/legal.module.scss';

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
      title={pageTitle(policy.title)}
      description={policy.summary}
    >
      <p className={styles.crumbs}>
        <CtaLink href={ROUTES.legal}>Legal</CtaLink>
        {' / '}
        {policy.shortTitle}
      </p>

      <section className={`${styles.hero} ${styles.policyHero}`}>
        <p className={styles.kicker}>Policy {policy.number}</p>
        <h1>{policy.title}</h1>
        <p className={styles.meta}>
          Effective date: {LEGAL_EFFECTIVE_DATE}
          <br />
          Provider: {SITE_NAME}
          <br />
          {policy.contactLabel}: {CONTACT_EMAIL}
          {policy.mailing ? (
            <>
              <br />
              Mail: {SITE_NAME}, {LEGAL_MAILING_LINE}. Written requests may be sent to {CONTACT_EMAIL}.
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
          <CtaLink href={legalPath(previous.slug)}>← {previous.shortTitle}</CtaLink>
        ) : (
          <span />
        )}
        {next ? (
          <CtaLink href={legalPath(next.slug)}>{next.shortTitle} →</CtaLink>
        ) : (
          <CtaLink href={ROUTES.legal}>All policies</CtaLink>
        )}
      </div>
    </PageShell>
  );
};

export default LegalPolicyPage;
