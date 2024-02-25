// import { useState } from 'react'
import './App.css'
import { Greeting } from '@/components/Greeting'
import { Counter } from './components/Counter'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Greeting />
      <Counter init={0}/>
    </>
  )
}

export default App
