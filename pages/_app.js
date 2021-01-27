import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json'
import Head from 'next/head'

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
    font-family: 'Alef', sans-serif
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme



export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Alef&display=swap" rel="stylesheet"/>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <iframe width="0" height="0" src="https://www.youtube.com/embed/_tV5LEBDs7w?controls=0?rel=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </ThemeProvider>
    </>
  )
}

// musicas 
// https://www.youtube.com/embed/-ROAj71OiUU?controls=0?rel=0&autoplay=1
// https://www.youtube.com/embed/Np8cEtbLis4?controls=0?rel=0&autoplay=1
// https://www.youtube.com/embed/_tV5LEBDs7w?controls=0?rel=0&autoplay=1