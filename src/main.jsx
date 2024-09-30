import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Home from './components/home/Home.jsx'
import Details from './components/details/Details.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} >
      </Route>
{/* </Route> */}
      <Route path='details' element={<Details />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
 
)
