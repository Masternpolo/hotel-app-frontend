import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import Home from './Home'
import Hotel from './Hotel'
import Contact from './Contact'
import About from './About'
import Rooms from './Rooms'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      { index: true, element: <Hotel /> },
      { path: '/contact', element: <Contact /> },
      { path: '/about', element: <About /> },
      { path: '/rooms', element: <Rooms /> },
    ]
  },

])
function App() {


  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
