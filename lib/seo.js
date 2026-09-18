import { LEGAL_POLICIES } from './legal';
import { ROUTES, servicePath } from './routes';
import { SERVICE_PAGES } from './servicePages';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  DEFAULT_DESCRIPTION,
  SERVICE_AREA,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from './site';

export const getSitemapPaths = () => [
  ROUTES.home,
  ROUTES.contact,
  ROUTES.legal,
  ROUTES.services,
  ...SERVICE_PAGES.map((page) => servicePath(page.slug)),
  ...LEGAL_POLICIES.map((policy) => `${ROUTES.legal}/${policy.slug}`),
];

export const localBusinessJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  areaServed: SERVICE_AREA,
  priceRange: '$',
});

export const serviceJsonLd = (page) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: page.h1,
  description: page.description,
  url: absoluteUrl(servicePath(page.slug)),
  provider: {
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    url: SITE_URL,
  },
  areaServed: SERVICE_AREA,
});

export const seoJsonLdPayload = (extra) => {
  const graphs = [localBusinessJsonLd(), ...(extra ? [extra].flat() : [])];
  if (graphs.length === 1) {
    return graphs[0];
  }
  return {
    '@context': 'https://schema.org',
    '@graph': graphs.map(({ '@context': _context, ...node }) => node),
  };
};
