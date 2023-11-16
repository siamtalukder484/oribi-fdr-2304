import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
        <Header/>
            <Outlet/>
        <Footer/>
    </>
  )
}

export default RootLayout