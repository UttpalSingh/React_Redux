import React from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

const App = () => {
  return (
    <div className='flex flex-col justify-center relative top-32' >
      <h1>Learn about redux toolkit</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}
export default App
 