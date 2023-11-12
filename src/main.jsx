import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MyRoute from './Router/MyRoute'
import AuthProvider from './Providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={MyRoute}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
