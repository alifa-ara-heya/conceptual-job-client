import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Main = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Outlet */}
      <div className='min-h-[calc(100vh-306px)]'>
        {/* navbar height + footer height */}
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Main
