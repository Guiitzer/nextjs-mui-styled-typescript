import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import globaltheme from '../styles/globaltheme'
import AppTheme from '../styles/theme';
import GlobalStyle from '../styles/global';

export default function MyApp(props: any): JSX.Element {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles: any = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  });

  return (
    <>
      <Head>
        <title>Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <AppTheme>
        <ThemeProvider theme={globaltheme}>
        <Component {...pageProps} />
        <GlobalStyle />
        </ThemeProvider>
      </AppTheme>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
