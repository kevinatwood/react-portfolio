import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, Route, RouterProvider} from 'react-router-dom'
import AboutMe from './pages/AboutMe.jsx'
import Resume from './pages/Resume.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />,
    children: [
      {
        path: '/',
        element: <AboutMe />
      },
      {
        path: '/resume',
        element: <Resume />
      },
      {
        path: '/portfolio',
        element: <Portfolio/>
      }, 
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router}/>
  </React.StrictMode>,
)
