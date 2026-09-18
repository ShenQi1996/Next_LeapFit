import { HOME_HASH, ROUTES, servicePath } from './routes';
import { OSHA_LABEL, VERIFY_ECARD_URL } from './site';

export const HOME_SERVICES = [
  {
    id: 'verify',
    title: 'Verify an E-Card',
    description: 'Scan the QR or enter the confirm code. Anyone can check that a Secure Fit record is authentic.',
    href: VERIFY_ECARD_URL,
    linkLabel: 'Verify an e-card',
    icon: 'verify',
    external: true,
  },
  {
    id: 'fit-testing',
    title: 'Professional Respiratory Fit Testing',
    description: 'Qualitative testing so your respirator actually protects you.',
    href: HOME_HASH.schedule,
    linkLabel: 'Schedule a test',
    icon: 'mask',
  },
  {
    id: 'osha',
    title: 'OSHA-Compliant Protocols',
    description: `Testing follows ${OSHA_LABEL} guidelines.`,
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
    description: 'Group-friendly testing for teams that need to stay compliant.',
    href: servicePath('workplace-fit-testing'),
    linkLabel: 'Workplace fit testing',
    icon: 'people',
    internal: true,
  },
  {
    id: 'locations',
    title: 'Pop-Up Locations Throughout New York',
    description: 'Convenient stations, including Manhattan and Brooklyn appointments.',
    href: ROUTES.services,
    linkLabel: 'View locations',
    icon: 'pin',
    internal: true,
  },
  {
    id: 'ecards',
    title: 'Documented E-Cards & 3-Year Records',
    description: 'Official fit-test e-cards emailed after your test, kept on file, and scannable to verify.',
    href: HOME_HASH.sampleEcard,
    linkLabel: 'See a sample e-card',
    icon: 'card',
  },
];

export const HOME_STEPS = [
  { number: '1', title: 'Schedule', description: 'Book a Manhattan or Brooklyn appointment online.' },
  { number: '2', title: 'Test', description: 'Trained specialists perform an OSHA-compliant fit test.' },
  { number: '3', title: 'Get Your E-Card', description: 'We email your official e-card. Scan the QR to verify it anytime.' },
  { number: '4', title: 'Breathe Confidently', description: 'You leave with documentation for the respirator that was tested.' },
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

export const HOME_TRUST = [
  { icon: 'shield', label: 'OSHA-Compliant' },
  { icon: 'person', label: 'Experienced team' },
  { icon: 'pin', label: 'Convenient Locations' },
  { icon: 'card', label: 'Fast E-Cards' },
  { icon: 'verify', label: 'Scan to verify' },
];
