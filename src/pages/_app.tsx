import React, {useEffect} from 'react';
import Head from 'next/head';
import {ThemeProvider, CssBaseline} from '@material-ui/core';
import {NoteProvider} from '../lib/Notify';
import '../styles/global.css';
import theme from '../theme';
import {StoreProvider} from '../store';

export default function App({Component, pageProps}) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    // <Head />
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <NoteProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </NoteProvider>
      </StoreProvider>
    </ThemeProvider>
  );
}
