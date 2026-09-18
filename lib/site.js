export const SITE_NAME = 'Secure Fit LLC';
export const SITE_SHORT_NAME = 'Secure Fit';
export const TAGLINE = 'Precision in every breath';
export const MOTTO = 'Fit. Test. Breathe. Confidently.';
export const COPYRIGHT_YEAR = 2024;

export const OSHA_RULE = '29 CFR 1910.134';
export const OSHA_APPENDIX = 'Appendix A';
export const OSHA_SHORT = `${OSHA_RULE} ${OSHA_APPENDIX}`;
export const OSHA_LABEL = `OSHA ${OSHA_SHORT}`;

export const RECORD_YEARS = 3;
export const FIT_TEST_PRICE = '$75';
export const MASK_PRICE = '$10';

export const CONTACT_EMAIL = 'SecureFit2024@gmail.com';
export const BROOKLYN_EMAIL = 'Securefit.bk@gmail.com';
export const CONTACT_PHONE = '+1 646 748 3677';
export const CONTACT_PHONE_HREF = 'tel:+16467483677';
export const SERVICE_AREA = 'New York Area, Brooklyn, NY';
export const LEGAL_EFFECTIVE_DATE = 'September 8, 2026';
export const LEGAL_MAILING_LINE = 'New York Area, Brooklyn, NY';

export const ECARD_APP_ORIGIN = 'https://2026-fit-testing-results-e-card.vercel.app';
export const RESEND_ECARD_URL = `${ECARD_APP_ORIGIN}/resend`;
export const VERIFY_ECARD_URL = `${ECARD_APP_ORIGIN}/verify`;

// Add or edit booking cities here. Header/footer/service CTAs read this list.
export const BOOKING_SITES = [
  {
    id: 'manhattan',
    name: 'Manhattan',
    calendly: 'https://calendly.com/Securefit2024',
    scheduleLabel: 'Schedule Manhattan',
    bookLabel: 'Book a Manhattan appointment',
  },
  {
    id: 'brooklyn',
    name: 'Brooklyn',
    calendly: 'https://calendly.com/securefit-bk/15-mins',
    email: BROOKLYN_EMAIL,
    scheduleLabel: 'Schedule Brooklyn',
    bookLabel: 'Book a Brooklyn appointment',
  },
];

export const getBookingSite = (id) => BOOKING_SITES.find((site) => site.id === id);

export const MANHATTAN_CALENDLY = getBookingSite('manhattan').calendly;
export const BROOKLYN_CALENDLY = getBookingSite('brooklyn').calendly;

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://secure-fit-llc.app').replace(
  /\/$/,
  '',
);

export const SITE_ORIGINS = [
  SITE_URL,
  'https://next-leap-fit.vercel.app',
  'https://next-leap-fit-bk-2026.vercel.app',
];

export const DEFAULT_TITLE = `${SITE_NAME} | Respiratory Fit Testing`;
export const DEFAULT_DESCRIPTION =
  `OSHA-compliant respiratory fit testing in New York. ${FIT_TEST_PRICE} per test, documented e-cards you can scan to verify, and records kept for up to ${RECORD_YEARS} years.`;

export const pageTitle = (prefix) => (prefix ? `${prefix} | ${SITE_NAME}` : DEFAULT_TITLE);

export const mailto = (email) => `mailto:${email}`;

export const absoluteUrl = (path = '/') => {
  if (!path || path === '/') {
    return SITE_URL;
  }
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};

export const FOOTER_DISCLAIMERS = [
  `Fit testing follows ${OSHA_LABEL} protocols. A pass applies only to the listed respirator. A next-test date is not a guarantee of protection until then. ${RECORD_YEARS} years of record storage is not a three-year testing interval.`,
  'A fit-test record is not a medical clearance. The employer remains responsible for its respiratory-protection program.',
  'The sample e-card is for demonstration only and is not a valid fit-test record. Scan a real card to verify.',
];
