import Link from 'next/link';
import Date from '../../components/Date';
import utilStyles from '../../styles/utils.module.css';
import {PostProps} from '../../types/post';
import useRoute from '../../hooks/useRoute';

export interface Props {
  allPostData: PostProps[];
}

function PostItem(props: PostProps) {
  const {id, date, title} = props;
  const rawPath = '/blog/posts/[id]';
  const resolvedPath = `/blog/posts/${id}`;
  return (
    <li className={utilStyles.listItem}>
      <Link href={rawPath} as={resolvedPath}>
        <a>{title}</a>
      </Link>
      <br />
      <small className={utilStyles.lightText}>
        <Date date={date} />
      </small>
    </li>
  );
}

export default function PostList({allPostData}: Props) {
  return (
    <ul className={utilStyles.list}>
      {allPostData.map((post) => (
        <PostItem {...post} key={post.id} />
      ))}
    </ul>
  );
}
