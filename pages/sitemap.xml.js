import { writeBody } from '../lib/http';
import { getSitemapPaths } from '../lib/seo';
import { absoluteUrl } from '../lib/site';

const sitemapXml = (paths) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (path) => `  <url>
    <loc>${absoluteUrl(path)}</loc>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const SiteMap = () => null;

export const getServerSideProps = ({ res }) =>
  writeBody(res, sitemapXml(getSitemapPaths()), 'text/xml');

export default SiteMap;
