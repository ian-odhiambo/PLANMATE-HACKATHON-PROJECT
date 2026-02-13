import { Outlet } from 'react-router-dom'
import Navbar from '../COMPONENTS/Navbar.jsx'
import Footer from '../COMPONENTS/Footer.jsx'


const MainLayOut = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default MainLayOut