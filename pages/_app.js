import React from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Quiz Games da Imersão React da Alura" />
        <meta property="og:site_name" content="Quiz Games" />
        <meta property="og:description" content="Projeto da Imersão Alura, um quiz sobre Games" />
        <meta property="og:url" content="https://quiz-games.gabrielwolf-dev.vercel.app/" />
        <meta property="og:image" content="https://cdn.pixabay.com/photo/2018/09/05/06/19/signal-3655575_960_720.png" />
        <meta property="og:image:type" content="image/png" />

        <link id="favicon" rel="icon" type="image/x-icon" href="https://i.imgur.com/fQYeuhw.png" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
