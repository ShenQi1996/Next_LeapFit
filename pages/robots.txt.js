import { writeBody } from '../lib/http';
import { SITE_URL } from '../lib/site';

const robotsTxt = () => `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

const Robots = () => null;

export const getServerSideProps = ({ res }) => writeBody(res, robotsTxt(), 'text/plain');

export default Robots;
