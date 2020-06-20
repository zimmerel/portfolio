import PostList from './PostList';
import utilStyles from '../../styles/utils.module.css';
import {getSortedPostsData} from '../../lib/posts';
import {PostProps} from '../../types/post';
import {Layout} from '../../components';

export async function getStaticProps() {
  return {
    props: {allPostData: getSortedPostsData()},
  };
}

interface Props {
  allPostData: PostProps[];
}

export default function Blog(props: Props) {
  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <PostList {...props} />
      </section>
    </Layout>
  );
}
