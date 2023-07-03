import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.tsx'
import Success from './pages/Success.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  { 
    path: 'Success',
    element : <Success />
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
