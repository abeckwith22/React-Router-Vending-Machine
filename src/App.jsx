import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

/* Components */
import VendingMachine from './VendingMachine'
import Soda from './Soda'
import Chips from './Chips'
import Cookie from './Cookie'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VendingMachine/>}/>
          <Route path='/cookies' element={<Cookie/>}/>
          <Route path='/soda' element={<Soda/>}/>
          <Route path='/chips' element={<Chips/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
