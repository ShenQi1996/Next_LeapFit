import {
  BROOKLYN_CALENDLY,
  BROOKLYN_EMAIL,
  CONTACT_EMAIL,
  ECARD_APP_ORIGIN,
  MANHATTAN_CALENDLY,
  SITE_ORIGINS,
} from './site';

export const MAX_DAILY_QUESTIONS = 30;
export const MAX_MESSAGE_LENGTH = 1000;

export const LIMIT_MESSAGE =
  `You've asked ${MAX_DAILY_QUESTIONS} questions today. Email us at ${CONTACT_EMAIL} ` +
  "or grab a time on the calendar — we'll take it from there.";

const hostOf = (url) => new URL(url).hostname.toLowerCase();

// Calendly links are sometimes written with the www prefix, so accept both forms.
const withWww = (host) => [host, `www.${host}`];

export const ALLOWED_LINK_HOSTS = new Set([
  ...withWww(hostOf(MANHATTAN_CALENDLY)),
  ...withWww(hostOf(BROOKLYN_CALENDLY)),
  hostOf(ECARD_APP_ORIGIN),
  ...SITE_ORIGINS.map(hostOf),
]);

export const ALLOWED_EMAILS = new Set([
  CONTACT_EMAIL.toLowerCase(),
  BROOKLYN_EMAIL.toLowerCase(),
]);
