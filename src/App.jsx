import { useState } from 'react'
import Navbar from './components/navbar'
import './style/global.css';
import Sidebar from './components/sidebar';
function App() {

  return (
    <>
        <Navbar/>
        <div className='body-wrapper'>
          <Sidebar/>
        </div>
    </>
  )
}

export default App
