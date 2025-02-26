import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css'

// components
import Home from './components/Home'
import Splash from './components/Splash'

const App = () => {
  return (
    <div className='bg-[rgb(15,23,45)]'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Splash />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App