import './App.css';
import React from 'react';
import Navbar from './components/inc/Navbar';
import Main from './components/pages/Main';
import News from './components/pages/News';
import About from './components/pages/About';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {
  return (

    <Router>
      <div className='App'>
        <Navbar /> 
          <div className="content">
            <Routes>
              <Route path='' element={<Main/>} />
              <Route path='/news' element={<News/>} />
              <Route path='/about' element={<About/>} /> 
            </Routes>
          </div>   
      </div> 
    </Router>
      


  );
}

export default App;

