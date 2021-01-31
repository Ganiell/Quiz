import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json'
import Head from 'next/head'
import BackgroundImg from '../src/components/BackgroundImg'

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


  const [indexImg, setIndexImg] = React.useState(0)
      React.useEffect(() => {
        setTimeout(()=> {
          if(indexImg < db.images.length - 1) {
            setIndexImg(indexImg + 1)
          } else {
            setIndexImg(0)
          }
        }, 1 * 7000)
      }, [indexImg])


  return (
    <>
      <Head>
        <link rel="shortcut icon" href="https://www.flaticon.com/svg/vstatic/svg/4126/4126017.svg?token=exp=1611974406~hmac=3135528bda562f918c57d127117d793d" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Alef&display=swap" rel="stylesheet"/>
      </Head>
      <ThemeProvider theme={theme}>
        <BackgroundImg image={db.images[indexImg]}>
          <GlobalStyle />
          <Component {...pageProps}> 
          </Component>
            <iframe width="1" height="1" src="https://www.youtube.com/embed/_tV5LEBDs7w?controls=0?rel=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </BackgroundImg>
      </ThemeProvider>
    </>
  )
}

// musicas 
// https://www.youtube.com/embed/-ROAj71OiUU?controls=0?rel=0&autoplay=1
// https://www.youtube.com/embed/Np8cEtbLis4?controls=0?rel=0&autoplay=1
// https://www.youtube.com/embed/_tV5LEBDs7w?controls=0?rel=0&autoplay=1