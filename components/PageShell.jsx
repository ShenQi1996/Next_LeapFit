import Head from 'next/head';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import ChatWidget from './ChatWidget';
import layoutStyles from '../styles/layout.module.scss';
import pageStyles from '../styles/legal.module.scss';

// `home` switches nav anchors to same-page hashes and lets sections run full-bleed
// instead of sitting in the centered content column used by the inner pages.
const PageShell = ({ title, description, current, home = false, onSampleEcard, children }) => (
  <div className={layoutStyles.pageFrame}>
    <Head>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
    </Head>
    <SiteHeader home={home} current={current} />
    <main className={home ? undefined : pageStyles.main}>{children}</main>
    <SiteFooter home={home} onSampleEcard={onSampleEcard} />
    <ChatWidget />
  </div>
);

export default PageShell;
