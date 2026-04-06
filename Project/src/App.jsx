import React from 'react'
import fetchPhotos from './api/mediaApi'

const App = () => {


  return (
    <div className='h-screen w-full bg-gray-800 text-white'>
      <button onClick={()=>fetchPhotos('cat')}>get Photos</button>
    </div>
  )
}

export default App
