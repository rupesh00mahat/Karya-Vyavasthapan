import { useState } from 'react'
import Navbar from './components/navbar'
import './style/global.css';
import Sidebar from './components/sidebar';
import ContentArea from './components/content-area';
function App() {

  return (
    <>
        <Navbar/>
        <div className='body-wrapper'>
          <Sidebar/>
          <ContentArea/>
        </div>
    </>
  )
}

export default App
