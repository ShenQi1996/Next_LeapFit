export const ROUTES = {
  home: '/',
  services: '/services',
  contact: '/contact',
  legal: '/legal',
};

export const HOME_HASH = {
  top: '#top',
  services: '#services',
  howItWorks: '#how-it-works',
  whyPickUs: '#why-pick-us',
  schedule: '#schedule',
  sampleEcard: '#sample-ecard',
};

export const servicePath = (slug) => `/${slug}`;
export const legalPath = (slug) => `${ROUTES.legal}/${slug}`;
