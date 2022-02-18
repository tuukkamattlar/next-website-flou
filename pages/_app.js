import '@styles/globals.css'
import Head from 'next/head'
import NavBar from '@components/Navbar'
import Footer from '@components/Footer'

function Application({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>FLOU</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <div className='minHeight'>
        <NavBar/>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default Application
