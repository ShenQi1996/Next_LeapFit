import { HOME_HASH, ROUTES } from './routes';
import { RESEND_ECARD_URL, VERIFY_ECARD_URL } from './site';

export const createSectionHref = (home) => (hash) => (home ? hash : `/${hash}`);

export const HEADER_LINKS = [
  { kind: 'section', hash: HOME_HASH.services, label: 'Services' },
  { kind: 'page', href: ROUTES.services, label: 'Locations', current: 'locations' },
  { kind: 'section', hash: HOME_HASH.howItWorks, label: 'How It Works' },
  { kind: 'page', href: ROUTES.contact, label: 'Contact', current: 'contact' },
];

export const HEADER_MOBILE_ACTIONS = [
  { href: VERIFY_ECARD_URL, label: 'Verify E-Card', external: true },
  { href: RESEND_ECARD_URL, label: 'Lost your e-card?', external: true },
];

export const HEADER_ACTIONS = [
  { href: VERIFY_ECARD_URL, label: 'Verify E-Card', external: true },
];

export const FOOTER_LINKS = [
  { kind: 'section', hash: HOME_HASH.services, label: 'Services' },
  { kind: 'page', href: ROUTES.services, label: 'Locations' },
  { kind: 'section', hash: HOME_HASH.howItWorks, label: 'How It Works' },
  { kind: 'page', href: ROUTES.contact, label: 'Contact' },
  { kind: 'section', hash: HOME_HASH.sampleEcard, label: 'Sample e-card' },
  { kind: 'external', href: VERIFY_ECARD_URL, label: 'Verify E-Card' },
  { kind: 'external', href: RESEND_ECARD_URL, label: 'Resend e-card' },
];
