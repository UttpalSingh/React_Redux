import React from 'react'
import fetchPhotos, { fetchVideos } from './api/mediaApi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'

const App = () => {

  

  return (
    <div className='h-screen w-full bg-gray-800 text-white'>
      <SearchBar/>
      <Tabs/>
    </div>
  )
}

export default App
