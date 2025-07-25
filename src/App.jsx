import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Error from './pages/Error.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
import Hotel from './pages/Hotel.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Rooms from './Rooms'
import './index.css'
import Login from './pages/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    children: [
      { index: 'true', element: <Home /> },
      { path: 'hotel', element: <Hotel /> },
      { path: 'rooms', element: <Rooms /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  { path: 'register', element: <Register /> },
  { path: 'login', element: <Login /> },
  { path: '*', element: <Error /> },

]);

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
