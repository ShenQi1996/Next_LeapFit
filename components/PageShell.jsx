import { useRouter } from 'next/router';
import SeoHead from './SeoHead';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import ChatWidget from './ChatWidget';
import { seoJsonLdPayload } from '../lib/seo';
import { absoluteUrl } from '../lib/site';
import layoutStyles from '../styles/layout.module.scss';
import pageStyles from '../styles/legal.module.scss';

const pathWithoutQuery = (asPath) => asPath.split('#')[0].split('?')[0];

const PageShell = ({
  title,
  description,
  current,
  home = false,
  onSampleEcard,
  jsonLd,
  children,
}) => {
  const router = useRouter();
  const canonical = absoluteUrl(pathWithoutQuery(router.asPath || '/'));

  return (
    <div className={layoutStyles.pageFrame}>
      <SeoHead
        title={title}
        description={description}
        canonical={canonical}
        home={home}
        jsonLd={seoJsonLdPayload(jsonLd)}
      />
      <SiteHeader home={home} current={current} />
      <main className={home ? undefined : pageStyles.main}>{children}</main>
      <SiteFooter home={home} onSampleEcard={onSampleEcard} />
      <ChatWidget />
    </div>
  );
};

export default PageShell;
