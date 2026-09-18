import { HOME_HASH, ROUTES, servicePath } from './routes';
import { SERVICE_PAGES } from './servicePages';
import { RESEND_ECARD_URL, VERIFY_ECARD_URL } from './site';

export const createSectionHref = (home) => (hash) => (home ? hash : `/${hash}`);

export const HEADER_LINKS = [
  { kind: 'section', hash: HOME_HASH.services, label: 'Our Services' },
  { kind: 'page', href: ROUTES.services, label: 'Locations', current: 'services' },
  { kind: 'section', hash: HOME_HASH.howItWorks, label: 'How It Works' },
  { kind: 'section', hash: HOME_HASH.whyPickUs, label: 'Why Pick Us' },
  { kind: 'page', href: ROUTES.contact, label: 'Contact', current: 'contact' },
  { kind: 'page', href: ROUTES.legal, label: 'Legal', current: 'legal' },
];

export const HEADER_MOBILE_ACTIONS = [
  { href: VERIFY_ECARD_URL, label: 'Verify e-card', external: true },
  { href: RESEND_ECARD_URL, label: 'Lost E-Card', external: true },
];

export const HEADER_ACTIONS = [
  { href: VERIFY_ECARD_URL, label: 'Verify e-card', external: true },
  { href: RESEND_ECARD_URL, label: 'Lost E-Card', external: true, compactHide: true },
];

export const FOOTER_LINKS = [
  { kind: 'section', hash: HOME_HASH.services, label: 'Our Services' },
  { kind: 'page', href: ROUTES.services, label: 'Locations' },
  ...SERVICE_PAGES.filter((page) => page.inFooter).map((page) => ({
    kind: 'page',
    href: servicePath(page.slug),
    label: page.navLabel,
  })),
  { kind: 'page', href: ROUTES.contact, label: 'Contact' },
  { kind: 'external', href: VERIFY_ECARD_URL, label: 'Verify e-card' },
  { kind: 'external', href: RESEND_ECARD_URL, label: 'Resend e-card' },
  { kind: 'page', href: ROUTES.legal, label: 'Legal policies' },
];
