import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import News from './components/News'
import Login from './components/Login'
import Register from './components/Register'
import Hero from './components/Hero'
import {Route, Routes, useLocation} from 'react-router-dom'
import ProtectedRoute from './components/ProtectRoutes'



function App() {

  const location = useLocation()
  const noNavbar = location.pathname === "/register" || location.pathname === "/"

  return (
    <>
    {
      noNavbar ? 
      <Routes>
        <Route path="/" element= {<Login />} />
        <Route path="/register" element= {<Register />} />
      </Routes>

      :

      <div className="App">
      <Navbar />
      <Routes>
        {/* <Route element={<ProtectedRoute/>}> */}
          <Route path="/home" element= {<Home />} />
          <Route path="/hero" element= {<Hero />} />
          <Route path="/news" element= {<News />} />
          <Route path="/about" element= {<About />} />
        {/* </Route> */}
      </Routes>
      </div>

    }
    </>
    

  )
}

export default App;