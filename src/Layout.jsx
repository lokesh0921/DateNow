import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Cursor from './components/Cursor/Cursor'
import { Analytics } from "@vercel/analytics/react"


function Layout() {
  return (
    <>
    <Analytics/>
    <Navbar/>
    <Cursor />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout