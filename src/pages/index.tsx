import Head from 'next/head';
import Link from 'next/link';
import {SiteTitle, Layout} from '../components';
import utilStyles from '../styles/utils.module.css';
import {getSortedPostsData} from '../lib/posts';

interface Props {}

export default function Home(props: Props) {
  return (
    <Layout home>
      <Head>
        <title>{SiteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Zach Riel</p>
        <p>This is my website!</p>
      </section>
      <Link href="/blog">
        <a>test</a>
      </Link>
    </Layout>
  );
}
