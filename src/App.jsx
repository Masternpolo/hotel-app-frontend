import { Outlet } from 'react-router-dom';
import NavBar from './NavBar'
import Footer from './Footer'

function App() {


  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      {/* <Register /> */}
    </>
  )
}

export default App
