import Head from 'next/head';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import ChatWidget from './ChatWidget';
import homeStyles from '../pages/style/index.module.scss';
import pageStyles from '../pages/style/legal.module.scss';

const PageShell = ({ title, description, current, children }) => (
  <div className={homeStyles.pageFrame}>
    <Head>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
    </Head>
    <SiteHeader current={current} />
    <main className={pageStyles.main}>{children}</main>
    <SiteFooter />
    <ChatWidget />
  </div>
);

export default PageShell;
