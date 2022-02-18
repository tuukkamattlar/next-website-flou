import '@styles/globals.css'
import Head from 'next/head'
import NavBar from '@components/Navbar'
import Footer from '@components/Footer'
import { useState } from 'react'

function Application({ Component, pageProps }) {
  const [lan, setLan] = useState('fi')
  return(
    <>
      <Head>
        <title>FLOU</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <div className='minHeight'>
        <NavBar setLan={setLan} lan={lan}/>
        <Component {...pageProps} lan={lan} />
      </div>
      <Footer />
    </>
  )
}

export default Application
