import Head from 'next/head';
import { DEFAULT_DESCRIPTION, SITE_NAME } from '../lib/site';

const SeoHead = ({ title, description, canonical, home = false, jsonLd }) => {
  const metaDescription = description || DEFAULT_DESCRIPTION;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      <meta property="og:type" content={home ? 'website' : 'article'} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
    </Head>
  );
};

export default SeoHead;
