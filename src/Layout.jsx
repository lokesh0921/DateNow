import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Cursor from "./components/Cursor/Cursor";
import { Analytics } from "@vercel/analytics/react";
import { AuthProvider } from "./context/AuthContext";

function Layout() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Analytics />
        <Navbar />
        <Cursor />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default Layout;
