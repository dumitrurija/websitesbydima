import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

const Layout = ({ children }) => {
  return <div className='w-10/12 m-auto'>
    <Header />
    {children}
    {/* <Footer /> */}
  </div>
}

export default Layout