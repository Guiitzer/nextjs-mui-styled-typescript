import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import createCache from '@emotion/cache';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';

import AppTheme from '../styles/theme';
import globaltheme from '../styles/globaltheme';
import GlobalStyle from '../styles/global';



// Client-side cache, shared for the whole session of the user in the browser.
function createEmotionCache(): EmotionCache {
  return createCache({ key: 'css' });
}

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps): JSX.Element {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AppTheme>
      <ThemeProvider theme={globaltheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
      </AppTheme>
    </CacheProvider>
  );
}