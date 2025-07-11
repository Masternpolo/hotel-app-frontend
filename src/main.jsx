import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './NavBar'
import Error from './Error'
import Register from './Register'
import Home from './Home'
import Hotel from './Hotel'
import Contact from './Contact'
import About from './About'
import Rooms from './Rooms'
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, errorElement: <Error />,
    children: [
      { path: '', element: <Home /> },
      { path: 'hotel', element: <Hotel /> },
      { path: 'rooms', element: <Rooms /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  { path: 'register', element: <Register /> },
  { path: 'login', element: <Login /> },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
