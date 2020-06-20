import Head from 'next/head';
import Layout from '../../../components/Layout';
import Date from '../../../components/Date';
import utilStyles from '../../../styles/utils.module.css';
import {getAllPostIds, getPostData} from '../../../lib/posts';
import type {PostProps} from '../../../types/post';

interface Props {
  postData: PostProps;
}

export default function Post(props: Props) {
  const {
    postData: {title, id, date, contentHtml},
  } = props;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>{title}</h1>
        <div className={utilStyles.lightText}>
          <Date date={date} />
        </div>
        <div dangerouslySetInnerHTML={{__html: contentHtml}} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const postData = await getPostData(params.id);
  return {
    props: {postData},
  };
}
