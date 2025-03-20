import React from 'react';
import Navbar from './components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Cursor from './components/Cursor/Cursor';
import { Analytics } from "@vercel/analytics/react";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Analytics />
      <Navbar />
      <Cursor />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
