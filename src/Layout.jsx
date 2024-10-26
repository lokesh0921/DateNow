import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Cursor from './components/Cursor/Cursor'


function Layout() {
  return (
    <>
    <Navbar/>
    <Cursor />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout