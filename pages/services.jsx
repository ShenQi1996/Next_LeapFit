import CtaLink from '../components/CtaLink';
import PageShell from '../components/PageShell';
import { SERVICE_PAGES, getServiceHref } from '../lib/servicePages';
import { FIT_TEST_PRICE, pageTitle } from '../lib/site';
import styles from '../styles/legal.module.scss';

const ServicesIndexPage = () => (
  <PageShell
    current="locations"
    title={pageTitle('Locations')}
    description={`Manhattan, Brooklyn, and New York pop-up fit testing. OSHA-aligned qualitative tests for individuals, schools, and workplaces. ${FIT_TEST_PRICE} per test.`}
  >
    <section className={styles.hero} id="locations">
      <p className={styles.kicker}>Locations</p>
      <h1>Manhattan, Brooklyn, and pop-up locations</h1>
      <p className={styles.lead}>
        Choose a borough or a program. Each page explains the same {FIT_TEST_PRICE} qualitative fit
        test, aligned with OSHA 29 CFR 1910.134 Appendix A, then links to booking or contact.
      </p>
    </section>

    <div className={styles.grid}>
      {SERVICE_PAGES.map((page) => (
        <CtaLink className={styles.policyCard} href={getServiceHref(page.slug)} key={page.slug}>
          <span className={styles.policyNumber}>{page.kicker}</span>
          <h2>{page.h1}</h2>
          <p>{page.description}</p>
        </CtaLink>
      ))}
    </div>
  </PageShell>
);

export default ServicesIndexPage;
