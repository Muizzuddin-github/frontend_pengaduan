import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Dashboard from './Components/Menu/Dashboard'
import Kisar from './Kisar'
import KisarUser from './KisarUser'

const router = createBrowserRouter([
  {
    path : "/",
    element : (
      <h1>hello world</h1>
    )
  },
  {
    path : "login",
    element :  <App />
  },
  {
    path : "/dashboard/kritik-saran",
    element : <KisarUser />
  },
  {
    path : "/admin",
    element : <Dashboard/>
  },
  {
    path : "/admin/kritik-saran",
    element : <Kisar />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
