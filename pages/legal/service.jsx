import LegalPolicyPage from '../../components/LegalPolicyPage';
import { getPolicyPageProps } from '../../lib/legalPolicies';

export default LegalPolicyPage;

export function getStaticProps() {
  return getPolicyPageProps('service');
}
