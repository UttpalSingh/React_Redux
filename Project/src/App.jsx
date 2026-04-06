import React from 'react'
import fetchPhotos, { fetchVideos } from './api/mediaApi'

const App = () => {

  

  return (
    <div className='h-screen w-full bg-gray-800 text-white'>
      <button className='text-2xl p-3 bg-green-900 m-3' onClick={()=>fetchPhotos('cat')}>get Photos</button>
      <button className='text-2xl p-3 bg-green-900 m-3' onClick={()=>fetchVideos('cat')}>get videos</button>
    </div>
  )
}

export default App
