// import styles from './Layout.module.css';
// import utilStyles from '../../styles/utils.module.css';
import {Container, Box, Toolbar, Fab} from '@material-ui/core';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import type {ReactNode} from 'react';
import Copyright from '../Copyright';
import Navbar from '../Navbar';
import ScrollTop from '../ScrollTop';
import {KeyboardArrowUp} from '@material-ui/icons';

const Name = 'Zach Riel';
const SiteTitle = 'Fullstack Software Developer';
const TitleMeta =
  `https://og-image.now.sh/${encodeURI(SiteTitle)}` +
  '.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2F' +
  'assets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2F' +
  'design%2Fnextjs-black-logo.svg';

interface Props {
  children?: ReactNode;
  home?: boolean;
}

function Layout(props: Props) {
  const router = useRouter();
  const {children, home} = props;
  const scrollTopAnchorId = 'back-to-top-anchor';
  return (
    <>
      <Container maxWidth="sm">
        <Navbar />
        <Toolbar id={scrollTopAnchorId} />
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Personal website" />
          <meta property="og:image" content={TitleMeta} />
          <meta name="og:title" content={SiteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Box my={4}>
          {children}
          <Copyright />
        </Box>
      </Container>
      <ScrollTop anchorId={scrollTopAnchorId}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default Layout;
export {SiteTitle};
