// import React from 'react'

import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      Main page
      <button className='border-2 p-2 rounded-2xl'>
        <Link to='/editor'>Go to code editor</Link>
      </button>
    </div>
  )
}

export default App
