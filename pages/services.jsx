import CtaLink from '../components/CtaLink';
import PageShell from '../components/PageShell';
import { SERVICE_PAGES, getServiceHref } from '../lib/servicePages';
import { FIT_TEST_PRICE, pageTitle } from '../lib/site';
import styles from '../styles/legal.module.scss';

const ServicesIndexPage = () => (
  <PageShell
    current="services"
    title={pageTitle('Fit Testing Services')}
    description={`Respiratory fit testing in Manhattan and Brooklyn, OSHA protocols, schools, and workplaces. ${FIT_TEST_PRICE} per test.`}
  >
    <section className={styles.hero}>
      <p className={styles.kicker}>Services</p>
      <h1>Fit testing pages</h1>
      <p className={styles.lead}>
        Pick the page that matches what you need. Each one explains the same {FIT_TEST_PRICE} test
        in a different context, then links to booking or contact.
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
