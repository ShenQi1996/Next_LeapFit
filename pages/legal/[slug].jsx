import LegalPolicyPage from '../../components/LegalPolicyPage';
import { LEGAL_POLICIES, getPolicyPageProps } from '../../lib/legal';

export default LegalPolicyPage;

export function getStaticPaths() {
  return {
    paths: LEGAL_POLICIES.map((policy) => ({ params: { slug: policy.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return getPolicyPageProps(params.slug);
}
