import { servicePath } from './routes';
import {
  BOOKING_SITES,
  BROOKLYN_EMAIL,
  FIT_TEST_PRICE,
  OSHA_LABEL,
  RECORD_YEARS,
  pageTitle,
} from './site';

const ctaKeys = BOOKING_SITES.map((site) => site.id);

export const SERVICE_PAGES = [
  {
    slug: 'fit-testing-manhattan',
    navLabel: 'Manhattan',
    kicker: 'Manhattan',
    inFooter: true,
    h1: 'Respiratory fit testing in Manhattan',
    title: pageTitle('Fit Testing in Manhattan'),
    description: `OSHA-compliant respiratory fit testing in Manhattan. ${FIT_TEST_PRICE} per test, documented e-cards, and online booking.`,
    lead:
      'Book a Manhattan appointment for qualitative respirator fit testing. After the test, we email a documented e-card you can scan to verify.',
    sections: [
      {
        heading: 'Who this is for',
        body: 'Workers, students, and individuals who need a fit test in Manhattan and a record their employer or school can check.',
      },
      {
        heading: 'What you get',
        body: `One appointment is ${FIT_TEST_PRICE} for one person and one selected respirator. Testing follows ${OSHA_LABEL}. We keep the record on file for up to ${RECORD_YEARS} years.`,
      },
      {
        heading: 'How to book',
        body: 'Use the Manhattan scheduling link. Your confirmation shows the testing location for that appointment. We also test in Brooklyn if that is closer.',
      },
    ],
    ctas: ['manhattan', 'brooklyn', 'contact'],
  },
  {
    slug: 'fit-testing-brooklyn',
    navLabel: 'Brooklyn',
    kicker: 'Brooklyn',
    inFooter: true,
    h1: 'Respiratory fit testing in Brooklyn',
    title: pageTitle('Fit Testing in Brooklyn'),
    description: `OSHA-compliant respiratory fit testing in Brooklyn. ${FIT_TEST_PRICE} per test, documented e-cards, and online booking.`,
    lead:
      'Book a Brooklyn appointment for qualitative respirator fit testing. After the test, we email a documented e-card you can scan to verify.',
    sections: [
      {
        heading: 'Who this is for',
        body: 'People who need a fit test in Brooklyn, including workplaces, schools, and individual appointments.',
      },
      {
        heading: 'What you get',
        body: `One appointment is ${FIT_TEST_PRICE} for one person and one selected respirator. Testing follows ${OSHA_LABEL}. Brooklyn questions can go to ${BROOKLYN_EMAIL}.`,
      },
      {
        heading: 'How to book',
        body: 'Use the Brooklyn scheduling link. Check the confirmation for the entity, location, and contact details for that appointment.',
      },
    ],
    ctas: ['brooklyn', 'manhattan', 'contact'],
  },
  {
    slug: 'osha-respiratory-fit-testing',
    navLabel: 'OSHA fit testing',
    kicker: 'OSHA',
    h1: 'OSHA-compliant respiratory fit testing',
    title: pageTitle('OSHA Respiratory Fit Testing'),
    description: `Qualitative respiratory fit testing that follows ${OSHA_LABEL}. ${FIT_TEST_PRICE} per test in New York.`,
    lead:
      'We perform qualitative fit testing so the respirator you wear is checked the way OSHA describes in Appendix A.',
    sections: [
      {
        heading: 'What “OSHA-compliant” means here',
        body: `The test follows ${OSHA_LABEL} protocols. A pass applies only to the listed respirator. A next-test date is not a guarantee of protection until then.`,
      },
      {
        heading: 'What a record is not',
        body: `A fit-test record is not a medical clearance. The employer remains responsible for its respiratory-protection program. ${RECORD_YEARS} years of record storage is not a three-year testing interval.`,
      },
      {
        heading: 'After the test',
        body: 'We email a documented e-card with a QR code. Anyone can verify the record without a public name search. Lost cards can be resent with the name, date of birth, and email from the original test.',
      },
    ],
    ctas: [...ctaKeys, 'contact'],
  },
  {
    slug: 'school-fit-testing',
    navLabel: 'Schools',
    kicker: 'Schools',
    h1: 'Fit testing for schools and educational institutions',
    title: pageTitle('School Fit Testing'),
    description:
      'On-site and pop-up respiratory fit testing for students and staff in New York. Ask for a group quote.',
    lead:
      'Schools and other education sites can book individual appointments or email us for a written group quote.',
    sections: [
      {
        heading: 'Who this is for',
        body: 'Students and staff who need a documented respirator fit test. We can work from pop-up locations or discuss an on-site visit.',
      },
      {
        heading: 'Records schools can check',
        body: 'After testing, we email an e-card with a QR code. A school can scan it to confirm the record is on file, still valid, expired, or did not pass — without a public name search.',
      },
      {
        heading: 'Group visits',
        body: 'Email for a written quote. A quote request does not reserve a date or authorize charges. Individual tests can be booked online for Manhattan or Brooklyn.',
      },
    ],
    ctas: ['contact', ...ctaKeys],
  },
  {
    slug: 'workplace-fit-testing',
    navLabel: 'Workplaces',
    kicker: 'Workplaces',
    h1: 'Fit testing for workplaces and organizations',
    title: pageTitle('Workplace Fit Testing'),
    description: `Group-friendly OSHA respiratory fit testing for New York teams. ${FIT_TEST_PRICE} per individual test, or email for a group quote.`,
    lead:
      'Teams that need to stay compliant can book one person at a time or ask about a group-friendly visit.',
    sections: [
      {
        heading: 'Who this is for',
        body: 'Construction, healthcare, and other workplaces that need qualitative fit testing and a record they can verify later.',
      },
      {
        heading: 'What teams receive',
        body: `Each individual test is ${FIT_TEST_PRICE} for one person and one selected respirator. We email a documented e-card and keep the record on file for up to ${RECORD_YEARS} years.`,
      },
      {
        heading: 'How to schedule a group',
        body: 'Email for a written quote for on-site or pop-up testing. A request for a quote does not reserve a date. Individuals can also book Manhattan or Brooklyn appointments online.',
      },
    ],
    ctas: ['contact', ...ctaKeys],
  },
];

export const getServicePage = (slug) => SERVICE_PAGES.find((page) => page.slug === slug) || null;

export const getServiceSlugs = () => SERVICE_PAGES.map((page) => page.slug);

export const getServiceHref = (slug) => servicePath(slug);
