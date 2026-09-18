import ServicePage from '../components/ServicePage';
import { getServicePage, getServiceSlugs } from '../lib/servicePages';

const ServiceLocationPage = ({ page }) => <ServicePage page={page} />;

export const getStaticPaths = () => ({
  paths: getServiceSlugs().map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps = ({ params }) => {
  const page = getServicePage(params.slug);
  if (!page) {
    return { notFound: true };
  }
  return { props: { page } };
};

export default ServiceLocationPage;
