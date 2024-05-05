import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Login from './components/Login'
import Regsiter from './components/Regsiter'
import Navbar from './components/Navbar'
import Main from './components/Main'
import {Routes, Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <h1>hhh</h1>
      
    </>
  )
}

export default App
