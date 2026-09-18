import CtaLink from './CtaLink';
import PageShell from './PageShell';
import { serviceJsonLd } from '../lib/seo';
import { ROUTES } from '../lib/routes';
import { SERVICE_PAGES, getServiceHref } from '../lib/servicePages';
import {
  BOOKING_SITES,
  BROOKLYN_EMAIL,
  CONTACT_EMAIL,
  CONTACT_PHONE_HREF,
  FIT_TEST_PRICE,
  OSHA_LABEL,
  mailto,
} from '../lib/site';
import buttons from '../styles/buttons.module.scss';
import styles from '../styles/legal.module.scss';

const SERVICE_CTAS = {
  ...Object.fromEntries(
    BOOKING_SITES.map((site) => [
      site.id,
      { href: site.calendly, label: site.scheduleLabel, external: true },
    ]),
  ),
  contact: { href: ROUTES.contact, label: 'Contact us', external: false },
};

const ServicePage = ({ page }) => {
  const related = SERVICE_PAGES.filter((entry) => entry.slug !== page.slug);

  return (
    <PageShell
      current="services"
      title={page.title}
      description={page.description}
      jsonLd={serviceJsonLd(page)}
    >
      <p className={styles.crumbs}>
        <CtaLink href={ROUTES.home}>Home</CtaLink>
        {' / '}
        <CtaLink href={ROUTES.services}>Services</CtaLink>
        {' / '}
        <span>{page.navLabel}</span>
      </p>

      <section className={styles.hero}>
        <p className={styles.kicker}>{page.kicker}</p>
        <h1>{page.h1}</h1>
        <p className={styles.lead}>{page.lead}</p>
        <p className={styles.meta}>
          {FIT_TEST_PRICE} per fit test · {OSHA_LABEL}
        </p>
      </section>

      <article className={styles.article}>
        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </article>

      <div className={styles.actions}>
        {page.ctas.map((key) => {
          const cta = SERVICE_CTAS[key];
          if (!cta) {
            return null;
          }
          return (
            <CtaLink
              key={key}
              className={cta.external ? buttons.ctaButton : buttons.ctaButtonGhost}
              href={cta.href}
              external={cta.external}
            >
              {cta.label}
            </CtaLink>
          );
        })}
        <a className={buttons.ctaButtonGhost} href={CONTACT_PHONE_HREF}>
          Call us
        </a>
      </div>

      <p className={styles.note}>
        Brooklyn questions: <a href={mailto(BROOKLYN_EMAIL)}>{BROOKLYN_EMAIL}</a>
        . General questions: <a href={mailto(CONTACT_EMAIL)}>{CONTACT_EMAIL}</a>
        . A booking confirmation identifies the actual testing location and provider.
      </p>

      <nav className={styles.neighbors} aria-label="Other service pages">
        {related.map((entry) => (
          <CtaLink href={getServiceHref(entry.slug)} key={entry.slug}>
            {entry.navLabel} →
          </CtaLink>
        ))}
      </nav>
    </PageShell>
  );
};

export default ServicePage;
