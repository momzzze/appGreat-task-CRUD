import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './pages/Footer/Footer'


function App() {

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
