import React from 'react'

function Navbar() {
  return (
    <nav>
      <h1>Karya Vyavasthapan</h1>
     <span>Today's date</span>
     <div className="buttons-list">
      <button>Start</button>
      <button>Pause</button>
      <button>Stop</button>
     </div>
    </nav>
  )
}

export default Navbar