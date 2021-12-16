import React from 'react';
import NavBar from '../../src/components/headerlayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NavBar>
      <Component {...pageProps} />
    </NavBar>
      
  )
}

export default MyApp

