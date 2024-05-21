import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Header from '../Home/Header'

const Layout = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout