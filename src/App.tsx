import './App.css'
import { Greeting } from '@/components/Greeting'
import { Counter } from './components/organisms/calculation/Counter'

function App() {
  return (
    <>
      <Greeting />
      <Counter init={0}/>
    </>
  )
}

export default App
