import { LEGAL_POLICIES } from './policies';
import { POLICY_SECTIONS } from './sections';

export { LEGAL_DISCLAIMER, LEGAL_POLICIES } from './policies';

export const getNeighborPolicies = (slug) => {
  const index = LEGAL_POLICIES.findIndex((policy) => policy.slug === slug);
  if (index < 0) {
    return { previous: null, next: null };
  }
  return {
    previous: index > 0 ? LEGAL_POLICIES[index - 1] : null,
    next: index < LEGAL_POLICIES.length - 1 ? LEGAL_POLICIES[index + 1] : null,
  };
};

// Only called from getStaticProps, so the policy prose is serialized into each
// page's props at build time rather than shipped in the shared client bundle.
export const getPolicyPageProps = (slug) => {
  const policy = LEGAL_POLICIES.find((entry) => entry.slug === slug);
  if (!policy) {
    return { notFound: true };
  }
  const { previous, next } = getNeighborPolicies(slug);
  return {
    props: {
      policy: { ...policy, sections: POLICY_SECTIONS[slug] },
      previous: previous ? { slug: previous.slug, shortTitle: previous.shortTitle } : null,
      next: next ? { slug: next.slug, shortTitle: next.shortTitle } : null,
    },
  };
};
