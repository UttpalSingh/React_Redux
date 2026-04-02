import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyAmount } from './features/counterslice'

const App = () => {
  const [num, setnum] = useState(0)
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  return (
    <div>
      <h1>{count}</h1>
      <input type="number" value={num} onChange={(e)=>{
        setnum(e.target.value)
      }} />
      <button onClick={()=>{
        dispatch(increment())
      }}>increment</button>

      <button onClick={() =>{
        dispatch(decrement(num))
      }}>decrement</button>

      <button onClick={() =>{
        dispatch(incrementbyAmount(Number(num)))
      }}>increseByAmount</button>
    </div>
  )
}

export default App
