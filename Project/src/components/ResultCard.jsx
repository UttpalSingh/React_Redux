import React from 'react'

const ResultCard = ({item}) => {
  return (
    <div className='relative w-70 h-70 bg-white rounded'>
        <div className='h-full'>
            {item.type == 'photo' ? <img className='h-full w-full object-cover object-center ' src= {item.src} alt="" /> : ''}
            {item.type == 'video' ? <video className='h-full w-full object-cover object-center ' autoPlay loop muted src={item.src}></video> : ''}
        </div>
      <div id='bottom'  className='absolute bottom-0 text-white'>{item.title}</div>
    </div>
  )
}

export default ResultCard
