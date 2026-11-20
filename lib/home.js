import { HOME_HASH, ROUTES, servicePath } from './routes';
import { OSHA_LABEL, RECORD_YEARS, VERIFY_ECARD_URL } from './site';

export const HOME_SERVICES = [
  {
    id: 'verify',
    title: 'Verify an E-Card',
    description: 'Scan the QR or enter the confirm code. There is no public name search.',
    href: VERIFY_ECARD_URL,
    linkLabel: 'Verify an e-card',
    icon: 'verify',
    external: true,
  },
  {
    id: 'fit-testing',
    title: 'Qualitative Respiratory Fit Testing',
    description: 'A fit test for the respirator you will wear. Fit testing only, not a medical clearance.',
    href: HOME_HASH.schedule,
    linkLabel: 'Schedule a test',
    icon: 'mask',
  },
  {
    id: 'osha',
    title: 'OSHA-Aligned Protocols',
    description: `Testing is aligned with ${OSHA_LABEL}.`,
    href: servicePath('osha-respiratory-fit-testing'),
    linkLabel: 'Learn more',
    icon: 'shield',
    internal: true,
  },
  {
    id: 'schools',
    title: 'Schools & Educational Institutions',
    description: 'On-site and pop-up fit testing for students and staff.',
    href: servicePath('school-fit-testing'),
    linkLabel: 'School fit testing',
    icon: 'school',
    internal: true,
  },
  {
    id: 'workplaces',
    title: 'Workplaces & Organizations',
    description: 'Group-friendly testing for teams that need documented fit tests.',
    href: servicePath('workplace-fit-testing'),
    linkLabel: 'Workplace fit testing',
    icon: 'people',
    internal: true,
  },
  {
    id: 'locations',
    title: 'Pop-Up Locations Throughout New York',
    description: 'Manhattan, Brooklyn, and pop-up appointments across New York.',
    href: ROUTES.services,
    linkLabel: 'View locations',
    icon: 'pin',
    internal: true,
  },
  {
    id: 'ecards',
    title: 'Documented E-Cards',
    description: `A QR e-card emailed after your test, targeting delivery within two business days, kept on file for up to ${RECORD_YEARS} years.`,
    href: HOME_HASH.sampleEcard,
    linkLabel: 'See a sample e-card',
    icon: 'card',
  },
];

export const HOME_STEPS = [
  {
    number: '1',
    title: 'Schedule',
    description: 'Book a Manhattan or Brooklyn appointment, or ask about an on-site group.',
  },
  {
    number: '2',
    title: 'Test',
    description: 'Trained fit testers perform a qualitative fit test aligned with OSHA 29 CFR 1910.134 Appendix A.',
  },
  {
    number: '3',
    title: 'Get Your E-Card',
    description: 'We email your e-card with a two-business-day delivery target, not a same-day guarantee. Scan the QR to verify it.',
  },
  {
    number: '4',
    title: 'Keep the Record',
    description: 'The record stays on file for up to 3 years. It covers the listed respirator only and is not a medical clearance.',
  },
];

export const HOME_REVIEWS = [
  {
    text: 'Quick, professional service. The technician was thorough and explained everything clearly.',
    author: 'Sarah M., Construction Manager',
  },
  {
    text: 'Very convenient location and fast turnaround. Highly recommend for workplace compliance.',
    author: 'Michael R., Safety Coordinator',
  },
];

export const HERO_TRUST = [
  { icon: 'shield', label: 'Aligned with OSHA 29 CFR 1910.134 Appendix A' },
  { icon: 'card', label: 'QR\u2011verifiable e-card (2\u2011business-day target)' },
  { icon: 'verify', label: '3\u2011year record storage · Not medical clearance' },
];
